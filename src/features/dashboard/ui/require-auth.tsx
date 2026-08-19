"use client";

import type { ReactNode } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/features/auth/model/auth-store";

type RequireAuthProps = {
  children: ReactNode;
};

export function RequireAuth({ children }: RequireAuthProps) {
  const router = useRouter();
  const status = useAuthStore((state) => state.status);
  const accessToken = useAuthStore((state) => state.accessToken);
  const loadMe = useAuthStore((state) => state.loadMe);

  useEffect(() => {
    if (accessToken) {
      void loadMe();
    }
  }, [accessToken, loadMe]);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/login");
    }
  }, [router, status]);

  if (status === "idle" || status === "loading") {
    return <p className="text-sm text-zinc-600">인증 상태를 확인하는 중입니다.</p>;
  }

  if (!accessToken) {
    return <p className="text-sm text-zinc-600">로그인이 필요합니다.</p>;
  }

  return children;
}
