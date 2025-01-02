import { Stack } from "@mui/material";
import { LoginButton } from "@/features/login/components/login-buttons/LoginButton";
import type { ReactNode } from "react";

export const LoginButtons = (): ReactNode => {
  return (
    <Stack gap={8} direction="row" flexWrap="wrap" alignSelf="center">
      <LoginButton provider="google" />
      <LoginButton provider="github" />
      <LoginButton provider="discord" />
    </Stack>
  );
};
