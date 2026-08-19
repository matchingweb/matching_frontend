import { apiClient } from "@/shared/api/client";
import type { UserMeResponse } from "@/entities/user/model/types";

export const userApi = {
  getMe(accessToken: string) {
    return apiClient<UserMeResponse>("/api/users/me", {
      accessToken,
    });
  },
};
