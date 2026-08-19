import type { BoardType, PostStatus, RoleType } from "@/entities/post/model/types";

export const boardTypeLabels: Record<BoardType, string> = {
  REGULAR: "정기전",
  MERCENARY: "용병",
  TEAM_MATCH: "팀 매칭",
};

export const roleTypeLabels: Record<RoleType, string> = {
  SEEKING: "찾는 중",
  RECRUITING: "모집 중",
};

export const postStatusLabels: Record<PostStatus, string> = {
  OPEN: "진행 중",
  CLOSED: "마감",
};

export const boardTypeOptions: Array<{ label: string; value: BoardType }> = [
  { label: boardTypeLabels.REGULAR, value: "REGULAR" },
  { label: boardTypeLabels.MERCENARY, value: "MERCENARY" },
  { label: boardTypeLabels.TEAM_MATCH, value: "TEAM_MATCH" },
];

export const roleTypeOptions: Array<{ label: string; value: RoleType }> = [
  { label: roleTypeLabels.SEEKING, value: "SEEKING" },
  { label: roleTypeLabels.RECRUITING, value: "RECRUITING" },
];

export const postStatusOptions: Array<{ label: string; value: PostStatus }> = [
  { label: postStatusLabels.OPEN, value: "OPEN" },
  { label: postStatusLabels.CLOSED, value: "CLOSED" },
];
