export type BoardType = "REGULAR" | "MERCENARY" | "TEAM_MATCH";

export type RoleType = "SEEKING" | "RECRUITING";

export type PostStatus = "OPEN" | "CLOSED";

export type PostCreateRequest = {
  teamId?: number;
  boardType: BoardType;
  roleType: RoleType;
  title: string;
  matchDate?: string;
  location?: string;
  content: string;
};

export type PostUpdateRequest = Partial<PostCreateRequest>;

export type PostSearchParams = {
  boardType?: BoardType;
  roleType?: RoleType;
  status?: PostStatus;
  region?: string;
  matchDateFrom?: string;
  matchDateTo?: string;
};

export type PostResponse = {
  id: number;
  authorUserId: number;
  authorNickname: string;
  teamId: number | null;
  teamName: string | null;
  boardType: BoardType;
  roleType: RoleType;
  status: PostStatus;
  title: string;
  matchDate: string | null;
  location: string | null;
  content: string;
  createdAt: string;
  updatedAt: string;
};
