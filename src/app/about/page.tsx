import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { OwnSite } from "@/components/OwnSite";
import { PageHero } from "@/components/PageHero";
import { WorkSamples } from "@/components/WorkSamples";
import { principles, site, stack, strengths } from "@/lib/site";

export const metadata: Metadata = {
  title: "회사 소개",
  description:
    "세리온테크는 기업 홈페이지, 반응형 웹사이트, 관리자 페이지, 웹 애플리케이션, 업무 자동화를 개발합니다. 착수 전에 작업 범위와 비용을 정합니다.",
  alternates: { canonical: "/about" },
  openGraph: { url: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="회사 소개"
        title="범위를 분명히 하고 그 범위만 만듭니다"
        aside={
          <dl className="grid gap-4 border-t border-white/15 pt-6 text-sm lg:border-t-0 lg:pt-0">
            <div>
              <dt className="text-muted">대표</dt>
              <dd className="mt-1">{site.representative}</dd>
            </div>
            <div>
              <dt className="text-muted">업태</dt>
              <dd className="mt-1">{site.businessType}</dd>
            </div>
            <div>
              <dt className="text-muted">종목</dt>
              <dd className="mt-1 leading-6">{site.businessItems.join(" · ")}</dd>
            </div>
          </dl>
        }
      >
        {`${site.name}는 기업과 매장의 홈페이지와 웹 소프트웨어를 만듭니다. 소개 페이지에서 끝내지 않고, 문의와 예약, 반복 업무까지 함께 봅니다. 필요한 기능과 범위, 이후 수정은 개발 전에 정합니다.`}
      </PageHero>

      <section className="border-b border-white/10 bg-paper">
        <Container className="py-12 lg:py-14">
          <h2 className="text-3xl font-semibold tracking-[-0.03em]">이렇게 일합니다</h2>
          <ul className="mt-6 grid gap-6 sm:grid-cols-2">
            {strengths.map((item) => (
              <li key={item.title} className="border-t border-[#00C8F0]/45 pt-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">{item.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-b border-white/10 bg-paper">
        <Container className="py-12 lg:py-14">
          <p className="text-sm text-[#8adfff]">자체 제작</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-[-0.03em]">세리온테크 공식 사이트</h2>
          <div className="mt-6">
            <OwnSite />
          </div>
          <h2 className="mt-12 text-3xl font-semibold tracking-[-0.03em]">작업 예시</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
            고객에게 납품한 사례가 아닙니다. 만들 수 있는 화면의 예시이고, 눌러 볼 수 있는 데모는 준비가 끝나면 올립니다.
          </p>
          <div className="mt-6">
            <WorkSamples />
          </div>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-12 lg:py-14">
          <h2 className="border-b border-white/15 pb-4 text-3xl font-semibold tracking-[-0.03em]">일하는 기준</h2>
          <ol className="mt-2 grid sm:grid-cols-2 sm:gap-x-10">
            {principles.map((item, index) => (
              <li key={item.title} className="border-b border-line py-6">
                <p className="text-sm text-[#8adfff]">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{item.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-night">
        <Container className="grid gap-8 py-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:py-14">
          <div>
            <h2 className="text-3xl font-semibold tracking-[-0.03em]">쓰는 기술</h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-muted">
              아래는 사용할 수 있는 기술입니다. 프로젝트마다 필요한 것만 고르고, 규모에 맞지 않는 서버는 넣지
              않습니다.
            </p>
          </div>
          <dl className="border-t border-white/15 bg-paper">
            {stack.map((item) => (
              <div key={item.label} className="grid gap-1 border-b border-line px-5 py-4 sm:grid-cols-[8rem_1fr] sm:items-baseline sm:gap-6">
                <dt className="text-sm font-semibold">{item.label}</dt>
                <dd className="text-sm leading-7 text-muted">{item.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="flex flex-col gap-6 py-12 sm:flex-row sm:items-end sm:justify-between lg:py-14">
          <div>
            <p className="text-sm text-[#8adfff]">대표 {site.representative}</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">범위를 정한 뒤 개발을 시작합니다</h2>
            <a className="mt-3 inline-flex underline underline-offset-4" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>
          <Link href="/contact" className="inline-flex items-center justify-center bg-white px-5 py-3 text-sm font-medium text-[#080E1B]">
            상담 문의
          </Link>
        </Container>
      </section>
    </>
  );
}
