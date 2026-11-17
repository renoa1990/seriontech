import type { Metadata } from "next";
import { HomeContent } from "@/components/HomeContent";

export const metadata: Metadata = {
  title: "미리보기",
  robots: { index: false, follow: false },
};

export default function FramePage() {
  return <HomeContent framed />;
}
