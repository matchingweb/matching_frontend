import type { Metadata } from "next";
import { siteConfig } from "@/shared/config/site";
import { ContentPage, ContentSection } from "@/shared/ui/content-page";

export const metadata: Metadata = {
  title: "이용약관",
  description: "Matching 서비스 이용 조건, 회원 책임, 게시글 운영 기준을 안내합니다.",
};

export default function TermsPage() {
  return (
    <ContentPage
      description="서비스 이용 전 확인해야 할 기본 약관과 운영 기준입니다."
      eyebrow="Terms"
      title="이용약관"
    >
      <ContentSection title="서비스 목적">
        <p>
          Matching은 축구와 풋살 팀, 선수, 경기 정보를 연결하는 게시판 서비스를 제공합니다. 사용자는
          매칭 게시글을 탐색하고, 로그인 후 팀과 게시글을 생성하거나 관리할 수 있습니다.
        </p>
      </ContentSection>
      <ContentSection title="회원의 책임">
        <p>
          회원은 정확한 정보를 입력해야 하며, 타인의 권리를 침해하거나 허위 모집 글을 작성해서는
          안 됩니다. 경기 참가비, 장소, 일정, 취소 조건은 당사자 간 명확히 확인해야 합니다.
        </p>
      </ContentSection>
      <ContentSection title="게시글 운영 기준">
        <p>
          욕설, 차별, 불법 거래, 사기성 모집, 개인정보 노출, 반복적인 노쇼를 유도하는 글은 제한될 수
          있습니다. 운영자는 안전한 서비스 제공을 위해 문제가 되는 콘텐츠를 숨기거나 삭제할 수 있습니다.
        </p>
      </ContentSection>
      <ContentSection title="책임의 한계">
        <p>
          서비스는 매칭 정보를 제공하는 플랫폼이며, 실제 경기 진행과 비용 정산, 현장 사고에 대한
          책임은 각 참여자가 부담합니다. 분쟁이 발생하면 관련 기록을 바탕으로 문의할 수 있습니다.
        </p>
      </ContentSection>
      <ContentSection title="문의">
        <p>
          약관과 서비스 운영 문의는 {siteConfig.contactEmail}로 접수합니다. 운영 정책은 서비스 안정성과
          사용자 보호를 위해 필요한 범위에서 변경될 수 있습니다.
        </p>
      </ContentSection>
    </ContentPage>
  );
}
