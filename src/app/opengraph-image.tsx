import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "세리온테크 — 기업 홈페이지와 업무 시스템 개발";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  const font = await readFile(join(process.cwd(), "src/assets/Pretendard-SemiBold.woff"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#080E1B",
          color: "#ffffff",
          padding: "72px",
          fontFamily: "Pretendard",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 18,
              background: "#00C8F0",
              marginRight: 14,
            }}
          />
          <div style={{ display: "flex", fontSize: 22, letterSpacing: "0.14em", color: "#8adfff" }}>
            SERIONTECH
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 64,
            fontWeight: 600,
            lineHeight: 1.22,
            letterSpacing: "-0.04em",
          }}
        >
          <div style={{ display: "flex" }}>기업과 매장의 홈페이지와</div>
          <div style={{ display: "flex" }}>업무 시스템을 만듭니다</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ display: "flex", fontSize: 24, color: "#9aabbe" }}>
            홈페이지, 업무 시스템, 업무 자동화
          </div>
          <div style={{ display: "flex", fontSize: 24, color: "#00C8F0" }}>seriontech.co.kr</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Pretendard",
          data: font,
          style: "normal",
          weight: 600,
        },
      ],
    },
  );
}
