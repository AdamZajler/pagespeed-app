import { type Components } from "@mui/material/styles/components";
import type theme from "@/config/theme";
import { LinkBehaviour } from "@/config/mui-components-overrides/LinkBehaviour";

type Theme = typeof theme;

export const MuiLink: Components<Theme>["MuiLink"] = {
  defaultProps: {
    component: LinkBehaviour,
  },

  styleOverrides: {
    root: {
      textDecoration: "none",
    },
  },

  variants: [],
};

declare module "@mui/material/Link" {
  interface LinkOwnProps {
    prefetch?: boolean;
  }
}
