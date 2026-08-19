import Link from "next/link";
import { CalendarDays, MapPin, UsersRound } from "lucide-react";
import type { PostResponse } from "@/entities/post/model/types";
import { boardTypeLabels, roleTypeLabels } from "@/entities/post/model/options";
import { formatDateTime } from "@/shared/lib/date";
import { PostStatusBadge } from "@/features/post/ui/post-status-badge";

type PostCardProps = {
  post: PostResponse;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition-colors hover:border-emerald-200">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-zinc-500">
            <span>{boardTypeLabels[post.boardType]}</span>
            <span aria-hidden="true">/</span>
            <span>{roleTypeLabels[post.roleType]}</span>
          </div>
          <h2 className="mt-3 text-xl font-bold text-zinc-950">
            <Link className="hover:text-emerald-700" href={`/posts/${post.id}`}>
              {post.title}
            </Link>
          </h2>
        </div>
        <PostStatusBadge status={post.status} />
      </div>
      <p className="mt-4 line-clamp-2 text-sm leading-6 text-zinc-600">{post.content}</p>
      <div className="mt-5 grid gap-2 text-sm text-zinc-600 sm:grid-cols-3">
        <p className="inline-flex items-center gap-2">
          <CalendarDays size={16} />
          {formatDateTime(post.matchDate)}
        </p>
        <p className="inline-flex items-center gap-2">
          <MapPin size={16} />
          {post.location ?? "장소 협의"}
        </p>
        <p className="inline-flex items-center gap-2">
          <UsersRound size={16} />
          {post.teamName ?? post.authorNickname}
        </p>
      </div>
    </article>
  );
}
