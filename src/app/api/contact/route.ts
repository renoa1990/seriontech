import { NextResponse } from "next/server";
import { inquiryMessage, readInquiry, validateInquiry } from "@/lib/inquiry";
import { mailConfigured, sendInquiryMail } from "@/lib/mail";
import { allowRequest, rememberInquiry, seenRecently } from "@/lib/rate-limit";

function clientKey(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return (forwarded || request.headers.get("x-real-ip") || "unknown").slice(0, 80);
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (origin && host) {
    try {
      if (new URL(origin).host !== host) {
        return NextResponse.json({ ok: false, message: "이 사이트에서만 문의할 수 있습니다." }, { status: 403 });
      }
    } catch {
      return NextResponse.json({ ok: false, message: "문의 형식을 확인해 주세요." }, { status: 400 });
    }
  }

  const length = Number(request.headers.get("content-length") || 0);
  if (length > 20_000) {
    return NextResponse.json({ ok: false, message: "문의 내용이 너무 깁니다." }, { status: 413 });
  }

  if (!allowRequest(clientKey(request))) {
    return NextResponse.json(
      { ok: false, message: "같은 접속에서 문의가 여러 번 접수되었습니다. 10분 뒤에 다시 시도해 주세요." },
      { status: 429, headers: { "Cache-Control": "no-store" } },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "문의 형식을 확인해 주세요." }, { status: 400 });
  }

  const input = readInquiry(body);
  if (!input) {
    return NextResponse.json({ ok: false, message: "문의 형식을 확인해 주세요." }, { status: 400 });
  }
  if (input.website) {
    return NextResponse.json({ ok: true, message: "문의가 접수되었습니다." }, { headers: { "Cache-Control": "no-store" } });
  }

  const errors = validateInquiry(input);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { ok: false, message: "입력 내용을 확인해 주세요.", errors },
      { status: 400, headers: { "Cache-Control": "no-store" } },
    );
  }

  const duplicateKey = `${input.email.toLowerCase()}|${input.title}`;
  if (seenRecently(duplicateKey)) {
    return NextResponse.json(
      { ok: false, message: "같은 문의가 방금 접수되었습니다. 잠시 뒤 다시 시도해 주세요." },
      { status: 429, headers: { "Cache-Control": "no-store" } },
    );
  }

  if (!mailConfigured()) {
    return NextResponse.json(
      { ok: false, message: "메일 발송 설정이 없어 접수하지 못했습니다. seriontech@seriontech.co.kr 로 직접 보내 주세요." },
      { status: 503, headers: { "Cache-Control": "no-store" } },
    );
  }

  try {
    await sendInquiryMail({
      subject: `[세리온테크 문의] ${input.kind} / ${input.name}`,
      text: inquiryMessage(input),
      replyTo: input.email,
    });
    rememberInquiry(duplicateKey);
  } catch {
    console.error("inquiry mail failed");
    return NextResponse.json(
      { ok: false, message: "메일을 보내지 못했습니다. 잠시 후 다시 시도해 주세요." },
      { status: 502, headers: { "Cache-Control": "no-store" } },
    );
  }

  return NextResponse.json(
    { ok: true, message: "문의가 접수되었습니다. 대표 메일로 전달했습니다." },
    { headers: { "Cache-Control": "no-store" } },
  );
}
