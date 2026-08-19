import { CalendarDays, MapPin, Search, ShieldCheck, UsersRound } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/shared/ui/button";
import { SiteFooter } from "@/shared/ui/site-footer";
import { SiteHeader } from "@/shared/ui/site-header";

const stats = [
  { label: "게시판", value: "용병 · 팀매칭 · 정기전" },
  { label: "검색", value: "지역 · 경기일 · 모집상태" },
  { label: "인증", value: "JWT 기반 회원 기능" },
];

const features = [
  {
    title: "지역 기반 매칭",
    description: "활동 지역과 경기 장소를 기준으로 빠르게 팀과 선수를 찾습니다.",
    icon: MapPin,
  },
  {
    title: "경기 일정 중심",
    description: "경기일 필터와 상태 관리를 통해 마감된 글과 열린 글을 구분합니다.",
    icon: CalendarDays,
  },
  {
    title: "팀/회원 신뢰 정보",
    description: "팀 정보, 포지션, 레벨, 경력 정보를 기반으로 매칭 품질을 높입니다.",
    icon: ShieldCheck,
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-950">
      <SiteHeader />

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-20">
        <div>
          <p className="mb-4 text-sm font-semibold text-emerald-700">아마추어 축구/풋살 매칭</p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-normal text-zinc-950 md:text-5xl">
            우리 동네 팀과 선수를 가장 빠르게 연결합니다
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-600">
            용병 모집, 팀 매칭, 정기전 게시글을 지역과 일정 기준으로 찾고 관리하는
            축구/풋살 매칭 서비스입니다.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className={buttonVariants("primary", "gap-2")} href="/posts">
              <Search size={18} />
              매칭 찾기
            </Link>
            <Link className={buttonVariants("secondary", "gap-2")} href="/signup">
              <UsersRound size={18} />팀 등록하기
            </Link>
          </div>
        </div>

        <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-zinc-500">오늘의 매칭 보드</p>
              <h2 className="mt-1 text-xl font-bold">대전 풋살 용병 2명 모집</h2>
            </div>
            <span className="rounded-md bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
              OPEN
            </span>
          </div>
          <div className="space-y-3 text-sm text-zinc-600">
            <p>경기일: 2026.08.22 18:00</p>
            <p>장소: 대전광역시 유성구 송강동 풋살장</p>
            <p>레벨: 중급 / 포지션 자유</p>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {stats.map((item) => (
              <div key={item.label} className="rounded-md bg-zinc-50 p-3">
                <p className="text-xs font-semibold text-zinc-500">{item.label}</p>
                <p className="mt-2 text-sm font-bold text-zinc-900">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="guide" className="border-y border-zinc-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-4 px-5 py-10 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article key={feature.title} className="rounded-lg border border-zinc-200 p-5">
                <Icon className="text-emerald-700" size={24} />
                <h3 className="mt-4 text-lg font-bold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">{feature.description}</p>
              </article>
            );
          })}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-sm font-semibold text-emerald-700">운영 가이드</p>
            <h2 className="mt-2 text-2xl font-bold">좋은 매칭 글은 신뢰에서 시작합니다</h2>
          </div>
          <div className="space-y-4 text-sm leading-7 text-zinc-600">
            <p>
              Matching은 단순 게시판이 아니라 실제 경기 성사율을 높이기 위한 정보를 정리합니다.
              경기 시간, 장소, 수준, 비용, 준비물을 명확히 남기면 불필요한 문의와 노쇼를 줄일 수 있습니다.
            </p>
            <Link className={buttonVariants("secondary")} href="/guide">
              매칭 가이드 보기
            </Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
