import type { Gender, Position } from "@/entities/user/model/types";

export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  accessToken: string;
  tokenType: "Bearer";
  expiresIn: number;
};

export type SignupRequest = {
  email: string;
  password: string;
  nickname: string;
  age: number;
  gender: Gender;
  region: string;
  position: Position;
  skillLevel?: string;
  career?: string;
  videoUrl?: string;
};

export type SignupResponse = {
  id: number;
  email: string;
  nickname: string;
  age: number;
  gender: Gender;
  region: string;
  position: Position;
};
