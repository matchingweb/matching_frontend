import type { Metadata } from "next";
import { AuthShell } from "@/features/auth/ui/auth-shell";
import { SignupForm } from "@/features/auth/ui/signup-form";

export const metadata: Metadata = {
  title: "회원가입",
};

export default function SignupPage() {
  return (
    <AuthShell
      description="활동 지역과 포지션 정보를 입력하면 이후 매칭 품질을 높일 수 있습니다."
      switchHref="/login"
      switchLabel="로그인"
      switchText="이미 계정이 있나요?"
      title="회원가입"
    >
      <SignupForm />
    </AuthShell>
  );
}
