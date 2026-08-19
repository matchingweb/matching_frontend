import type { Metadata } from "next";
import Link from "next/link";
import { MePanel } from "@/features/auth/ui/me-panel";

export const metadata: Metadata = {
  title: "내 정보",
};

export default function MePage() {
  return (
    <main className="min-h-screen bg-zinc-50 px-5 py-10 text-zinc-950">
      <div className="mx-auto w-full max-w-3xl">
        <Link className="mb-8 inline-flex items-center gap-2 text-lg font-bold" href="/">
          <span className="flex size-8 items-center justify-center rounded-md bg-emerald-600 text-white">
            M
          </span>
          <span>Matching</span>
        </Link>
        <MePanel />
      </div>
    </main>
  );
}
