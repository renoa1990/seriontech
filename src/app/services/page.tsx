import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PackageList } from "@/components/PackageList";
import {
  addons,
  homepageIncludes,
  maintenanceNotes,
  maintenancePlans,
  packages,
  quoteNotice,
  separateQuote,
  systemExamples,
  systems,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "서비스",
  description:
    "세리온테크의 기업 홈페이지 제작, 반응형 웹사이트, 관리자 페이지, 업무 자동화, 유지보수의 범위와 가격입니다. 로그인, 결제, 관리자 기능은 별도 견적입니다.",
  alternates: { canonical: "/services" },
  openGraph: { url: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <header className="border-b border-white/10 bg-paper text-white">
        <Container className="grid gap-10 py-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(16rem,0.7fr)] lg:items-end lg:py-16">
          <div>
            <p className="text-sm text-[#8adfff]">서비스 · 범위와 비용</p>
            <h1 className="mt-3 max-w-[14em] text-[2.1rem] font-semibold leading-[1.22] tracking-[-0.04em] sm:text-[2.7rem]">
              홈페이지부터 시작하고, 필요한 시스템은 따로 견적합니다
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-7 text-[#c5d0df] sm:text-base">
              홈페이지 상품은 1페이지부터 최대 8페이지의 반응형 사이트입니다. 예약, 회원, 관리자, 결제처럼 데이터를
              다루는 기능은 이 금액에 포함하지 않습니다.
            </p>
          </div>
          <ul className="border-t border-white/15 lg:border-t-0">
            {packages.map((item) => (
              <li key={item.code} className="border-b border-white/10 py-3">
                <a href="#packages" className="flex items-baseline justify-between gap-4">
                  <span className={`text-sm ${item.featured ? "text-[#8adfff]" : "text-muted"}`}>
                    {item.name} · {item.code}
                    {item.featured ? " · 먼저 제안" : ""}
                  </span>
                  <span className="font-semibold tracking-[-0.03em]">{item.price}</span>
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </header>

      <section id="packages" className="scroll-mt-24 bg-paper">
        <Container className="py-12 lg:py-14">
          <h2 className="text-3xl font-semibold tracking-[-0.03em]">기업 홈페이지</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
            Next.js로 제작합니다. 작업 기간은 자료가 준비된 뒤부터 세며, 자료 전달이나 검수가 늦어지면 일정을
            다시 잡습니다.
          </p>
          <div className="mt-8">
            <PackageList />
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <div className="border border-white/10 bg-night p-6">
              <h3 className="text-lg font-semibold">모든 상품에 포함</h3>
              <ul className="mt-4 space-y-2 text-sm leading-7">
                {homepageIncludes.map((item) => (
                  <li key={item.text}>{item.text}</li>
                ))}
              </ul>
            </div>
            <div id="excluded" className="scroll-mt-24 border border-[#00C8F0]/40 bg-[#126BFF]/10 p-6">
              <h3 className="text-lg font-semibold">별도 견적</h3>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-[#c5d0df]">
                {separateQuote.map((item) => (
                  <li key={item.text}>{item.text}</li>
                ))}
              </ul>
            </div>
          </div>

          <h3 className="mt-12 text-lg font-semibold">범위를 넘는 추가</h3>
          <dl className="mt-4 border-t border-white/15">
            {addons.map((item) => (
              <div key={item.name} className="grid gap-1 border-b border-line py-4 sm:grid-cols-[1fr_auto_auto] sm:gap-8">
                <dt>{item.name}</dt>
                <dd className="text-sm text-muted sm:text-right">{item.unit}</dd>
                <dd className="font-semibold sm:text-right">{item.price}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
            기능 추가 100,000원은 간단한 기능 기준입니다. 수정 횟수는 계약 전에 정하고, 그 횟수를 넘는 수정은 1회
            30,000원입니다.
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
            {quoteNotice} 부가세는 견적서에 적습니다.
          </p>
        </Container>
      </section>

      <section id="systems" className="scroll-mt-24 bg-night">
        <Container className="py-12 lg:py-14">
          <h2 className="text-3xl font-semibold tracking-[-0.03em]">맞춤 웹 시스템</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
            홈페이지와 구분해서 진행합니다. 아래 금액은 초기 안내이며, 화면 수, 기능, 데이터 구조, 외부 연동에 따라
            계약 금액이 달라집니다.
          </p>
          <dl className="mt-8 border-t border-white/15 bg-paper">
            {systems.map((item) => (
              <div
                key={item.name}
                className="grid gap-1 border-b border-line px-5 py-4 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-8"
              >
                <dt className="font-medium">{item.name}</dt>
                <dd className="text-sm text-muted sm:text-right">{item.price}</dd>
              </div>
            ))}
          </dl>
          <h3 className="mt-10 text-lg font-semibold">만들 수 있는 예</h3>
          <ul className="mt-4 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {systemExamples.map((item) => (
              <li key={item.text} className="bg-paper px-5 py-4 text-sm leading-6">
                {item.text}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="maintenance" className="scroll-mt-24 bg-paper">
        <Container className="py-12 lg:py-14">
          <h2 className="text-3xl font-semibold tracking-[-0.03em]">홈페이지 유지보수</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
            홈페이지는 제작 이후에도 지속적인 관리가 필요합니다. 세리온테크는 정기 점검과 콘텐츠 수정, 오류 확인,
            기술 지원으로 운영을 돕습니다.
          </p>
          <div className="mt-8 grid items-stretch gap-4 lg:grid-cols-3">
            {maintenancePlans.map((item) => (
              <article key={item.name} className="soft-card flex flex-col border border-white/10 bg-night p-6 sm:p-7">
                <p className="text-sm text-muted">유지보수 · {item.name}</p>
                <p className="mt-5 text-[2rem] font-semibold tracking-[-0.03em]">{item.price}</p>
                <p className="mt-2 text-sm text-muted">{item.meta}</p>
                <p className="mt-5 text-sm leading-7 text-[#c5d0df]">{item.summary}</p>
                <dl className="mt-5 space-y-3 border-t border-white/15 pt-5 text-sm leading-6">
                  {item.points.map(([label, value]) => (
                    <div key={label}>
                      <dt className="text-[#8adfff]">{label}</dt>
                      <dd className="mt-1">{value}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
          <div className="mt-6 max-w-3xl text-sm leading-7 text-muted">
            <h3 className="font-semibold text-white">공통 안내</h3>
            <ul className="mt-3 space-y-2">
              {maintenanceNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-t border-white/10 bg-night">
        <Container className="flex flex-col gap-6 py-12 sm:flex-row sm:items-end sm:justify-between lg:py-14">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold tracking-[-0.03em]">모바일 앱은 먼저 웹으로 검토합니다</h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              앱이 필요한지는 요구사항을 본 뒤 판단합니다. 반응형 웹이나 모바일 웹으로 충분한 경우에는 그 방식을
              제안합니다.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center bg-white px-5 py-3 text-sm font-medium text-[#080E1B]"
          >
            범위 문의
          </Link>
        </Container>
      </section>
    </>
  );
}
