"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { useAuthStore } from "@/features/auth/model/auth-store";

export function LoginForm() {
  const router = useRouter();
  const login = useAuthStore((state) => state.login);
  const status = useAuthStore((state) => state.status);
  const errorMessage = useAuthStore((state) => state.errorMessage);
  const clearError = useAuthStore((state) => state.clearError);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isLoading = status === "loading";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    clearError();

    try {
      await login({ email, password });
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
        autoComplete="current-password"
        id="password"
        label="비밀번호"
        minLength={8}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="8자 이상"
        required
        type="password"
        value={password}
      />
      {errorMessage ? (
        <p className="rounded-md bg-red-50 px-3 py-2 text-sm font-medium text-red-700">
          {errorMessage}
        </p>
      ) : null}
      <Button className="w-full" disabled={isLoading} type="submit">
        {isLoading ? "로그인 중..." : "로그인"}
      </Button>
    </form>
  );
}
