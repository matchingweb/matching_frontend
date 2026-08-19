import type { InputHTMLAttributes } from "react";
import { cn } from "@/shared/lib/cn";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export function Input({ className, error, id, label, ...props }: InputProps) {
  return (
    <label className="block" htmlFor={id}>
      <span className="text-sm font-semibold text-zinc-800">{label}</span>
      <input
        className={cn(
          "mt-2 h-11 w-full rounded-md border border-zinc-200 bg-white px-3 text-sm text-zinc-950 outline-none transition-colors placeholder:text-zinc-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100",
          error && "border-red-300 focus:border-red-500 focus:ring-red-100",
          className,
        )}
        id={id}
        {...props}
      />
      {error ? <span className="mt-2 block text-xs font-medium text-red-600">{error}</span> : null}
    </label>
  );
}
