import type { PostStatus } from "@/entities/post/model/types";
import { postStatusLabels } from "@/entities/post/model/options";
import { cn } from "@/shared/lib/cn";

type PostStatusBadgeProps = {
  status: PostStatus;
};

export function PostStatusBadge({ status }: PostStatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex h-7 items-center rounded-md px-2.5 text-xs font-bold",
        status === "OPEN"
          ? "bg-emerald-50 text-emerald-700"
          : "bg-zinc-100 text-zinc-500",
      )}
    >
      {postStatusLabels[status]}
    </span>
  );
}
