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
  pageShare,
  separateQuote,
  systemExamples,
  systems,
} from "@/lib/site";

const title = "기업 홈페이지 제작·맞춤 웹 시스템 개발 | 세리온테크";
const description =
  "기업 홈페이지와 반응형 웹사이트를 제작하고, 관리자 시스템, 웹 애플리케이션, 업무 자동화와 API 연동, 홈페이지 유지보수의 범위와 가격을 안내합니다. 로그인, 결제, 관리자 기능은 별도 견적입니다.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  ...pageShare("/services", title, description),
};

export default function ServicesPage() {
  return (
    <>
      <header className="relative overflow-hidden border-b border-white/10 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_280px_at_80%_0%,rgba(99,91,255,0.22),transparent_60%)]" aria-hidden />
        <Container className="relative grid gap-10 py-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(16rem,0.7fr)] lg:items-end lg:py-20">
          <div>
            <p className="kicker">서비스 · 범위와 비용</p>
            <h1 className="mt-5 max-w-[14em] text-[2.15rem] font-semibold leading-[1.18] tracking-[-0.045em] sm:text-[2.85rem]">
              홈페이지부터 시작하고, 필요한 시스템은 따로 견적합니다
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-7 text-[#c5d0df] sm:text-base">
              홈페이지 상품은 1페이지부터 최대 8페이지의 반응형 사이트입니다. 예약, 회원, 관리자, 결제처럼 데이터를
              다루는 기능은 이 금액에 포함하지 않습니다.
            </p>
          </div>
          <ul className="panel overflow-hidden">
            {packages.map((item) => (
              <li key={item.code} className="border-b border-white/10 last:border-b-0">
                <a href="#packages" className="flex items-baseline justify-between gap-4 px-5 py-4">
                  <span className={`text-sm ${item.featured ? "text-[#c9d4ff]" : "text-muted"}`}>
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
          <p className="kicker">홈페이지</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">기업 홈페이지</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
            Next.js로 제작합니다. 작업 기간은 자료가 준비된 뒤부터 세며, 자료 전달이나 검수가 늦어지면 일정을
            다시 잡습니다.
          </p>
          <div className="mt-8">
            <PackageList />
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <div className="panel p-6">
              <h3 className="text-lg font-semibold">모든 상품에 포함</h3>
              <ul className="mt-4 space-y-2 text-sm leading-7">
                {homepageIncludes.map((item) => (
                  <li key={item.text}>{item.text}</li>
                ))}
              </ul>
            </div>
            <div id="excluded" className="panel-featured scroll-mt-24 p-6">
              <h3 className="text-lg font-semibold">별도 견적</h3>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-[#c5d0df]">
                {separateQuote.map((item) => (
                  <li key={item.text}>{item.text}</li>
                ))}
              </ul>
            </div>
          </div>

          <h3 className="mt-12 text-lg font-semibold">범위를 넘는 추가</h3>
          <dl className="panel mt-4 overflow-hidden">
            {addons.map((item) => (
              <div key={item.name} className="grid gap-1 border-b border-white/10 px-5 py-4 last:border-b-0 sm:grid-cols-[1fr_auto_auto] sm:gap-8">
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
          <p className="kicker">시스템</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">맞춤 웹 시스템</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
            홈페이지와 구분해서 진행합니다. 아래 금액은 초기 안내이며, 화면 수, 기능, 데이터 구조, 외부 연동에 따라
            계약 금액이 달라집니다.
          </p>
          <dl className="panel mt-8 overflow-hidden">
            {systems.map((item) => (
              <div
                key={item.name}
                className="grid gap-1 border-b border-white/10 px-5 py-4 last:border-b-0 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-8"
              >
                <dt className="font-medium">{item.name}</dt>
                <dd className="text-sm text-muted sm:text-right">{item.price}</dd>
              </div>
            ))}
          </dl>
          <h3 className="mt-10 text-lg font-semibold">만들 수 있는 예</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {systemExamples.map((item) => (
              <li key={item.text} className="panel px-5 py-4 text-sm leading-6">
                {item.text}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="maintenance" className="scroll-mt-24 bg-paper">
        <Container className="py-12 lg:py-14">
          <p className="kicker">운영</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">홈페이지 유지보수</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
            홈페이지는 제작 이후에도 지속적인 관리가 필요합니다. 세리온테크는 정기 점검과 콘텐츠 수정, 오류 확인,
            기술 지원으로 운영을 돕습니다.
          </p>
          <div className="mt-8 grid items-stretch gap-4 lg:grid-cols-3">
            {maintenancePlans.map((item) => (
              <article key={item.name} className={`soft-card flex flex-col p-6 sm:p-7 ${item.name === "Standard" ? "panel-featured" : "panel"}`}>
                <p className="text-sm text-muted">유지보수 · {item.name}</p>
                <p className="mt-5 text-[2rem] font-semibold tracking-[-0.03em]">{item.price}</p>
                <p className="mt-2 text-sm text-muted">{item.meta}</p>
                <p className="mt-5 text-sm leading-7 text-[#c5d0df]">{item.summary}</p>
                <dl className="mt-5 border-t border-white/10">
                  {item.points.map(([label, value]) => (
                    <div key={label} className="spec">
                      <dt>{label}</dt>
                      <dd>{value}</dd>
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
            className="btn btn-light shrink-0"
          >
            범위 문의
          </Link>
        </Container>
      </section>
    </>
  );
}
