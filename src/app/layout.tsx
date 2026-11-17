import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "세리온테크 | 기업 홈페이지·업무 시스템 개발",
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
    url: site.url,
    siteName: site.name,
    title: "세리온테크 | 기업 홈페이지·업무 시스템 개발",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "세리온테크 | 기업 홈페이지·업무 시스템 개발",
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: "#080E1B",
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
      </body>
    </html>
  );
}
