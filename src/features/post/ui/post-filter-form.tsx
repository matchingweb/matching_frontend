import { Search } from "lucide-react";
import {
  boardTypeOptions,
  postStatusOptions,
  roleTypeOptions,
} from "@/entities/post/model/options";
import type { PostSearchParams } from "@/entities/post/model/types";
import { Button } from "@/shared/ui/button";

type PostFilterFormProps = {
  filters: PostSearchParams;
};

export function PostFilterForm({ filters }: PostFilterFormProps) {
  return (
    <form className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm" action="/posts">
      <div className="grid gap-3 md:grid-cols-[1fr_160px_160px_140px_auto] md:items-end">
        <label className="block">
          <span className="text-sm font-semibold text-zinc-800">지역</span>
          <input
            className="mt-2 h-10 w-full rounded-md border border-zinc-200 bg-white px-3 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
            defaultValue={filters.region}
            name="region"
            placeholder="대전, 서울, 부산"
          />
        </label>
        <FilterSelect
          defaultValue={filters.boardType}
          label="게시판"
          name="boardType"
          options={boardTypeOptions}
        />
        <FilterSelect
          defaultValue={filters.roleType}
          label="구분"
          name="roleType"
          options={roleTypeOptions}
        />
        <FilterSelect
          defaultValue={filters.status}
          label="상태"
          name="status"
          options={postStatusOptions}
        />
        <Button className="gap-2" type="submit">
          <Search size={17} />
          검색
        </Button>
      </div>
    </form>
  );
}

type FilterSelectProps = {
  label: string;
  name: string;
  options: Array<{ label: string; value: string }>;
  defaultValue?: string;
};

function FilterSelect({ defaultValue, label, name, options }: FilterSelectProps) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-zinc-800">{label}</span>
      <select
        className="mt-2 h-10 w-full rounded-md border border-zinc-200 bg-white px-3 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
        defaultValue={defaultValue ?? ""}
        name={name}
      >
        <option value="">전체</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
