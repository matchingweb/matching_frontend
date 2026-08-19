"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CheckCircle2, Pencil } from "lucide-react";
import { postApi } from "@/entities/post/api/post-api";
import type { PostResponse } from "@/entities/post/model/types";
import { boardTypeLabels, roleTypeLabels } from "@/entities/post/model/options";
import { PostStatusBadge } from "@/features/post/ui/post-status-badge";
import { useAuthStore } from "@/features/auth/model/auth-store";
import { formatDateTime } from "@/shared/lib/date";
import { buttonVariants } from "@/shared/ui/button";

export function MyPostsPanel() {
  const accessToken = useAuthStore((state) => state.accessToken);
  const [posts, setPosts] = useState<PostResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!accessToken) {
      return;
    }

    const token = accessToken;

    async function loadPosts() {
      setIsLoading(true);
      setErrorMessage(null);

      try {
        setPosts(await postApi.getMine(token));
      } catch (error) {
        setErrorMessage(error instanceof Error ? error.message : "내 게시글을 불러오지 못했습니다.");
      } finally {
        setIsLoading(false);
      }
    }

    void loadPosts();
  }, [accessToken]);

  async function handleClose(postId: number) {
    if (!accessToken) {
      return;
    }

    try {
      const closedPost = await postApi.close(postId, accessToken);
      setPosts((current) => current.map((post) => (post.id === postId ? closedPost : post)));
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "게시글을 마감하지 못했습니다.");
    }
  }

  if (isLoading) {
    return <p className="text-sm text-zinc-600">내 게시글을 불러오는 중입니다.</p>;
  }

  return (
    <section className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-emerald-700">내 게시글</p>
          <h2 className="mt-1 text-xl font-bold">작성한 매칭 관리</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link className={buttonVariants("secondary")} href="/teams/new">
            팀 생성
          </Link>
          <Link className={buttonVariants("primary")} href="/posts/new">
            새 글 작성
          </Link>
        </div>
      </div>

      {errorMessage ? (
        <p className="mb-4 rounded-md bg-red-50 px-3 py-2 text-sm font-medium text-red-700">
          {errorMessage}
        </p>
      ) : null}

      <div className="space-y-3">
        {posts.length > 0 ? (
          posts.map((post) => (
            <article key={post.id} className="rounded-md border border-zinc-200 p-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-zinc-500">
                    <span>{boardTypeLabels[post.boardType]}</span>
                    <span aria-hidden="true">/</span>
                    <span>{roleTypeLabels[post.roleType]}</span>
                  </div>
                  <h3 className="mt-2 text-lg font-bold">{post.title}</h3>
                  <p className="mt-2 text-sm text-zinc-600">{formatDateTime(post.matchDate)}</p>
                </div>
                <PostStatusBadge status={post.status} />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <Link className={buttonVariants("secondary", "gap-2")} href={`/posts/${post.id}/edit`}>
                  <Pencil size={16} />
                  수정
                </Link>
                <button
                  className={buttonVariants("secondary", "gap-2")}
                  disabled={post.status === "CLOSED"}
                  onClick={() => void handleClose(post.id)}
                  type="button"
                >
                  <CheckCircle2 size={16} />
                  마감
                </button>
              </div>
            </article>
          ))
        ) : (
          <p className="rounded-md bg-zinc-50 p-4 text-sm text-zinc-600">작성한 게시글이 없습니다.</p>
        )}
      </div>
    </section>
  );
}
