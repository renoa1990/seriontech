import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "개인정보 처리 안내",
  description:
    "세리온테크 문의에서 확인하는 항목과 전달 방법을 안내합니다. 문의는 데이터베이스에 저장하지 않고 대표 메일로 전달합니다.",
  alternates: { canonical: "/privacy" },
  openGraph: { url: "/privacy" },
};

const sections = [
  {
    title: "수집하는 항목",
    body: "문의 유형, 회사명 또는 상호, 담당자명, 연락처, 이메일, 프로젝트 제목, 프로젝트 상세 내용, 예상 예산, 희망 완료 일정.",
  },
  {
    title: "이용하는 목적",
    body: "문의 내용을 확인하고, 상담과 견적을 회신하기 위해서입니다. 안내 메일을 따로 보내거나 다른 업체에 넘기지 않습니다.",
  },
  {
    title: "전달 방법",
    body: "문의 보내기를 누르면 내용이 대표 메일로 전달됩니다. 서버에는 문의 내용을 저장하지 않습니다.",
  },
  {
    title: "동의",
    body: "개인정보 수집 및 이용에 동의해야 문의가 접수됩니다. 동의하지 않으면 보내지 않습니다.",
  },
  {
    title: "보관",
    body: "도착한 메일은 회신이 끝날 때까지 대표 메일함에서 보관합니다. 상담이 끝났거나 삭제를 요청하면 삭제합니다.",
  },
  {
    title: "열람·정정·삭제",
    body: "본인 정보의 열람, 정정, 삭제는 대표 메일로 요청하면 됩니다.",
  },
] as const;

export default function PrivacyPage() {
  return (
    <>
      <header className="border-b border-white/10 bg-paper text-white">
        <Container className="py-12 lg:py-16">
          <p className="text-sm text-[#8adfff]">개인정보</p>
          <h1 className="mt-3 max-w-[12em] text-[2.1rem] font-semibold leading-[1.22] tracking-[-0.04em] sm:text-[2.7rem]">
            개인정보 처리 안내
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#c5d0df] sm:text-base">
            {`${site.name}는 문의에 답하기 위해 아래 정보를 확인합니다. 이 안내는 2026년 11월 17일부터 적용합니다.`}
          </p>
        </Container>
      </header>
      <section className="bg-paper">
        <Container className="py-14 sm:py-16">
          <div className="max-w-3xl">
          <dl className="grid gap-4">
            {sections.map((section) => (
              <div key={section.title} className="border-t border-line py-5">
                <dt className="text-base font-semibold">{section.title}</dt>
                <dd className="mt-2 text-sm leading-7 text-muted">{section.body}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 border border-white/15 bg-night px-6 py-5 text-sm leading-7">
            <p>담당 대표 {site.representative}</p>
            <p className="mt-1">
              <a className="underline underline-offset-4" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
            <p className="mt-1 text-muted">{site.address}</p>
          </div>
          <Link href="/contact" className="mt-8 inline-flex bg-white px-5 py-3 text-sm font-medium text-[#080E1B]">
            문의하기
          </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
