import { type Components } from "@mui/material/styles/components";
import type theme from "@/config/theme";

type Theme = typeof theme;

export const MuiAlert: Components<Theme>["MuiAlert"] = {
  defaultProps: {},

  styleOverrides: {
    root: ({ ownerState }) => ({
      ...(ownerState.severity === "info" && {
        backgroundColor: "#60a5fa",
      }),
    }),
  },

  variants: [],
};
