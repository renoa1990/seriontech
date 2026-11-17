"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { inquiryKinds, site } from "@/lib/site";

const fieldClass =
  "mt-2 w-full border border-white/25 bg-paper px-4 py-3 text-base text-white placeholder:text-muted/70 focus:border-[#00C8F0]";

export function ContactForm() {
  const [opened, setOpened] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const company = String(form.get("company") ?? "").trim();
    const kind = String(form.get("kind") ?? "").trim();
    const reference = String(form.get("reference") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    const subject = `[세리온테크 문의] ${kind} / ${name}`;
    const body = [
      `이름: ${name}`,
      `이메일: ${email}`,
      `연락처: ${phone || "-"}`,
      `회사·상호: ${company || "-"}`,
      `문의 유형: ${kind}`,
      `참고 사이트: ${reference || "-"}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  }

  return (
    <form onSubmit={onSubmit} className="border border-white/15 bg-night p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          이름
          <input name="name" required autoComplete="name" className={fieldClass} />
        </label>
        <label className="block text-sm font-medium">
          이메일
          <input name="email" type="email" required autoComplete="email" className={fieldClass} />
        </label>
        <label className="block text-sm font-medium">
          연락처
          <input name="phone" type="tel" autoComplete="tel" className={fieldClass} />
        </label>
        <label className="block text-sm font-medium">
          회사 또는 상호
          <input name="company" autoComplete="organization" className={fieldClass} />
        </label>
      </div>
      <label className="mt-5 block text-sm font-medium">
        문의 유형
        <select name="kind" required defaultValue="" className={fieldClass}>
          <option value="" disabled>
            선택
          </option>
          {inquiryKinds.map((kind) => (
            <option key={kind.label} value={kind.label}>
              {kind.label}
            </option>
          ))}
        </select>
      </label>
      <label className="mt-5 block text-sm font-medium">
        참고 사이트
        <input name="reference" type="text" inputMode="url" placeholder="https://" className={fieldClass} />
      </label>
      <label className="mt-5 block text-sm font-medium">
        내용
        <textarea
          name="message"
          required
          rows={7}
          placeholder="목적, 필요한 페이지나 기능, 희망 일정을 적어 주세요."
          className={fieldClass}
        />
      </label>
      <button
        type="submit"
        className="mt-6 inline-flex bg-white px-5 py-3 text-sm font-medium text-[#080E1B]"
      >
        메일 앱으로 문의 작성
      </button>
      <p className="mt-4 text-sm leading-6 text-muted">
        버튼을 누르면 메일 앱이 열립니다. 열리지 않으면{" "}
        <a className="underline underline-offset-4" href={`mailto:${site.email}`}>
          {site.email}
        </a>
        로 직접 보내 주세요. 입력 내용은 이 사이트 서버에 저장하지 않습니다.{" "}
        <Link href="/privacy" className="underline underline-offset-4">
          개인정보 처리 안내
        </Link>
      </p>
      {opened ? (
        <p className="mt-3 text-sm font-medium" role="status">
          메일 앱을 열었습니다. 앱에서 전송을 눌러 주세요.
        </p>
      ) : null}
    </form>
  );
}
