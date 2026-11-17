import type { Metadata } from "next";
import { HomeContent } from "@/components/HomeContent";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "세리온테크 | 기업 홈페이지·업무 시스템 개발" },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
};

export default function HomePage() {
  return <HomeContent />;
}
