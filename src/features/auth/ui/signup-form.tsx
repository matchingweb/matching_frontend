"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Gender, Position } from "@/entities/user/model/types";
import { genderOptions, positionOptions } from "@/entities/user/model/options";
import { useAuthStore } from "@/features/auth/model/auth-store";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Select } from "@/shared/ui/select";

export function SignupForm() {
  const router = useRouter();
  const signup = useAuthStore((state) => state.signup);
  const status = useAuthStore((state) => state.status);
  const errorMessage = useAuthStore((state) => state.errorMessage);
  const clearError = useAuthStore((state) => state.clearError);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState<Gender>("MALE");
  const [region, setRegion] = useState("");
  const [position, setPosition] = useState<Position>("CM");
  const [skillLevel, setSkillLevel] = useState("");
  const [career, setCareer] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  const isLoading = status === "loading";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    clearError();

    try {
      await signup({
        email,
        password,
        nickname,
        age: Number(age),
        gender,
        region,
        position,
        skillLevel: skillLevel || undefined,
        career: career || undefined,
        videoUrl: videoUrl || undefined,
      });
      router.replace("/me");
    } catch {
      // Error state is stored in auth-store.
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <Input
        autoComplete="email"
        id="email"
        label="이메일"
        onChange={(event) => setEmail(event.target.value)}
        placeholder="player@example.com"
        required
        type="email"
        value={email}
      />
      <Input
        autoComplete="new-password"
        id="password"
        label="비밀번호"
        maxLength={72}
        minLength={8}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="8자 이상"
        required
        type="password"
        value={password}
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <Input
          id="nickname"
          label="닉네임"
          maxLength={30}
          onChange={(event) => setNickname(event.target.value)}
          placeholder="대전미드필더"
          required
          value={nickname}
        />
        <Input
          id="age"
          label="나이"
          max={100}
          min={1}
          onChange={(event) => setAge(event.target.value)}
          required
          type="number"
          value={age}
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Select
          id="gender"
          label="성별"
          onChange={(event) => setGender(event.target.value as Gender)}
          options={genderOptions}
          value={gender}
        />
        <Select
          id="position"
          label="포지션"
          onChange={(event) => setPosition(event.target.value as Position)}
          options={positionOptions}
          value={position}
        />
      </div>
      <Input
        id="region"
        label="주 활동 지역"
        maxLength={100}
        onChange={(event) => setRegion(event.target.value)}
        placeholder="대전광역시 유성구"
        required
        value={region}
      />
      <Input
        id="skillLevel"
        label="실력 정보"
        maxLength={100}
        onChange={(event) => setSkillLevel(event.target.value)}
        placeholder="중"
        value={skillLevel}
      />
      <Input
        id="career"
        label="경력"
        maxLength={500}
        onChange={(event) => setCareer(event.target.value)}
        placeholder="풋살 5년"
        value={career}
      />
      <Input
        id="videoUrl"
        label="경기 영상 URL"
        maxLength={500}
        onChange={(event) => setVideoUrl(event.target.value)}
        placeholder="https://youtube.com/example"
        type="url"
        value={videoUrl}
      />
      {errorMessage ? (
        <p className="rounded-md bg-red-50 px-3 py-2 text-sm font-medium text-red-700">
          {errorMessage}
        </p>
      ) : null}
      <Button className="w-full" disabled={isLoading} type="submit">
        {isLoading ? "가입 중..." : "회원가입"}
      </Button>
    </form>
  );
}
