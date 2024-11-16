import { type Components } from "@mui/material/styles/components";
import type theme from "@/config/theme";

type Theme = typeof theme;

export const MuiCssBaseline: Components<Theme>["MuiCssBaseline"] = {
  defaultProps: {},

  styleOverrides: {
    body: {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
    },
  },

  variants: [],
};
