"use client";

import { IconButton } from "@mui/material";
import type { ReactNode } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import type { LoginButtonProps } from "@/features/login/components/login-buttons/LoginButton";
import DiscFullIcon from "@mui/icons-material/DiscFull";
import GitHubIcon from "@mui/icons-material/GitHub";

export const LoginButtonBase = ({ provider }: LoginButtonProps) => {
  const getProviderIcon = (): ReactNode => {
    switch (provider) {
      case "discord":
        return <DiscFullIcon />;
      case "google":
        return <GoogleIcon />;
      case "github":
        return <GitHubIcon />;
      default:
        return <GoogleIcon />;
    }
  };

  return (
    <IconButton
      type="submit"
      title={`Login with ${provider}`}
      sx={(theme) => ({
        p: 0,
        width: 64,
        height: 64,
        border: `1px solid ${theme.palette.grey[200]}`,
        borderRadius: theme.spacing(1),

        "& .MuiTouchRipple-child": { borderRadius: "inherit" },
      })}
    >
      {getProviderIcon()}
    </IconButton>
  );
};
