import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "개인정보 처리 안내",
  description:
    "세리온테크 문의의 수집 항목, 메일 전달, 1년 보관, 열람과 삭제 요청 방법을 안내합니다. 문의는 데이터베이스에 저장하지 않습니다.",
  alternates: { canonical: "/privacy" },
  openGraph: { url: "/privacy" },
};

const sections = [
  {
    title: "처리 목적",
    body: "홈페이지 문의를 접수하고, 상담과 회신, 요구사항 확인, 견적 안내, 계약과 서비스 제공에 필요한 연락을 하기 위해서입니다. 마케팅 메일은 보내지 않습니다.",
  },
  {
    title: "수집 항목",
    body: "문의 항목은 모두 필수입니다. 선택 항목은 없습니다. 문의 유형, 회사명 또는 상호, 담당자명, 연락처, 이메일, 프로젝트 제목, 예상 예산, 희망 완료 일정, 프로젝트 상세 내용입니다. 예산이나 일정이 없으면 미정이라고 적습니다. 개인정보 수집 및 이용에 동의하지 않으면 문의는 접수되지 않습니다.",
  },
  {
    title: "수집 및 처리 방식",
    body: "문의 보내기를 누르면 입력 내용이 이 사이트 서버로 전달되고, 서버가 대표 메일로 보냅니다. 방문자의 메일 앱을 여는 방식은 아닙니다. 문의 내용은 홈페이지 데이터베이스에 저장하지 않습니다. 같은 문의를 반복해서 보내는 것을 막기 위해 이메일과 제목, 접속 정보는 서버 메모리에 잠시만 두며, 이 기록도 데이터베이스에 남기지 않습니다.",
  },
  {
    title: "보유 및 이용 기간",
    body: "일반 문의 메일은 문의 처리가 끝난 뒤 1년간 대표 메일함에 보관합니다. 사이트에 자동 삭제 기능은 없고, 기간이 지나면 메일함에서 삭제합니다. 계약과 거래 자료는 관계 법령이 정한 기간 동안 보관합니다. 보유 기간이 끝나거나 처리 목적이 달성되면 지체 없이 삭제합니다. 삭제를 요청하면 그 전에 삭제합니다.",
  },
  {
    title: "제3자 제공",
    body: "문의 내용을 다른 업체의 마케팅이나 판매를 위해 제공하지 않습니다. 법령에 따라 제공이 요구되는 경우는 예외입니다.",
  },
  {
    title: "처리 위탁",
    body: "Vercel은 홈페이지를 운영하고, 문의 내용을 받아 메일을 보내며, 방문 수와 페이지 조회수를 집계합니다. 하이웍스는 대표 메일을 수신하고 보관합니다. 그 밖에 문의 내용을 저장하도록 맡긴 업체는 없습니다.",
  },
  {
    title: "국외 이전",
    body: "문의 메일은 하이웍스 메일함으로 보내며, 이 사이트는 국외 메일 서버를 지정하지 않습니다. 문의 처리 함수는 서울 리전에서 실행되도록 설정되어 있고, 문의 내용을 데이터베이스에 저장하지는 않습니다. 호스팅과 방문 수 집계 과정에서 정보가 국외에서 처리되는 위치, 항목, 보유 기간은 이 사이트 코드만으로 확인되지 않았습니다. 확인되는 내용은 이 안내에 추가합니다.",
  },
  {
    title: "파기",
    body: "메일과 전자 파일은 복구하기 어렵도록 삭제합니다. 필요 없는 개인정보는 지체 없이 삭제합니다. 법령에 따라 남겨야 하는 자료는 그 기간 동안 따로 보관합니다.",
  },
  {
    title: "정보주체의 권리",
    body: "자신의 개인정보에 대해 열람, 정정, 삭제, 처리정지를 대표 메일로 요청할 수 있습니다. 요청을 확인한 뒤 처리합니다.",
  },
  {
    title: "자동으로 처리되는 정보",
    body: "Vercel Web Analytics로 방문 수와 페이지 조회수를 집계합니다. 문의 내용은 집계하지 않고, 광고 스크립트는 없습니다. 쿠키로 이용자를 식별하는 기능은 넣지 않았습니다. 브라우저에서 집계 스크립트를 막으면 방문 수가 집계되지 않을 수 있으며, 문의 접수와는 무관합니다. 집계 정보의 보관 기간은 이 사이트에서 따로 정하지 않았습니다.",
  },
] as const;

export default function PrivacyPage() {
  return (
    <>
      <header className="border-b border-white/10 bg-paper text-white">
        <Container className="py-12 lg:py-16">
          <p className="text-sm text-[#8adfff]">개인정보</p>
          <h1 className="mt-3 max-w-[12em] text-[2.1rem] font-semibold leading-[1.22] tracking-[-0.04em] sm:text-[2.7rem]">
            개인정보 처리 안내
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#c5d0df] sm:text-base">
            {`${site.name}는 문의 접수와 방문 수 집계에서 다루는 정보를 아래와 같이 처리합니다. 이 안내는 2026년 11월 17일부터 적용합니다.`}
          </p>
        </Container>
      </header>
      <section className="bg-paper">
        <Container className="py-14 sm:py-16">
          <div className="max-w-3xl">
          <dl className="grid gap-4">
            {sections.map((section) => (
              <div key={section.title} className="border-t border-line py-5">
                <dt className="text-base font-semibold">{section.title}</dt>
                <dd className="mt-2 text-sm leading-7 text-muted">{section.body}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 border border-white/15 bg-night px-6 py-5 text-sm leading-7">
            <p>개인정보 보호책임자 {site.representative}</p>
            <p className="mt-1 text-muted">개인정보 열람, 정정, 삭제, 처리정지 요청을 받습니다.</p>
            <p className="mt-1">
              <a className="underline underline-offset-4" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
            <p className="mt-1 text-muted">{site.address}</p>
          </div>
          <Link href="/contact" className="mt-8 inline-flex bg-white px-5 py-3 text-sm font-medium text-[#080E1B]">
            문의하기
          </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
