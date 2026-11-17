import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { contactPrompts, pageShare, site } from "@/lib/site";

const title = "홈페이지·웹 시스템 개발 문의 | 세리온테크";
const description =
  "홈페이지 제작, 관리자 시스템, 업무 자동화 개발 상담을 홈페이지에서 문의합니다. 접수한 내용은 대표 메일로 전달됩니다.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  ...pageShare("/contact", title, description),
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="문의"
        title="상담은 목적과 참고 사이트부터 시작합니다"
        aside={
          <div className="border-t border-white/15 pt-6 text-sm lg:border-t-0 lg:pt-0 lg:text-right">
            <a className="underline underline-offset-4" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <p className="mt-3 leading-6 text-muted">{site.address}</p>
          </div>
        }
      >
        {`안녕하세요. ${site.name}입니다. 홈페이지나 시스템의 목적과 필요한 기능을 확인한 뒤, 개발 방향과 견적을 안내합니다. 기획이 아직 정리되지 않았어도 구성과 작업 범위를 함께 잡을 수 있습니다.`}
      </PageHero>
      <div className="bg-paper">
        <Container className="grid gap-10 py-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start lg:py-14">
          <div>
            <h2 className="text-lg font-semibold">알려 주시면 좋은 내용</h2>
            <ol className="mt-4 border-t border-white/15">
              {contactPrompts.map((item, index) => (
                <li key={item.text} className="grid grid-cols-[2.5rem_1fr] border-b border-line py-3 text-sm">
                  <span className="text-muted">0{index + 1}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ol>
            <p className="mt-8 text-sm leading-7">
              대표 {site.representative}
              <br />
              <a className="underline underline-offset-4" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              <br />
              {site.address}
            </p>
          </div>
          <ContactForm />
        </Container>
      </div>
    </>
  );
}
