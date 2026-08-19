import type { Metadata } from "next";
import { siteConfig } from "@/shared/config/site";
import { ContentPage, ContentSection } from "@/shared/ui/content-page";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: "Matching 서비스의 개인정보 수집, 이용, 보관, 문의 기준을 안내합니다.",
};

export default function PrivacyPage() {
  return (
    <ContentPage
      description="서비스 이용 과정에서 처리되는 개인정보의 항목과 목적을 안내합니다."
      eyebrow="Privacy"
      title="개인정보처리방침"
    >
      <ContentSection title="수집하는 정보">
        <p>
          회원가입과 서비스 이용을 위해 이메일, 닉네임, 나이, 성별, 활동 지역, 포지션, 실력 정보,
          경력, 경기 영상 URL을 수집할 수 있습니다. 로그인과 보안을 위해 인증 토큰과 접속 기록이
          처리될 수 있습니다.
        </p>
      </ContentSection>
      <ContentSection title="이용 목적">
        <p>
          수집한 정보는 회원 식별, 게시글 작성, 팀 생성, 매칭 품질 개선, 부정 이용 방지, 사용자
          문의 대응을 위해 사용합니다. 사용자의 동의 없이 목적 외로 판매하거나 임의 제공하지 않습니다.
        </p>
      </ContentSection>
      <ContentSection title="보관과 삭제">
        <p>
          개인정보는 서비스 제공에 필요한 기간 동안 보관하며, 회원 탈퇴나 삭제 요청이 있으면 관련
          법령과 운영상 필요한 범위를 제외하고 지체 없이 삭제합니다.
        </p>
      </ContentSection>
      <ContentSection title="광고와 쿠키">
        <p>
          향후 Google AdSense 등 광고 서비스를 사용할 경우 광고 제공자는 쿠키나 유사 기술을 이용해
          광고 측정과 부정 클릭 방지를 수행할 수 있습니다. 사용자는 브라우저 설정에서 쿠키 저장을
          제한할 수 있습니다.
        </p>
      </ContentSection>
      <ContentSection title="문의">
        <p>
          개인정보 관련 문의는 {siteConfig.contactEmail}로 보낼 수 있습니다. 접수된 문의는 사용자
          권리 보호와 서비스 운영 안정성을 기준으로 검토합니다.
        </p>
      </ContentSection>
    </ContentPage>
  );
}
