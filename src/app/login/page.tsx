import type { Metadata } from "next";
import { AuthShell } from "@/features/auth/ui/auth-shell";
import { LoginForm } from "@/features/auth/ui/login-form";

export const metadata: Metadata = {
  title: "로그인",
};

export default function LoginPage() {
  return (
    <AuthShell
      description="작성, 팀 등록, 내 글 관리 기능을 사용하려면 로그인하세요."
      switchHref="/signup"
      switchLabel="회원가입"
      switchText="아직 계정이 없나요?"
      title="로그인"
    >
      <LoginForm />
    </AuthShell>
  );
}
