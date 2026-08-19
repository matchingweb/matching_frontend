"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { teamApi } from "@/entities/team/api/team-api";
import { teamLevelOptions } from "@/entities/team/model/options";
import type { TeamLevel, TeamResponse } from "@/entities/team/model/types";
import { useAuthStore } from "@/features/auth/model/auth-store";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Select } from "@/shared/ui/select";

type TeamFormProps = {
  mode: "create" | "edit";
  team?: TeamResponse;
};

export function TeamForm({ mode, team }: TeamFormProps) {
  const router = useRouter();
  const accessToken = useAuthStore((state) => state.accessToken);
  const [name, setName] = useState(team?.name ?? "");
  const [logoUrl, setLogoUrl] = useState(team?.logoUrl ?? "");
  const [homeRegion, setHomeRegion] = useState(team?.homeRegion ?? "");
  const [homeStadium, setHomeStadium] = useState(team?.homeStadium ?? "");
  const [ageGroup, setAgeGroup] = useState(team?.ageGroup ?? "");
  const [level, setLevel] = useState<TeamLevel>(team?.level ?? "MIDDLE");
  const [fee, setFee] = useState(team?.fee ? String(team.fee) : "");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!accessToken) {
      router.replace("/login");
      return;
    }

    const payload = {
      name,
      logoUrl: logoUrl || undefined,
      homeRegion,
      homeStadium: homeStadium || undefined,
      ageGroup,
      level,
      fee: fee ? Number(fee) : undefined,
    };

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const savedTeam =
        mode === "create"
          ? await teamApi.create(payload, accessToken)
          : await teamApi.update(team?.id ?? 0, payload, accessToken);
      router.replace(`/teams/${savedTeam.id}/edit`);
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "팀 정보를 저장하지 못했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <Input
        id="name"
        label="팀명"
        maxLength={100}
        onChange={(event) => setName(event.target.value)}
        placeholder="대전FC"
        required
        value={name}
      />
      <Input
        id="logoUrl"
        label="로고 URL"
        maxLength={500}
        onChange={(event) => setLogoUrl(event.target.value)}
        placeholder="https://example.com/logo.png"
        type="url"
        value={logoUrl}
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <Input
          id="homeRegion"
          label="연고지"
          maxLength={100}
          onChange={(event) => setHomeRegion(event.target.value)}
          placeholder="대전광역시 유성구"
          required
          value={homeRegion}
        />
        <Input
          id="homeStadium"
          label="홈구장"
          maxLength={100}
          onChange={(event) => setHomeStadium(event.target.value)}
          placeholder="송강동 풋살장"
          value={homeStadium}
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Input
          id="ageGroup"
          label="팀 연령대"
          maxLength={50}
          onChange={(event) => setAgeGroup(event.target.value)}
          placeholder="20대 후반 ~ 30대"
          required
          value={ageGroup}
        />
        <Select
          id="level"
          label="팀 수준"
          onChange={(event) => setLevel(event.target.value as TeamLevel)}
          options={teamLevelOptions}
          value={level}
        />
      </div>
      <Input
        id="fee"
        label="회비"
        min={0}
        onChange={(event) => setFee(event.target.value)}
        placeholder="30000"
        type="number"
        value={fee}
      />
      {errorMessage ? (
        <p className="rounded-md bg-red-50 px-3 py-2 text-sm font-medium text-red-700">
          {errorMessage}
        </p>
      ) : null}
      <Button className="w-full sm:w-auto" disabled={isSubmitting} type="submit">
        {isSubmitting ? "저장 중..." : mode === "create" ? "팀 생성" : "팀 수정"}
      </Button>
    </form>
  );
}
