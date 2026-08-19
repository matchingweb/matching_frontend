# Matching Frontend

아마추어 축구/풋살 매칭 플랫폼 프론트엔드입니다.

## 기술 스택

- Next.js App Router
- TypeScript
- Tailwind CSS
- Zustand

## 실행 준비

- Node.js 20.9 이상
- npm 11 이상 권장

```bash
npm install
npm run dev
```

## 환경 변수

`.env.example`을 기준으로 `.env.local`을 생성합니다.

```bash
NEXT_PUBLIC_API_BASE_URL=http://localhost:8080
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## API 연동 구조

- `src/shared/api`: 공통 응답 타입, API 에러, fetch 클라이언트
- `src/entities/*/model`: 백엔드 DTO와 enum에 맞춘 도메인 타입
- `src/entities/*/api`: 도메인별 API 함수

백엔드 공통 응답은 `{ success, data, error }` 구조로 처리합니다.

## 인증 흐름

- `/login`: JWT 로그인
- `/signup`: 회원가입 후 자동 로그인
- `/me`: 토큰 기반 내 정보 조회와 로그아웃
- `src/features/auth/model/auth-store.ts`: Zustand persist 기반 인증 상태 관리

## SEO/애드센스 준비

- `/about`: 서비스 소개
- `/guide`: 매칭 가이드
- `/privacy`: 개인정보처리방침
- `/terms`: 이용약관
- `/contact`: 문의
- `/robots.txt`: 검색엔진 크롤링 정책
- `/sitemap.xml`: 공개 페이지 사이트맵

AdSense 스크립트는 `NEXT_PUBLIC_ADSENSE_CLIENT` 환경변수가 있을 때만 로드합니다.

## 공개 페이지

- `/posts`: 게시글 목록, 지역/게시판/구분/상태 필터
- `/posts/[postId]`: 게시글 상세와 게시글별 메타데이터

게시글 공개 조회는 SEO와 애드센스 준비의 핵심이므로 백엔드에서 목록/상세 조회 권한을 공개로 허용하는 구성이 필요합니다.

## 회원 관리 화면

- `/me`: 내 프로필과 내가 쓴 게시글 관리
- `/posts/new`: 게시글 작성
- `/posts/[postId]/edit`: 게시글 수정
- `/teams/new`: 팀 생성
- `/teams/[teamId]/edit`: 팀 수정

현재 백엔드에는 팀 목록/내 팀 목록 API가 없으므로 게시글 작성 시 팀 ID를 직접 입력하는 방식으로 연결합니다.

## 개발 순서

1. Next.js 프론트엔드 기반 설정 - 완료
2. 공통 API 타입/클라이언트 구성 - 완료
3. JWT 로그인/회원가입 흐름 구현 - 완료
4. 공개 게시글 목록/상세 화면 구현 - 완료
5. 회원 전용 팀/게시글 관리 화면 구현 - 완료
6. SEO/애드센스 준비 페이지 구성 - 완료
7. 배포 및 품질 검증
