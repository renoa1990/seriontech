import Link from "next/link";
import { ServiceStage } from "@/components/DeviceStage";
import { judoSector } from "@/lib/judosector";

export function JudoSectorCard() {
  return (
    <>
      <article className="panel flex h-full flex-col overflow-hidden bg-black shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
        <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-2 text-xs text-muted">
          <span>judosector.com</span>
          <span>자체 개발 · 실제 운영</span>
        </div>
        <div className="flex flex-1 items-center">
          <div className="w-full">
            <ServiceStage compact />
          </div>
        </div>
      </article>
      <div>
        <p className="kicker">웹 · Android 통합 서비스</p>
        <p className="mt-4 text-sm leading-7 text-muted">
          {judoSector.summary} 고객에게 납품한 외주 사례가 아니라, 세리온테크가 직접 개발하고 운영하는 서비스입니다.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href={judoSector.path} className="btn btn-light">
            프로젝트 상세
          </Link>
          <a href={judoSector.url} target="_blank" rel="noopener noreferrer" className="btn btn-line">
            웹사이트
          </a>
          <a href={judoSector.playUrl} target="_blank" rel="noopener noreferrer" className="btn btn-line gap-2">
            <span aria-hidden>📲</span>
            Android 앱
          </a>
        </div>
      </div>
    </>
  );
}
