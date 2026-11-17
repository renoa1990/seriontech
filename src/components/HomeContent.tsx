import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { OwnSite } from "@/components/OwnSite";
import {
  addons,
  contactPrompts,
  homeProcess,
  homeServices,
  maintenancePlans,
  packages,
  quoteNotice,
  site,
  systemExamples,
  systems,
} from "@/lib/site";

const pad = "px-5 sm:px-8 lg:pr-10 lg:pl-[max(2rem,calc((100vw-1180px)/2+2rem))]";

export function HomeContent({ framed = false }: { framed?: boolean }) {
  return (
    <>
      <section className={`bg-[#00071A] text-white ${framed ? "hero-still" : ""}`}>
        <div className="hero-frame relative h-[calc(100svh-4rem)] w-full lg:aspect-[16/9] lg:h-auto">
          <Image
            src="/images/serion-hero.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="hero-live object-cover object-[68%_center] lg:object-center"
          />
          <div className="hero-bloom pointer-events-none absolute top-[12%] right-[-6%] h-[70%] w-[48%]" aria-hidden />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#00071A] via-[#00071A]/75 to-transparent to-60% lg:hidden" />
          <div className="absolute inset-0 z-10 flex items-end px-5 pt-16 pb-8 sm:px-8 lg:items-center lg:px-0 lg:py-0">
            <div className="lg:w-[44%] lg:pr-10 lg:pl-[max(2rem,calc((100vw-1180px)/2+2rem))]">
              <p className="text-sm tracking-[-0.01em] text-[#8adfff]">세리온테크 · 기업 홈페이지와 업무 시스템</p>
              <h1 className="mt-3 text-[2.15rem] font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-[3.5rem] lg:leading-[1.02]">
                기업과 매장의
                <br />
                홈페이지와
                <br />
                업무 시스템을
                <br />
                만듭니다
              </h1>
              <p className="mt-4 max-w-md text-sm leading-7 text-[#c5d0df] sm:text-base">
                {`${site.name}는 소개 화면에서 끝내지 않습니다. 문의, 예약, 반복 업무처럼 운영에 쓰는 곳까지 범위를 정하고 만듭니다.`}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link href="/contact" className="inline-flex bg-white px-5 py-3 text-sm font-medium text-[#080E1B]">
                  상담 신청
                </Link>
                <Link href="/services" className="inline-flex border border-[#00C8F0]/70 px-5 py-3 text-sm text-white">
                  범위와 비용
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto grid w-full max-w-[1180px] border-t border-white/10 sm:grid-cols-3">
          {packages.map((item) => (
            <Link
              key={item.code}
              href="/services#packages"
              className={`border-b border-white/10 px-5 py-5 transition-colors last:border-b-0 hover:bg-white/5 sm:border-r sm:border-b-0 sm:px-8 sm:last:border-r-0 ${item.featured ? "bg-[#126BFF]/15" : ""}`}
            >
              <p className={`text-xs ${item.featured ? "text-[#8adfff]" : "text-[#9aa8bc]"}`}>
                {item.code}
                {item.featured ? " · 먼저 제안" : ""}
              </p>
              <p className="mt-2 text-2xl font-semibold tracking-[-0.04em]">{item.price}</p>
              <p className="mt-2 text-sm leading-6 text-[#c5d0df]">{item.summary}</p>
              <p className="mt-1 text-xs text-[#9aa8bc]">
                {item.days} · {item.pages}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section id="services" className="scroll-mt-24 border-t border-white/10 bg-paper">
        <Container className="py-12 lg:py-14">
          <div className="flex flex-wrap items-end justify-between gap-3 border-b border-white/15 pb-4">
            <h2 className="text-3xl font-semibold tracking-[-0.03em]">만드는 일</h2>
            <Link href="/services" className="text-sm text-[#8adfff] underline underline-offset-4">
              범위와 비용 보기
            </Link>
          </div>
          <div className="divide-y divide-line">
            {homeServices.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group grid grid-cols-[2.5rem_1fr] gap-x-3 gap-y-1 py-5 transition-colors duration-300 hover:bg-night sm:grid-cols-[3.25rem_minmax(0,0.9fr)_minmax(0,1.2fr)_auto] sm:items-center sm:gap-6 sm:px-3"
              >
                <span className="text-sm text-[#8adfff]">{item.index}</span>
                <span>
                  <span className="flex items-baseline justify-between gap-3">
                    <span className="text-lg font-semibold tracking-[-0.03em]">{item.title}</span>
                    <span className="shrink-0 text-sm text-[#8adfff] sm:hidden">자세히 →</span>
                  </span>
                  <span className="mt-1 block text-sm text-muted">{item.line}</span>
                </span>
                <span className="col-span-2 text-sm leading-6 text-muted sm:col-span-1">{item.text}</span>
                <span className="hidden text-sm text-[#8adfff] transition-transform duration-300 group-hover:translate-x-1 sm:inline">
                  자세히 →
                </span>
              </Link>
            ))}
          </div>
          <ul className="mt-6 grid border border-line sm:grid-cols-3">
            {addons.map((item) => (
              <li
                key={item.name}
                className="border-b border-line px-4 py-4 last:border-b-0 sm:border-r sm:border-b-0 sm:last:border-r-0"
              >
                <p className="text-sm">{item.name}</p>
                <p className="mt-1 text-lg font-semibold tracking-[-0.03em]">{item.price}</p>
                <p className="text-xs text-muted">{item.unit}</p>
              </li>
            ))}
          </ul>
          <p className="mt-4 max-w-3xl text-xs leading-5 text-muted">
            {quoteNotice} 작업 기간은 자료가 준비된 뒤 기준입니다. 부가세는 견적서에 적습니다.
          </p>
        </Container>
      </section>

      {framed ? null : (
        <section className="border-t border-white/10 bg-paper">
          <Container className="py-12 lg:py-14">
            <p className="text-sm text-[#8adfff]">자체 제작</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.03em]">세리온테크 공식 사이트</h2>
            <div className="mt-6">
              <OwnSite />
            </div>
          </Container>
        </section>
      )}

      <section className="bg-night">
        <div className="grid lg:grid-cols-2">
          <div className={`${pad} py-12 lg:py-14`}>
            <h2 className="text-3xl font-semibold tracking-[-0.03em]">업무 시스템</h2>
            <p className="mt-3 max-w-md text-sm leading-7 text-muted">
              로그인, 예약, 관리자, 결제는 홈페이지 패키지에 넣지 않습니다. 요구사항을 확인한 뒤 따로 견적합니다.
            </p>
            <ul className="mt-6 border-t border-white/15">
              {systems.map((item) => (
                <li key={item.name} className="grid gap-1 border-b border-white/10 py-3 sm:grid-cols-[1fr_auto] sm:gap-6">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-muted sm:text-right">{item.price}</p>
                </li>
              ))}
            </ul>
            <p className="mt-4 border-t border-white/10 pt-4 text-sm leading-6 text-muted">
              유지보수는 {maintenancePlans.map((item) => `${item.name} ${item.price}`).join(", ")}. 정확한 범위는
              계약으로 정하고, 새 페이지와 기능, 데이터베이스 변경은 포함하지 않습니다.
            </p>
          </div>
          <div className="border-t border-white/10 px-5 py-12 sm:px-8 lg:border-t-0 lg:border-l lg:py-14 lg:pr-[max(2rem,calc((100vw-1180px)/2+2rem))] lg:pl-12">
            <h2 className="text-3xl font-semibold tracking-[-0.03em]">만들 수 있는 예</h2>
            <p className="mt-3 max-w-md text-sm leading-7 text-[#c5d0df]">
              고객 납품 사례가 아닙니다. 매장과 팀에서 손으로 하던 일을 웹으로 옮길 수 있는 예입니다.
            </p>
            <ul className="mt-6 border-t border-white/15">
              {systemExamples.map((item) => (
                <li key={item.text} className="border-b border-white/15 py-3 text-sm">
                  {item.text}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-6">
              <Link href="/services#excluded" className="text-[#8adfff] underline underline-offset-4">
                홈페이지 금액에 넣지 않는 항목
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section id="process" className="scroll-mt-24 border-t border-white/10 bg-paper">
        <Container className="py-12 lg:py-14">
          <h2 className="text-3xl font-semibold tracking-[-0.03em]">진행 순서</h2>
          <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {homeProcess.map((step, index) => (
              <li key={step.title} className="border-t border-[#00C8F0]/45 pt-4">
                <p className="text-sm text-[#8adfff]">0{index + 1}</p>
                <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section id="inquiry" className="scroll-mt-24 border-t border-white/10 bg-night">
        <Container className="grid gap-8 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:py-14">
          <div>
            <h2 className="text-4xl font-semibold tracking-[-0.035em]">문의를 남겨 주세요</h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-muted">
              목적과 참고 사이트를 알려 주시면 범위와 견적을 정리합니다.
            </p>
            <a className="mt-5 inline-flex text-lg underline underline-offset-4" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <div className="mt-6">
              <Link href="/contact" className="inline-flex bg-white px-5 py-3 text-sm font-medium text-[#080E1B]">
                상담 신청
              </Link>
            </div>
          </div>
          <ol className="border-t border-white/15">
            {contactPrompts.map((item, index) => (
              <li key={item.text} className="grid grid-cols-[2.5rem_1fr] border-b border-line py-3 text-sm">
                <span className="text-[#8adfff]">0{index + 1}</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </>
  );
}
