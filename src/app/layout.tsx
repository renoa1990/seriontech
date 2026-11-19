import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "기업 홈페이지 제작·업무 시스템 개발 | 세리온테크",
    template: "%s | 세리온테크",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "SERIONTECH",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "세리온테크 — 기업 홈페이지와 업무 시스템 개발",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "OA6w96NB6YD0o-6A1lR-IxMSCSBb6FEGhQbHWw40VfQ",
    other: {
      "naver-site-verification": "6abbc3228149b522b492cc09d7dcb42d570f6d31",
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#070B14",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full antialiased" data-scroll-behavior="smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body className="flex min-h-full flex-col bg-paper font-sans text-white">
        <JsonLd />
        <a href="#content" className="skip-link">
          본문으로 건너뛰기
        </a>
        <Header />
        <main id="content" className="flex-1 pt-16">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
