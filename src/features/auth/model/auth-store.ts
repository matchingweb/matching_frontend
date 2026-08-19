"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { authApi } from "@/entities/auth/api/auth-api";
import type { LoginRequest, SignupRequest } from "@/entities/auth/model/types";
import { userApi } from "@/entities/user/api/user-api";
import type { UserMeResponse } from "@/entities/user/model/types";

type AuthStatus = "idle" | "loading" | "authenticated" | "unauthenticated";

type AuthState = {
  accessToken: string | null;
  expiresAt: number | null;
  user: UserMeResponse | null;
  status: AuthStatus;
  errorMessage: string | null;
  login: (request: LoginRequest) => Promise<void>;
  signup: (request: SignupRequest) => Promise<void>;
  loadMe: () => Promise<void>;
  logout: () => void;
  clearError: () => void;
};

function getExpiresAt(expiresIn: number) {
  return Date.now() + expiresIn;
}

function getErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : "처리 중 오류가 발생했습니다.";
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      accessToken: null,
      expiresAt: null,
      user: null,
      status: "idle",
      errorMessage: null,

      async login(request) {
        set({ status: "loading", errorMessage: null });

        try {
          const response = await authApi.login(request);
          set({
            accessToken: response.accessToken,
            expiresAt: getExpiresAt(response.expiresIn),
            status: "authenticated",
          });
          await get().loadMe();
        } catch (error) {
          set({
            accessToken: null,
            expiresAt: null,
            user: null,
            status: "unauthenticated",
            errorMessage: getErrorMessage(error),
          });
          throw error;
        }
      },

      async signup(request) {
        set({ status: "loading", errorMessage: null });

        try {
          await authApi.signup(request);
          await get().login({
            email: request.email,
            password: request.password,
          });
        } catch (error) {
          set({
            status: "unauthenticated",
            errorMessage: getErrorMessage(error),
          });
          throw error;
        }
      },

      async loadMe() {
        const { accessToken, expiresAt } = get();

        if (!accessToken || (expiresAt && expiresAt <= Date.now())) {
          get().logout();
          return;
        }

        set({ status: "loading", errorMessage: null });

        try {
          const user = await userApi.getMe(accessToken);
          set({ user, status: "authenticated" });
        } catch (error) {
          set({
            accessToken: null,
            expiresAt: null,
            user: null,
            status: "unauthenticated",
            errorMessage: getErrorMessage(error),
          });
        }
      },

      logout() {
        set({
          accessToken: null,
          expiresAt: null,
          user: null,
          status: "unauthenticated",
          errorMessage: null,
        });
      },

      clearError() {
        set({ errorMessage: null });
      },
    }),
    {
      name: "matching-auth",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        accessToken: state.accessToken,
        expiresAt: state.expiresAt,
        user: state.user,
      }),
      onRehydrateStorage: () => (state) => {
        if (state?.accessToken) {
          state.status = "authenticated";
        } else if (state) {
          state.status = "unauthenticated";
        }
      },
    },
  ),
);
