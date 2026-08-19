import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { CalendarDays, MapPin, UserRound, UsersRound } from "lucide-react";
import { postApi } from "@/entities/post/api/post-api";
import type { PostResponse } from "@/entities/post/model/types";
import { boardTypeLabels, roleTypeLabels } from "@/entities/post/model/options";
import { PostStatusBadge } from "@/features/post/ui/post-status-badge";
import { formatDateTime } from "@/shared/lib/date";
import { buttonVariants } from "@/shared/ui/button";

export const dynamic = "force-dynamic";

type PostDetailPageProps = {
  params: Promise<{
    postId: string;
  }>;
};

async function getPost(postId: string) {
  const id = Number(postId);

  if (!Number.isInteger(id) || id <= 0) {
    return {
      post: null,
      error: "올바르지 않은 게시글 번호입니다.",
    };
  }

  try {
    return {
      post: await postApi.getById(id),
      error: null,
    };
  } catch (error) {
    return {
      post: null as PostResponse | null,
      error: error instanceof Error ? error.message : "게시글을 불러오지 못했습니다.",
    };
  }
}

export async function generateMetadata({ params }: PostDetailPageProps): Promise<Metadata> {
  const { post } = await getPost((await params).postId);

  if (!post) {
    return {
      title: "게시글 상세",
    };
  }

  return {
    title: post.title,
    description: post.content.slice(0, 120),
    openGraph: {
      title: post.title,
      description: post.content.slice(0, 120),
      type: "article",
    },
  };
}

export default async function PostDetailPage({ params }: PostDetailPageProps) {
  const { error, post } = await getPost((await params).postId);

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
          <Link className={buttonVariants("secondary")} href="/posts">
            목록으로
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-5 py-10">
        {post ? (
          <article className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2 text-sm font-bold text-zinc-500">
                  <span>{boardTypeLabels[post.boardType]}</span>
                  <span aria-hidden="true">/</span>
                  <span>{roleTypeLabels[post.roleType]}</span>
                </div>
                <h1 className="mt-3 text-3xl font-bold leading-tight">{post.title}</h1>
              </div>
              <PostStatusBadge status={post.status} />
            </div>

            <dl className="mt-6 grid gap-3 text-sm text-zinc-600 sm:grid-cols-2">
              <InfoItem
                icon={<CalendarDays size={17} />}
                label="경기일"
                value={formatDateTime(post.matchDate)}
              />
              <InfoItem icon={<MapPin size={17} />} label="장소" value={post.location ?? "장소 협의"} />
              <InfoItem icon={<UsersRound size={17} />} label="팀" value={post.teamName ?? "개인"} />
              <InfoItem icon={<UserRound size={17} />} label="작성자" value={post.authorNickname} />
            </dl>

            <div className="mt-8 border-t border-zinc-200 pt-8">
              <p className="whitespace-pre-wrap text-base leading-8 text-zinc-800">{post.content}</p>
            </div>
          </article>
        ) : (
          <section className="rounded-lg border border-amber-200 bg-amber-50 p-6 text-amber-950">
            <h1 className="text-xl font-bold">게시글을 불러올 수 없습니다</h1>
            <p className="mt-3 text-sm leading-6">
              백엔드 공개 조회 권한 또는 서버 상태를 확인해야 합니다. 현재 응답: {error}
            </p>
            <Link className={buttonVariants("secondary", "mt-6 bg-white")} href="/posts">
              목록으로 돌아가기
            </Link>
          </section>
        )}
      </section>
    </main>
  );
}

type InfoItemProps = {
  icon: ReactNode;
  label: string;
  value: string;
};

function InfoItem({ icon, label, value }: InfoItemProps) {
  return (
    <div className="rounded-md bg-zinc-50 p-3">
      <dt className="flex items-center gap-2 text-xs font-bold text-zinc-500">
        {icon}
        {label}
      </dt>
      <dd className="mt-2 font-semibold text-zinc-900">{value}</dd>
    </div>
  );
}
