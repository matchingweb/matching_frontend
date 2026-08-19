import Link from "next/link";
import { buttonVariants } from "@/shared/ui/button";

const navItems = [
  { label: "게시글", href: "/posts" },
  { label: "가이드", href: "/guide" },
  { label: "서비스 소개", href: "/about" },
  { label: "문의", href: "/contact" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link className="flex items-center gap-2 font-bold" href="/">
          <span className="flex size-8 items-center justify-center rounded-md bg-emerald-600 text-white">
            M
          </span>
          <span>Matching</span>
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-medium text-zinc-600 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} className="hover:text-zinc-950" href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link className={buttonVariants("ghost", "h-10 px-3")} href="/login">
            로그인
          </Link>
          <Link className={buttonVariants("primary")} href="/signup">
            시작하기
          </Link>
        </div>
      </div>
    </header>
  );
}
