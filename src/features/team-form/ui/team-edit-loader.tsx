"use client";

import { useEffect, useState } from "react";
import { teamApi } from "@/entities/team/api/team-api";
import type { TeamResponse } from "@/entities/team/model/types";
import { useAuthStore } from "@/features/auth/model/auth-store";
import { TeamForm } from "@/features/team-form/ui/team-form";

type TeamEditLoaderProps = {
  teamId: number;
};

export function TeamEditLoader({ teamId }: TeamEditLoaderProps) {
  const accessToken = useAuthStore((state) => state.accessToken);
  const [team, setTeam] = useState<TeamResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!accessToken) {
      return;
    }

    const token = accessToken;

    async function loadTeam() {
      setIsLoading(true);
      setErrorMessage(null);

      try {
        setTeam(await teamApi.getById(teamId, token));
      } catch (error) {
        setErrorMessage(error instanceof Error ? error.message : "팀 정보를 불러오지 못했습니다.");
      } finally {
        setIsLoading(false);
      }
    }

    void loadTeam();
  }, [accessToken, teamId]);

  if (isLoading) {
    return <p className="text-sm text-zinc-600">팀 정보를 불러오는 중입니다.</p>;
  }

  if (errorMessage || !team) {
    return (
      <p className="rounded-md bg-red-50 px-3 py-2 text-sm font-medium text-red-700">
        {errorMessage ?? "팀을 찾을 수 없습니다."}
      </p>
    );
  }

  return <TeamForm mode="edit" team={team} />;
}
