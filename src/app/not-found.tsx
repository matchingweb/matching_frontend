import Link from "next/link";
import { SiteFooter } from "@/shared/ui/site-footer";
import { SiteHeader } from "@/shared/ui/site-header";
import { buttonVariants } from "@/shared/ui/button";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-950">
      <SiteHeader />
      <section className="mx-auto max-w-3xl px-5 py-20 text-center">
        <p className="text-sm font-semibold text-emerald-700">404</p>
        <h1 className="mt-3 text-4xl font-bold">페이지를 찾을 수 없습니다</h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-zinc-600">
          주소가 변경되었거나 삭제된 페이지입니다. 공개 게시글 목록에서 필요한 매칭 정보를 다시
          찾아보세요.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link className={buttonVariants("primary")} href="/posts">
            게시글 보기
          </Link>
          <Link className={buttonVariants("secondary")} href="/">
            홈으로 이동
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
