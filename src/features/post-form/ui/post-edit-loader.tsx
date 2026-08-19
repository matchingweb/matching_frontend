"use client";

import { useEffect, useState } from "react";
import { postApi } from "@/entities/post/api/post-api";
import type { PostResponse } from "@/entities/post/model/types";
import { useAuthStore } from "@/features/auth/model/auth-store";
import { PostForm } from "@/features/post-form/ui/post-form";

type PostEditLoaderProps = {
  postId: number;
};

export function PostEditLoader({ postId }: PostEditLoaderProps) {
  const accessToken = useAuthStore((state) => state.accessToken);
  const [post, setPost] = useState<PostResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!accessToken) {
      return;
    }

    const token = accessToken;

    async function loadPost() {
      setIsLoading(true);
      setErrorMessage(null);

      try {
        setPost(await postApi.getById(postId, token));
      } catch (error) {
        setErrorMessage(error instanceof Error ? error.message : "게시글을 불러오지 못했습니다.");
      } finally {
        setIsLoading(false);
      }
    }

    void loadPost();
  }, [accessToken, postId]);

  if (isLoading) {
    return <p className="text-sm text-zinc-600">게시글을 불러오는 중입니다.</p>;
  }

  if (errorMessage || !post) {
    return (
      <p className="rounded-md bg-red-50 px-3 py-2 text-sm font-medium text-red-700">
        {errorMessage ?? "게시글을 찾을 수 없습니다."}
      </p>
    );
  }

  return <PostForm mode="edit" post={post} />;
}
