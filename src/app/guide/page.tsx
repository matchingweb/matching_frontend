import type { Metadata } from "next";
import { ContentPage, ContentSection } from "@/shared/ui/content-page";

export const metadata: Metadata = {
  title: "매칭 가이드",
  description: "축구/풋살 용병 모집과 팀 매칭 글을 작성할 때 필요한 정보와 안전한 이용 팁입니다.",
};

export default function GuidePage() {
  return (
    <ContentPage
      description="좋은 매칭 글은 일정, 장소, 수준, 비용, 연락 방식이 분명합니다."
      eyebrow="Guide"
      title="좋은 축구/풋살 매칭을 만드는 방법"
    >
      <ContentSection title="모집 글에 꼭 넣을 정보">
        <p>
          경기 날짜와 시간, 정확한 장소, 모집 인원, 포지션, 예상 수준, 참가비, 준비물을 적으면
          불필요한 문의가 줄어듭니다. 특히 초행자가 찾기 어려운 경기장은 주차나 대중교통 정보를
          함께 남기는 것이 좋습니다.
        </p>
      </ContentSection>
      <ContentSection title="수준과 역할을 명확히 적기">
        <p>
          “중급”처럼 짧게 쓰는 것보다 최근 경기 빈도, 선호 포지션, 팀 분위기, 경쟁 강도를 함께
          설명하면 매칭 만족도가 높아집니다. 친목 위주인지, 빠른 템포의 경기인지도 미리 알려주세요.
        </p>
      </ContentSection>
      <ContentSection title="안전한 이용을 위한 기준">
        <p>
          처음 만나는 팀이나 선수와는 공개된 장소에서 경기하고, 회비나 대관비는 금액과 결제 시점을
          사전에 확인하는 것이 좋습니다. 부적절한 언행, 허위 정보, 노쇼가 반복되는 경우 운영자에게
          문의해 기록을 남겨주세요.
        </p>
      </ContentSection>
      <ContentSection title="애드센스와 공개 콘텐츠 운영">
        <p>
          검색 가능한 공개 게시글과 가이드 문서는 신규 사용자가 서비스를 이해하는 데 필요합니다.
          광고 수익화를 준비할 때도 단순 템플릿이 아니라 실제 사용자에게 도움이 되는 원문 콘텐츠를
          꾸준히 쌓는 방향이 중요합니다.
        </p>
      </ContentSection>
    </ContentPage>
  );
}
