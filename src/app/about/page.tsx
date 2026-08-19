import type { Metadata } from "next";
import { ContentPage, ContentSection } from "@/shared/ui/content-page";

export const metadata: Metadata = {
  title: "서비스 소개",
  description: "Matching이 축구와 풋살 팀, 선수, 경기를 연결하는 방식과 운영 원칙을 소개합니다.",
};

export default function AboutPage() {
  return (
    <ContentPage
      description="Matching은 아마추어 축구와 풋살을 더 쉽게 이어주는 매칭 게시판입니다."
      eyebrow="About"
      title="지역과 일정 중심의 축구/풋살 매칭 서비스"
    >
      <ContentSection title="서비스가 해결하려는 문제">
        <p>
          동네 축구와 풋살은 사람 한두 명이 부족해 경기가 취소되거나, 팀 간 수준이 맞지 않아
          아쉬운 경기가 되는 일이 많습니다. Matching은 모집 글, 팀 정보, 경기 일정, 활동 지역을
          한곳에 모아 필요한 사람과 팀을 빠르게 찾도록 돕습니다.
        </p>
      </ContentSection>
      <ContentSection title="주요 사용자">
        <p>
          정기적으로 운동하는 팀, 주말 용병을 찾는 운영자, 새로운 팀을 찾는 개인 선수, 친선전을
          원하는 팀이 모두 사용할 수 있습니다. 게시글은 용병, 팀 매칭, 정기전처럼 목적별로
          나뉘어 탐색 시간을 줄입니다.
        </p>
      </ContentSection>
      <ContentSection title="운영 방향">
        <p>
          서비스는 공개 게시글을 통해 검색 가능한 정보를 제공하고, 작성과 수정은 로그인한 회원에게
          제한합니다. 앞으로 팀 목록, 지역별 인기 경기, 후기와 신고 기능을 단계적으로 추가해 신뢰도
          높은 매칭 환경을 만들 계획입니다.
        </p>
      </ContentSection>
    </ContentPage>
  );
}
