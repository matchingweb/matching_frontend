import type { Gender, Position } from "@/entities/user/model/types";

export const genderOptions: Array<{ label: string; value: Gender }> = [
  { label: "남성", value: "MALE" },
  { label: "여성", value: "FEMALE" },
  { label: "기타", value: "OTHER" },
];

export const positionOptions: Array<{ label: string; value: Position }> = [
  { label: "GK", value: "GK" },
  { label: "DF", value: "DF" },
  { label: "CB", value: "CB" },
  { label: "LB", value: "LB" },
  { label: "RB", value: "RB" },
  { label: "MF", value: "MF" },
  { label: "CDM", value: "CDM" },
  { label: "CM", value: "CM" },
  { label: "CAM", value: "CAM" },
  { label: "FW", value: "FW" },
  { label: "LW", value: "LW" },
  { label: "RW", value: "RW" },
  { label: "ST", value: "ST" },
];
