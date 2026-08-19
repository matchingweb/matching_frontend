import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { siteConfig } from "@/shared/config/site";
import { ContentPage, ContentSection } from "@/shared/ui/content-page";

export const metadata: Metadata = {
  title: "문의",
  description: "Matching 서비스 제휴, 오류 신고, 개인정보 문의 접수 안내입니다.",
};

export default function ContactPage() {
  return (
    <ContentPage
      description="서비스 오류, 부적절한 게시글, 개인정보, 제휴 관련 문의를 접수합니다."
      eyebrow="Contact"
      title="문의하기"
    >
      <ContentSection title="문의 채널">
        <p className="inline-flex items-center gap-2 font-semibold text-zinc-950">
          <Mail size={17} />
          {siteConfig.contactEmail}
        </p>
        <p>
          문의 시 관련 게시글 URL, 작성자 닉네임, 발생 시간, 화면 캡처를 함께 보내면 더 빠르게 확인할 수
          있습니다.
        </p>
      </ContentSection>
      <ContentSection title="신고 가능한 항목">
        <p>
          허위 모집 글, 반복적인 불참, 부적절한 언행, 개인정보 노출, 결제 관련 분쟁, 서비스 오류를
          신고할 수 있습니다. 신고 내용은 서비스 개선과 안전한 매칭 환경을 위해 검토됩니다.
        </p>
      </ContentSection>
      <ContentSection title="답변 기준">
        <p>
          일반 문의는 접수 순서대로 검토합니다. 개인정보나 안전과 관련된 문의는 우선순위를 높여
          확인하며, 필요한 경우 추가 정보를 요청할 수 있습니다.
        </p>
      </ContentSection>
    </ContentPage>
  );
}
