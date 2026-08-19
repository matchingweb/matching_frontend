"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogOut, Plus } from "lucide-react";
import { useAuthStore } from "@/features/auth/model/auth-store";
import { buttonVariants } from "@/shared/ui/button";

type AppHeaderProps = {
  title?: string;
};

export function AppHeader({ title = "Matching" }: AppHeaderProps) {
  const router = useRouter();
  const logout = useAuthStore((state) => state.logout);

  function handleLogout() {
    logout();
    router.replace("/");
  }

  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link className="flex items-center gap-2 font-bold" href="/">
          <span className="flex size-8 items-center justify-center rounded-md bg-emerald-600 text-white">
            M
          </span>
          <span>{title}</span>
        </Link>
        <div className="flex items-center gap-2">
          <Link className={buttonVariants("primary", "gap-2")} href="/posts/new">
            <Plus size={17} />
            글쓰기
          </Link>
          <button className={buttonVariants("ghost", "gap-2 px-3")} onClick={handleLogout} type="button">
            <LogOut size={17} />
            로그아웃
          </button>
        </div>
      </div>
    </header>
  );
}
