import type { ReactNode } from "react";
import { SiteFooter } from "@/shared/ui/site-footer";
import { SiteHeader } from "@/shared/ui/site-header";

type ContentPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function ContentPage({ children, description, eyebrow, title }: ContentPageProps) {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-950">
      <SiteHeader />
      <article className="mx-auto max-w-3xl px-5 py-12">
        <p className="text-sm font-semibold text-emerald-700">{eyebrow}</p>
        <h1 className="mt-3 text-4xl font-bold leading-tight">{title}</h1>
        <p className="mt-4 text-base leading-7 text-zinc-600">{description}</p>
        <div className="mt-10 space-y-8 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
          {children}
        </div>
      </article>
      <SiteFooter />
    </main>
  );
}

type ContentSectionProps = {
  title: string;
  children: ReactNode;
};

export function ContentSection({ children, title }: ContentSectionProps) {
  return (
    <section>
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-7 text-zinc-700">{children}</div>
    </section>
  );
}
