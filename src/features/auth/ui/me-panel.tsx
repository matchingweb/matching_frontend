"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/features/auth/model/auth-store";

export function MePanel() {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);
  const status = useAuthStore((state) => state.status);
  const loadMe = useAuthStore((state) => state.loadMe);

  useEffect(() => {
    void loadMe();
  }, [loadMe]);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/login");
    }
  }, [router, status]);

  if (status === "loading" || status === "idle") {
    return <p className="text-sm text-zinc-600">내 정보를 불러오는 중입니다.</p>;
  }

  if (!user) {
    return <p className="text-sm text-zinc-600">로그인이 필요합니다.</p>;
  }

  return (
    <section className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
      <div>
        <p className="text-sm font-semibold text-emerald-700">내 프로필</p>
        <h1 className="mt-2 text-2xl font-bold">{user.nickname}</h1>
        <p className="mt-1 text-sm text-zinc-600">{user.email}</p>
      </div>
      <dl className="mt-6 grid gap-3 text-sm">
        <div className="rounded-md bg-zinc-50 p-3">
          <dt className="font-semibold text-zinc-500">지역</dt>
          <dd className="mt-1 text-zinc-950">{user.region}</dd>
        </div>
        <div className="rounded-md bg-zinc-50 p-3">
          <dt className="font-semibold text-zinc-500">포지션</dt>
          <dd className="mt-1 text-zinc-950">{user.position}</dd>
        </div>
        <div className="rounded-md bg-zinc-50 p-3">
          <dt className="font-semibold text-zinc-500">나이</dt>
          <dd className="mt-1 text-zinc-950">{user.age}</dd>
        </div>
        <div className="rounded-md bg-zinc-50 p-3">
          <dt className="font-semibold text-zinc-500">실력</dt>
          <dd className="mt-1 text-zinc-950">{user.skillLevel ?? "미입력"}</dd>
        </div>
      </dl>
    </section>
  );
}
