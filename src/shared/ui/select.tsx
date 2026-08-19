import type { SelectHTMLAttributes } from "react";
import { cn } from "@/shared/lib/cn";

type SelectOption = {
  label: string;
  value: string;
};

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  options: SelectOption[];
  error?: string;
};

export function Select({ className, error, id, label, options, ...props }: SelectProps) {
  return (
    <label className="block" htmlFor={id}>
      <span className="text-sm font-semibold text-zinc-800">{label}</span>
      <select
        className={cn(
          "mt-2 h-11 w-full rounded-md border border-zinc-200 bg-white px-3 text-sm text-zinc-950 outline-none transition-colors focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100",
          error && "border-red-300 focus:border-red-500 focus:ring-red-100",
          className,
        )}
        id={id}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error ? <span className="mt-2 block text-xs font-medium text-red-600">{error}</span> : null}
    </label>
  );
}
