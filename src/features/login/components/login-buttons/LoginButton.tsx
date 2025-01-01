import "server-only";
import type { OAuthProviderType } from "next-auth/providers/oauth-types";
import { signIn } from "@/auth";
import { LoginButtonBase } from "@/features/login/components/login-buttons/login-button/LoginButtonBase";

const allowedProviders: OAuthProviderType[] = ["discord", "google", "github"];

export interface LoginButtonProps {
  provider: OAuthProviderType;
}

export const LoginButton = ({ provider }: LoginButtonProps) => {
  const isProviderOutOfRange = allowedProviders.includes(provider);
  if (!isProviderOutOfRange) return null;

  const handleAction = async () => {
    "use server";
    await signIn(provider, { redirectTo: "/dashboard" });
  };

  return (
    <form action={handleAction}>
      <LoginButtonBase provider={provider} />
    </form>
  );
};
