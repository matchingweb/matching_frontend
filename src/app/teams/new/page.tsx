import type { Metadata } from "next";
import { AppHeader } from "@/features/dashboard/ui/app-header";
import { RequireAuth } from "@/features/dashboard/ui/require-auth";
import { TeamForm } from "@/features/team-form/ui/team-form";

export const metadata: Metadata = {
  title: "팀 생성",
};

export default function TeamCreatePage() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-950">
      <AppHeader />
      <section className="mx-auto max-w-3xl px-5 py-10">
        <div className="mb-6">
          <p className="text-sm font-semibold text-emerald-700">회원 전용</p>
          <h1 className="mt-2 text-3xl font-bold">팀 생성</h1>
        </div>
        <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
          <RequireAuth>
            <TeamForm mode="create" />
          </RequireAuth>
        </div>
      </section>
    </main>
  );
}
