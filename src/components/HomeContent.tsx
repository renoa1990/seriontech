import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { DashboardPreview } from "@/components/DashboardPreview";
import { OwnSite } from "@/components/OwnSite";
import { WorkSamples } from "@/components/WorkSamples";
import {
  addons,
  contactPrompts,
  homeProcess,
  homeServices,
  maintenancePlans,
  packages,
  quoteNotice,
  site,
  stack,
  systemExamples,
  systems,
} from "@/lib/site";

export function HomeContent({ framed = false }: { framed?: boolean }) {
  return (
    <>
      <section className={`relative overflow-hidden ${framed ? "hero-still" : ""}`}>
        <Image
          src="/images/serion-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-live object-cover object-[68%_center] opacity-35 lg:object-center"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#070b14]/40 via-[#070b14]/75 to-[#070b14]" />
        <div className="hero-bloom pointer-events-none absolute top-[8%] right-[-8%] h-[55%] w-[46%]" aria-hidden />
        <Container className="relative z-10 grid items-center gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-20">
          <div>
            <p className="kicker">세리온테크 · 기업 홈페이지와 업무 시스템</p>
            <h1 className="mt-5 text-[2.35rem] font-semibold leading-[1.08] tracking-[-0.05em] sm:text-5xl lg:text-[3.4rem] lg:leading-[1.04]">
              기업과 매장의
              <br />
              홈페이지와
              <br />
              업무 시스템을
              <br />
              만듭니다
            </h1>
            <p className="mt-5 max-w-md text-sm leading-7 text-[#c5d0df] sm:text-base">
              {`${site.name}는 소개 페이지만 만들지 않습니다. 문의, 예약, 반복 업무처럼 운영에 쓰는 곳까지 범위를 정하고 만듭니다.`}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link href="/contact" className="btn btn-light">
                상담 신청
              </Link>
              <Link href="/services" className="btn btn-line">
                범위와 비용
              </Link>
            </div>
            <ul className="mt-8 grid grid-cols-2 gap-2">
              {stack.map((item) => (
                <li key={item.label} className="rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-xs leading-5 text-[#c5d0df]">
                  <span className="block text-[11px] text-white/45">{item.label}</span>
                  {item.value.split(". ")[0]}
                </li>
              ))}
            </ul>
          </div>
          <DashboardPreview />
        </Container>
      </section>

      <section className="relative z-10">
        <Container className="pb-4">
          <div className="grid items-stretch gap-4 lg:grid-cols-3">
            {packages.map((item) => (
              <Link
                key={item.code}
                href="/services#packages"
                className={`soft-card flex h-full flex-col p-6 ${item.featured ? "panel-featured" : "panel"}`}
              >
                <div className="flex items-center justify-between gap-3">
                  <p className={`text-xs tracking-[0.14em] ${item.featured ? "text-[#d5dcff]" : "text-muted"}`}>{item.code}</p>
                  {item.featured ? <span className="text-xs text-[#9eecff]">먼저 제안</span> : null}
                </div>
                <p className="mt-4 text-3xl font-semibold tracking-[-0.045em]">{item.price}</p>
                <p className="mt-2 flex-1 text-sm leading-6 text-[#c5d0df]">{item.summary}</p>
                <p className="mt-4 border-t border-white/10 pt-3 text-xs text-muted">
                  {item.name} · {item.days} · {item.pages}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section id="services" className="scroll-mt-24">
        <Container className="py-14 lg:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="kicker">서비스</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">만드는 일</h2>
            </div>
            <Link href="/services" className="text-sm text-[#c9d4ff] underline underline-offset-4">
              범위와 비용 보기
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {homeServices.map((item) => (
              <Link key={item.title} href={item.href} className="soft-card panel group flex h-full flex-col p-6">
                <span className="text-sm text-[#9eb6ff]">{item.index}</span>
                <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em]">{item.title}</h3>
                <p className="mt-2 text-sm text-[#c9d4ff]">{item.line}</p>
                <p className="mt-3 flex-1 text-sm leading-7 text-muted">{item.text}</p>
                <span className="mt-5 text-sm text-[#9eecff] transition-transform duration-300 group-hover:translate-x-1">자세히 →</span>
              </Link>
            ))}
          </div>
          <ul className="mt-4 grid gap-4 sm:grid-cols-3">
            {addons.map((item) => (
              <li key={item.name} className="panel flex h-full flex-col px-5 py-4">
                <p className="text-sm text-muted">{item.name}</p>
                <p className="mt-auto pt-3 text-xl font-semibold tracking-[-0.03em]">{item.price}</p>
                <p className="text-xs text-muted">{item.unit}</p>
              </li>
            ))}
          </ul>
          <p className="mt-5 max-w-3xl text-xs leading-6 text-muted">
            {quoteNotice} 작업 기간은 자료가 준비된 뒤 기준입니다. 부가세는 견적서에 적습니다.
          </p>
        </Container>
      </section>

      {framed ? null : (
        <section id="work" className="scroll-mt-24 border-t border-white/10">
          <Container className="py-14 lg:py-20">
            <p className="kicker">자체 제작</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">세리온테크 공식 사이트</h2>
            <div className="mt-8">
              <OwnSite />
            </div>
            <h2 className="mt-16 text-3xl font-semibold tracking-[-0.04em]">작업 예시</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
              고객에게 납품한 사례가 아닙니다. 관리자, 예약, 업무 자동화처럼 만들 수 있는 화면의 예시입니다. 눌러 볼
              수 있는 데모는 준비가 끝나면 올립니다.
            </p>
            <div className="mt-8">
              <WorkSamples />
            </div>
          </Container>
        </section>
      )}

      <section className="border-t border-white/10 bg-night/70">
        <Container className="grid gap-10 py-14 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="kicker">별도 견적</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">업무 시스템</h2>
            <p className="mt-3 max-w-md text-sm leading-7 text-muted">
              로그인, 예약, 관리자, 결제는 홈페이지 패키지에 넣지 않습니다. 요구사항을 확인한 뒤 따로 견적합니다.
            </p>
            <ul className="mt-6 overflow-hidden rounded-2xl border border-white/10">
              {systems.map((item) => (
                <li
                  key={item.name}
                  className="grid gap-1 border-b border-white/10 bg-black/20 px-5 py-4 last:border-b-0 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-6"
                >
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-[#c9d4ff] sm:text-right">{item.price}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="kicker">예시</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">만들 수 있는 예</h2>
            <p className="mt-3 max-w-md text-sm leading-7 text-[#c5d0df]">
              고객에게 납품한 사례가 아닙니다. 매장과 팀이 손으로 하던 일을 웹으로 옮길 수 있는 예입니다.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {systemExamples.map((item) => (
                <li key={item.text} className="panel px-4 py-4 text-sm leading-6">
                  {item.text}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-7 text-muted">
              유지보수는 {`${maintenancePlans.map((item) => `${item.name} ${item.price}`).join(", ")}입니다.`} 새
              페이지와 기능, 데이터베이스 변경, 외부 API 추가는 포함하지 않고, 서버와 도메인, 유료 서비스 이용료도
              포함하지 않습니다.{" "}
              <Link href="/services#maintenance" className="text-[#c9d4ff] underline underline-offset-4">
                유지보수 범위
              </Link>
            </p>
            <p className="mt-3 text-sm">
              <Link href="/services#excluded" className="text-[#c9d4ff] underline underline-offset-4">
                홈페이지 금액에 포함되지 않는 항목
              </Link>
            </p>
          </div>
        </Container>
      </section>

      <section id="process" className="scroll-mt-24 border-t border-white/10">
        <Container className="py-14 lg:py-20">
          <p className="kicker">진행</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">진행 순서</h2>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {homeProcess.map((step, index) => (
              <li key={step.title} className="panel p-6">
                <span className="flex size-9 items-center justify-center rounded-full bg-[#635bff]/20 text-sm text-[#d5dcff]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section id="inquiry" className="scroll-mt-24 border-t border-white/10">
        <Container className="py-14 lg:py-20">
          <div className="panel-featured grid gap-8 p-6 sm:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="kicker">문의</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">문의를 남겨 주세요</h2>
              <p className="mt-4 max-w-md text-sm leading-7 text-[#c5d0df]">
                목적과 참고 사이트를 알려 주시면 범위와 견적을 정리합니다.
              </p>
              <a className="mt-5 inline-flex text-lg text-white underline underline-offset-4" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              <div className="mt-6">
                <Link href="/contact" className="btn btn-light">
                  상담 신청
                </Link>
              </div>
            </div>
            <ol className="overflow-hidden rounded-2xl border border-white/10">
              {contactPrompts.map((item, index) => (
                <li key={item.text} className="grid grid-cols-[2.5rem_1fr] border-b border-white/10 bg-black/20 px-4 py-3 text-sm last:border-b-0">
                  <span className="text-[#9eb6ff]">0{index + 1}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>
    </>
  );
}
