export function OwnSite() {
  return (
    <figure>
      <div className="panel overflow-hidden bg-black shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
        <div className="flex items-center justify-between border-b border-white/15 px-4 py-2 text-xs text-muted">
          <span>seriontech.co.kr</span>
          <span>자체 제작</span>
        </div>
        <div className="own-frame relative overflow-hidden">
          <iframe
            title="세리온테크 공식 사이트"
            src="/frame"
            tabIndex={-1}
            scrolling="no"
            className="pointer-events-none absolute top-0 left-0 overflow-hidden"
          />
        </div>
      </div>
      <figcaption className="mt-3 text-sm leading-6 text-muted">
        세리온테크가 직접 만든 공식 사이트입니다. 고객에게 납품한 사례가 아닙니다.
      </figcaption>
    </figure>
  );
}
