export type TeamLevel = "HIGH" | "MIDDLE" | "LOW";

export type TeamCreateRequest = {
  name: string;
  logoUrl?: string;
  homeRegion: string;
  homeStadium?: string;
  ageGroup: string;
  level: TeamLevel;
  fee?: number;
};

export type TeamUpdateRequest = Partial<TeamCreateRequest>;

export type TeamResponse = {
  id: number;
  ownerUserId: number;
  ownerNickname: string;
  name: string;
  logoUrl: string | null;
  homeRegion: string;
  homeStadium: string | null;
  ageGroup: string;
  level: TeamLevel;
  fee: number | null;
  createdAt: string;
  updatedAt: string;
};
