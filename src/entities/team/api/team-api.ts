import { apiClient } from "@/shared/api/client";
import type {
  TeamCreateRequest,
  TeamResponse,
  TeamUpdateRequest,
} from "@/entities/team/model/types";

export const teamApi = {
  create(request: TeamCreateRequest, accessToken: string) {
    return apiClient<TeamResponse>("/api/teams", {
      method: "POST",
      body: request,
      accessToken,
    });
  },

  getById(teamId: number, accessToken?: string) {
    return apiClient<TeamResponse>(`/api/teams/${teamId}`, {
      accessToken,
    });
  },

  update(teamId: number, request: TeamUpdateRequest, accessToken: string) {
    return apiClient<TeamResponse>(`/api/teams/${teamId}`, {
      method: "PATCH",
      body: request,
      accessToken,
    });
  },
};
