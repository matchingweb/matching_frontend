import Link from "next/link";
import { siteConfig } from "@/shared/config/site";

const links = [
  { label: "서비스 소개", href: "/about" },
  { label: "매칭 가이드", href: "/guide" },
  { label: "개인정보처리방침", href: "/privacy" },
  { label: "이용약관", href: "/terms" },
  { label: "문의", href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-8 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="font-bold">{siteConfig.name}</p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-600">{siteConfig.description}</p>
        </div>
        <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium text-zinc-600">
          {links.map((link) => (
            <Link key={link.href} className="hover:text-zinc-950" href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
