"use client";

import { useEffect } from "react";
import { Button } from "@/shared/ui/button";

type ErrorPageProps = {
  error: Error & { digest?: string };
  retry: () => void;
};

export default function ErrorPage({ error, retry }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-zinc-50 px-5 py-20 text-zinc-950">
      <section className="mx-auto max-w-xl rounded-lg border border-zinc-200 bg-white p-6 text-center shadow-sm">
        <p className="text-sm font-semibold text-red-600">Error</p>
        <h1 className="mt-3 text-2xl font-bold">화면을 불러오지 못했습니다</h1>
        <p className="mt-3 text-sm leading-6 text-zinc-600">
          일시적인 오류일 수 있습니다. 다시 시도해도 문제가 반복되면 문의 페이지를 통해 알려주세요.
        </p>
        <Button className="mt-6" onClick={retry}>
          다시 시도
        </Button>
      </section>
    </main>
  );
}
