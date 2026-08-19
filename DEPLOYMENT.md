# Deployment Checklist

Matching Frontend는 Next.js Node.js 서버 또는 Next.js 지원 호스팅에서 실행합니다.

## 필수 환경 변수

```bash
NEXT_PUBLIC_API_BASE_URL=https://api.example.com
NEXT_PUBLIC_SITE_URL=https://www.example.com
NEXT_PUBLIC_CONTACT_EMAIL=contact@example.com
NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-...
```

`NEXT_PUBLIC_ADSENSE_CLIENT`는 Google AdSense 승인 후 발급받은 client ID를 넣습니다. 값이 비어 있으면 광고 스크립트는 로드되지 않습니다.

## 배포 전 확인

```bash
npm install
npm run check
```

## 런타임 확인

- `/api/health`: 프론트엔드 서버 헬스 체크
- `/robots.txt`: 검색엔진 정책
- `/sitemap.xml`: 공개 페이지 사이트맵
- `/privacy`, `/terms`, `/contact`: AdSense 검토용 신뢰 페이지

## 백엔드 연결 확인

SEO와 AdSense 준비를 위해 아래 백엔드 조회 API는 비로그인 사용자에게 공개되는 것이 좋습니다.

- `GET /api/posts`
- `GET /api/posts/{postId}`
- `GET /api/teams/{teamId}`

작성, 수정, 마감, 내 정보 조회는 JWT 인증을 유지합니다.
