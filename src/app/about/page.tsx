import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { JudoSectorCard } from "@/components/JudoSectorCard";
import { OwnSite } from "@/components/OwnSite";
import { PageHero } from "@/components/PageHero";
import { WorkSamples } from "@/components/WorkSamples";
import { pageShare, principles, site, stack, strengths } from "@/lib/site";

const title = "세리온테크 소개 | 홈페이지·웹 시스템 개발";
const description =
  "세리온테크는 기업 홈페이지, 반응형 웹사이트, 관리자 페이지, 웹 애플리케이션, 업무 자동화를 개발합니다. 착수 전에 작업 범위와 비용을 정합니다.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  ...pageShare("/about", title, description),
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="회사 소개"
        title="범위를 분명히 하고 그 범위만 만듭니다"
        aside={
          <dl className="panel grid gap-4 px-5 py-5 text-sm">
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
          <p className="kicker">일하는 방식</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">이렇게 일합니다</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {strengths.map((item) => (
              <li key={item.title} className="panel p-6">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">{item.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-b border-white/10 bg-paper">
        <Container className="py-12 lg:py-14">
          <p className="kicker">자체 제작</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">세리온테크 공식 사이트</h2>
          <div className="mt-6">
            <OwnSite />
          </div>
          <div className="mt-10">
            <JudoSectorCard />
          </div>
          <h2 className="mt-12 text-3xl font-semibold tracking-[-0.03em]">작업 예시</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
            의뢰하시면 관리자, 예약, 업무 자동화처럼 업무에 쓰는 화면을 만듭니다. 아래는 그 작업 예시입니다.
          </p>
          <div className="mt-6">
            <WorkSamples />
          </div>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-12 lg:py-14">
          <p className="kicker">기준</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">일하는 기준</h2>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2">
            {principles.map((item, index) => (
              <li key={item.title} className="panel p-6">
                <p className="text-sm text-[#9eb6ff]">{String(index + 1).padStart(2, "0")}</p>
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
            <p className="kicker">기술</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">쓰는 기술</h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-muted">
              아래는 사용할 수 있는 기술입니다. 프로젝트마다 필요한 것만 고르고, 규모에 맞지 않는 서버는 넣지
              않습니다.
            </p>
          </div>
          <dl className="panel overflow-hidden">
            {stack.map((item) => (
              <div key={item.label} className="grid gap-1 border-b border-white/10 px-5 py-4 last:border-b-0 sm:grid-cols-[8rem_1fr] sm:items-baseline sm:gap-6">
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
            <p className="kicker">대표 {site.representative}</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">범위를 정한 뒤 개발을 시작합니다</h2>
            <a className="mt-3 inline-flex underline underline-offset-4" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>
          <Link href="/contact" className="btn btn-light">
            상담 문의
          </Link>
        </Container>
      </section>
    </>
  );
}
