import type { Metadata } from "next";
import { HomeContent } from "@/components/HomeContent";
import { pageShare } from "@/lib/site";

const title = "기업 홈페이지 제작·업무 시스템 개발 | 세리온테크";
const description =
  "기업 홈페이지를 제작하고, 요구사항에 맞춘 업무 시스템을 개발합니다. 홈페이지 유지보수도 하며, 작업 범위와 비용은 시작 전에 정합니다.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  ...pageShare("/", title, description),
};

export default function HomePage() {
  return <HomeContent />;
}
