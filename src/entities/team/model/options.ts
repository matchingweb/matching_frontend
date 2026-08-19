import type { TeamLevel } from "@/entities/team/model/types";

export const teamLevelLabels: Record<TeamLevel, string> = {
  HIGH: "상",
  MIDDLE: "중",
  LOW: "하",
};

export const teamLevelOptions: Array<{ label: string; value: TeamLevel }> = [
  { label: teamLevelLabels.HIGH, value: "HIGH" },
  { label: teamLevelLabels.MIDDLE, value: "MIDDLE" },
  { label: teamLevelLabels.LOW, value: "LOW" },
];
