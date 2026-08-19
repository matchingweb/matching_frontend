"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  boardTypeOptions,
  roleTypeOptions,
} from "@/entities/post/model/options";
import type {
  BoardType,
  PostCreateRequest,
  PostResponse,
  RoleType,
} from "@/entities/post/model/types";
import { postApi } from "@/entities/post/api/post-api";
import { useAuthStore } from "@/features/auth/model/auth-store";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Select } from "@/shared/ui/select";
import { Textarea } from "@/shared/ui/textarea";

type PostFormProps = {
  mode: "create" | "edit";
  post?: PostResponse;
};

function toDateTimeLocal(value: string | null | undefined) {
  if (!value) {
    return "";
  }

  return value.slice(0, 16);
}

function toApiDateTime(value: string) {
  return value ? `${value}:00` : undefined;
}

export function PostForm({ mode, post }: PostFormProps) {
  const router = useRouter();
  const accessToken = useAuthStore((state) => state.accessToken);
  const [teamId, setTeamId] = useState(post?.teamId ? String(post.teamId) : "");
  const [boardType, setBoardType] = useState<BoardType>(post?.boardType ?? "MERCENARY");
  const [roleType, setRoleType] = useState<RoleType>(post?.roleType ?? "RECRUITING");
  const [title, setTitle] = useState(post?.title ?? "");
  const [matchDate, setMatchDate] = useState(toDateTimeLocal(post?.matchDate));
  const [location, setLocation] = useState(post?.location ?? "");
  const [content, setContent] = useState(post?.content ?? "");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!accessToken) {
      router.replace("/login");
      return;
    }

    const payload: PostCreateRequest = {
      teamId: teamId ? Number(teamId) : undefined,
      boardType,
      roleType,
      title,
      matchDate: toApiDateTime(matchDate),
      location: location || undefined,
      content,
    };

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const savedPost =
        mode === "create"
          ? await postApi.create(payload, accessToken)
          : await postApi.update(post?.id ?? 0, payload, accessToken);
      router.replace(`/posts/${savedPost.id}`);
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "게시글을 저장하지 못했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <Select
          id="boardType"
          label="게시판"
          onChange={(event) => setBoardType(event.target.value as BoardType)}
          options={boardTypeOptions}
          value={boardType}
        />
        <Select
          id="roleType"
          label="구분"
          onChange={(event) => setRoleType(event.target.value as RoleType)}
          options={roleTypeOptions}
          value={roleType}
        />
      </div>
      <Input
        id="title"
        label="제목"
        maxLength={100}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="이번 주말 풋살 용병 2명 구합니다"
        required
        value={title}
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <Input
          id="teamId"
          label="팀 ID"
          min={1}
          onChange={(event) => setTeamId(event.target.value)}
          placeholder="비워두면 개인 글"
          type="number"
          value={teamId}
        />
        <Input
          id="matchDate"
          label="경기일"
          onChange={(event) => setMatchDate(event.target.value)}
          type="datetime-local"
          value={matchDate}
        />
      </div>
      <Input
        id="location"
        label="장소"
        maxLength={200}
        onChange={(event) => setLocation(event.target.value)}
        placeholder="대전광역시 유성구 송강동 풋살장"
        value={location}
      />
      <Textarea
        id="content"
        label="내용"
        onChange={(event) => setContent(event.target.value)}
        placeholder="모집 조건, 경기 방식, 준비물 등을 적어주세요."
        required
        value={content}
      />
      {errorMessage ? (
        <p className="rounded-md bg-red-50 px-3 py-2 text-sm font-medium text-red-700">
          {errorMessage}
        </p>
      ) : null}
      <Button className="w-full sm:w-auto" disabled={isSubmitting} type="submit">
        {isSubmitting ? "저장 중..." : mode === "create" ? "게시글 작성" : "게시글 수정"}
      </Button>
    </form>
  );
}
