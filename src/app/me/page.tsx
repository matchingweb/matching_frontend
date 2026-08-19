import type { Metadata } from "next";
import { AppHeader } from "@/features/dashboard/ui/app-header";
import { MyPostsPanel } from "@/features/dashboard/ui/my-posts-panel";
import { RequireAuth } from "@/features/dashboard/ui/require-auth";
import { MePanel } from "@/features/auth/ui/me-panel";

export const metadata: Metadata = {
  title: "내 정보",
};

export default function MePage() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-950">
      <AppHeader />
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-5 py-10 lg:grid-cols-[360px_1fr]">
        <RequireAuth>
          <MePanel />
          <MyPostsPanel />
        </RequireAuth>
      </div>
    </main>
  );
}
