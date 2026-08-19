import { apiClient } from "@/shared/api/client";
import type {
  LoginRequest,
  LoginResponse,
  SignupRequest,
  SignupResponse,
} from "@/entities/auth/model/types";

export const authApi = {
  signup(request: SignupRequest) {
    return apiClient<SignupResponse>("/api/auth/signup", {
      method: "POST",
      body: request,
    });
  },

  login(request: LoginRequest) {
    return apiClient<LoginResponse>("/api/auth/login", {
      method: "POST",
      body: request,
    });
  },
};
