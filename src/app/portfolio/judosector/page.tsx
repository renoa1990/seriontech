import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { ScreenPair, ServiceStage } from "@/components/DeviceStage";
import { PageHero } from "@/components/PageHero";
import {
  judoCapabilities,
  judoFacts,
  judoFeatures,
  judoImages,
  judoSector,
  judoStack,
} from "@/lib/judosector";
import { pageShare } from "@/lib/site";

const title = "주도섹터 주식 시황 | 웹·Android 통합 서비스 개발 사례 | 세리온테크";
const description =
  "세리온테크가 자체 개발하고 운영하는 주도섹터 주식 시황의 웹서비스 및 Android 앱 개발 사례입니다.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  ...pageShare(judoSector.path, title, description),
};

export default function JudoSectorPage() {
  return (
    <>
      <PageHero
        eyebrow="자체 개발 · 실제 운영"
        title="주도섹터 주식 시황"
        aside={
          <dl className="panel px-5 py-2">
            {judoFacts.map(([label, value], index) => (
              <div key={label} className="spec" style={index === 0 ? { borderTop: "none" } : undefined}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        }
      >
        웹과 Android 애플리케이션으로 국내 주식시장 정보와 주요 종목 데이터를 함께 제공하는 서비스입니다. 고객 납품
        사례가 아니라 세리온테크가 직접 만들어 운영합니다.
      </PageHero>

      <section className="border-b border-white/10 bg-paper">
        <Container className="py-12 lg:py-14">
          <p className="kicker">실제 화면</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">PC, 모바일, Android 화면</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
            2026년 11월 22일에 확인한 PC 웹, 모바일 웹, Play 스토어 Android 앱 화면입니다. 시세는 그 시점의 참고
            정보입니다.
          </p>
          <div className="mt-6">
            <ServiceStage />
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10 bg-night">
        <Container className="py-12 lg:py-14">
          <p className="kicker">기능</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">주요 기능</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
            운영 중인 화면과 소스에서 확인한 기능입니다.
          </p>
          <div className="mt-8 grid gap-6">
            {judoFeatures.map((feature, index) => {
              const web = "web" in feature ? feature.web : undefined;
              const phone = "phone" in feature ? feature.phone : undefined;
              return (
                <article key={feature.title} className="panel grid gap-5 p-5 sm:p-6">
                  <div>
                    <p className="text-sm text-[#9eb6ff]">{String(index + 1).padStart(2, "0")}</p>
                    <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em]">{feature.title}</h3>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">{feature.text}</p>
                  </div>
                  <ScreenPair
                    web={web}
                    phone={phone}
                    webAlt={"webAlt" in feature ? feature.webAlt : undefined}
                    phoneAlt={"phoneAlt" in feature ? feature.phoneAlt : undefined}
                    phoneLabel={"phoneLabel" in feature ? feature.phoneLabel : undefined}
                    phoneAspect={"phoneAspect" in feature ? feature.phoneAspect : undefined}
                  />
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10 bg-paper">
        <Container className="py-12 lg:py-14">
          <p className="kicker">하나의 플랫폼</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">웹과 Android</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
            웹사이트와 Android 앱을 따로 만든 두 개의 제품으로 나누지 않습니다. PC와 모바일 웹, Android 앱이 같은
            시장 API를 사용하고, 화면에 맞춰 정보를 배치합니다.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "PC와 모바일 웹 제공",
              "Android 애플리케이션 제공",
              "웹과 앱이 같은 API를 사용",
              "모바일 화면에 맞춘 시황 배치",
              "운영 중 웹과 앱을 함께 업데이트",
            ].map((item) => (
              <li key={item} className="panel px-4 py-4 text-sm">
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={judoSector.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-light"
            >
              웹서비스 바로가기
            </a>
            <a
              href={judoSector.playUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-line"
            >
              Android 앱 다운로드
            </a>
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10 bg-night">
        <Container className="grid gap-8 py-12 lg:grid-cols-[0.8fr_1.2fr] lg:py-14">
          <div>
            <p className="kicker">구성</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">시스템과 개발 구조</h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              주도섹터 저장소와 운영 주소에서 확인한 구성입니다. 이 프로젝트에서 확인되지 않은 기술은 적지 않았습니다.
            </p>
          </div>
          <div>
            <img
              src={judoImages.system}
              alt="웹과 Android가 FastAPI를 거쳐 LS증권 OpenAPI와 파일 저장소를 사용하는 구성"
              className="w-full overflow-hidden rounded-[1.25rem] ring-1 ring-white/10"
            />
            <dl className="mt-4 border-t border-white/15">
              {judoStack.map(([label, value]) => (
                <div key={label} className="spec sm:grid-cols-[7rem_1fr]">
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-12 lg:py-14">
          <p className="kicker">작업</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">이 프로젝트에서 한 일</h2>
          <ol className="mt-6 grid gap-6 sm:grid-cols-2">
            {judoCapabilities.map(([titleText, text], index) => (
              <li key={titleText} className="panel p-6">
                <p className="text-sm text-[#9eb6ff]">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 text-lg font-semibold">{titleText}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">{text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-white/15 pt-6">
            <Link href="/contact" className="btn btn-light">
              비슷한 개발 문의
            </Link>
            <Link href="/#work" className="btn btn-line">
              다른 작업 보기
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
