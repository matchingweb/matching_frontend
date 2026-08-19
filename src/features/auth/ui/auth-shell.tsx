import type { ReactNode } from "react";
import Link from "next/link";

type AuthShellProps = {
  title: string;
  description: string;
  switchLabel: string;
  switchHref: string;
  switchText: string;
  children: ReactNode;
};

export function AuthShell({
  children,
  description,
  switchHref,
  switchLabel,
  switchText,
  title,
}: AuthShellProps) {
  return (
    <main className="min-h-screen bg-zinc-50 px-5 py-10 text-zinc-950">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-md flex-col justify-center">
        <Link className="mb-8 inline-flex items-center gap-2 text-lg font-bold" href="/">
          <span className="flex size-8 items-center justify-center rounded-md bg-emerald-600 text-white">
            M
          </span>
          <span>Matching</span>
        </Link>
        <section className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
          <div className="mb-6">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="mt-2 text-sm leading-6 text-zinc-600">{description}</p>
          </div>
          {children}
        </section>
        <p className="mt-6 text-center text-sm text-zinc-600">
          {switchText}{" "}
          <Link className="font-semibold text-emerald-700 hover:text-emerald-800" href={switchHref}>
            {switchLabel}
          </Link>
        </p>
      </div>
    </main>
  );
}
