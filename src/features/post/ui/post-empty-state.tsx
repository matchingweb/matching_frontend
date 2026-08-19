import Link from "next/link";
import { buttonVariants } from "@/shared/ui/button";

type PostEmptyStateProps = {
  title: string;
  description: string;
};

export function PostEmptyState({ description, title }: PostEmptyStateProps) {
  return (
    <section className="rounded-lg border border-dashed border-zinc-300 bg-white p-8 text-center">
      <h2 className="text-lg font-bold text-zinc-950">{title}</h2>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-zinc-600">{description}</p>
      <Link className={buttonVariants("secondary", "mt-6")} href="/signup">
        회원가입하고 글쓰기
      </Link>
    </section>
  );
}
