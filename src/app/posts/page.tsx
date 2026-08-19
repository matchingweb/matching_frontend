import type { Metadata } from "next";
import Link from "next/link";
import { postApi } from "@/entities/post/api/post-api";
import type {
  BoardType,
  PostResponse,
  PostSearchParams,
  PostStatus,
  RoleType,
} from "@/entities/post/model/types";
import { PostCard } from "@/features/post/ui/post-card";
import { PostEmptyState } from "@/features/post/ui/post-empty-state";
import { PostFilterForm } from "@/features/post/ui/post-filter-form";
import { buttonVariants } from "@/shared/ui/button";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "매칭 게시글",
  description: "지역, 일정, 모집 상태에 맞는 축구/풋살 매칭 게시글을 찾아보세요.",
};

type PostsPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

function firstParam(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

function parseFilters(searchParams: Record<string, string | string[] | undefined>): PostSearchParams {
  return {
    boardType: firstParam(searchParams.boardType) as BoardType | undefined,
    roleType: firstParam(searchParams.roleType) as RoleType | undefined,
    status: firstParam(searchParams.status) as PostStatus | undefined,
    region: firstParam(searchParams.region),
  };
}

async function getPosts(filters: PostSearchParams) {
  try {
    return {
      posts: await postApi.getList(filters),
      error: null,
    };
  } catch (error) {
    return {
      posts: [] as PostResponse[],
      error: error instanceof Error ? error.message : "게시글을 불러오지 못했습니다.",
    };
  }
}

export default async function PostsPage({ searchParams }: PostsPageProps) {
  const filters = parseFilters(await searchParams);
  const { error, posts } = await getPosts(filters);

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-950">
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <Link className="flex items-center gap-2 font-bold" href="/">
            <span className="flex size-8 items-center justify-center rounded-md bg-emerald-600 text-white">
              M
            </span>
            <span>Matching</span>
          </Link>
          <div className="flex items-center gap-2">
            <Link className={buttonVariants("ghost", "px-3")} href="/login">
              로그인
            </Link>
            <Link className={buttonVariants("primary")} href="/signup">
              글쓰기
            </Link>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 py-10">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-emerald-700">공개 매칭 게시판</p>
            <h1 className="mt-2 text-3xl font-bold">축구/풋살 매칭 찾기</h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-600">
              지역, 게시판 유형, 모집 상태를 기준으로 필요한 매칭을 빠르게 확인하세요.
            </p>
          </div>
          <p className="text-sm font-semibold text-zinc-500">총 {posts.length}개</p>
        </div>

        <PostFilterForm filters={filters} />

        {error ? (
          <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
            백엔드 공개 조회 권한 또는 서버 상태를 확인해야 합니다. 현재 응답: {error}
          </div>
        ) : null}

        <div className="mt-6 space-y-4">
          {posts.length > 0 ? (
            posts.map((post) => <PostCard key={post.id} post={post} />)
          ) : (
            <PostEmptyState
              description="조건에 맞는 공개 게시글이 아직 없습니다. 백엔드 공개 조회가 허용되면 이 영역에 실제 매칭 글이 표시됩니다."
              title="게시글을 찾을 수 없습니다"
            />
          )}
        </div>
      </section>
    </main>
  );
}
