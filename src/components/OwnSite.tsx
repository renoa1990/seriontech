import { DevicePair } from "@/components/DeviceStage";

const shots = {
  desktop: "/images/portfolio/seriontech/web-home.png",
  mobile: "/images/portfolio/seriontech/web-mobile.png",
} as const;

export function OwnSite() {
  return (
    <>
      <article className="panel flex h-full flex-col overflow-hidden bg-black shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-xs text-muted">
          <span>seriontech.co.kr</span>
          <span>자체 제작</span>
        </div>
        <div className="flex flex-1 items-center">
          <div className="w-full">
            <DevicePair
              compact
              title="PC 웹 · 모바일 웹"
              monitor={{ src: shots.desktop, alt: "세리온테크 공식 사이트 PC 화면" }}
              phone={{ src: shots.mobile, alt: "세리온테크 공식 사이트 모바일 화면" }}
            />
          </div>
        </div>
      </article>
      <div>
        <p className="kicker">웹 · 모바일 웹 서비스</p>
        <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">기업형 홈페이지</h3>
        <p className="mt-3 text-sm leading-7 text-muted">
          세리온테크가 직접 만든 공식 사이트입니다. 고객에게 납품한 사례가 아닙니다.
        </p>
      </div>
    </>
  );
}
