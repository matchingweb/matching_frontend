export type Gender = "MALE" | "FEMALE" | "OTHER";

export type Position =
  | "GK"
  | "DF"
  | "CB"
  | "LB"
  | "RB"
  | "MF"
  | "CDM"
  | "CM"
  | "CAM"
  | "FW"
  | "LW"
  | "RW"
  | "ST";

export type UserMeResponse = {
  id: number;
  email: string;
  nickname: string;
  age: number;
  gender: Gender;
  region: string;
  position: Position;
  skillLevel: string | null;
  career: string | null;
  videoUrl: string | null;
  createdAt: string;
  updatedAt: string;
};
