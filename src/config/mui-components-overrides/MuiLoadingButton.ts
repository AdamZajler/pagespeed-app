import { type Components } from "@mui/material/styles/components";
import type theme from "@/config/theme";

type Theme = typeof theme;

export const MuiLoadingButton: Components<Theme>["MuiLoadingButton"] = {
  defaultProps: {},

  styleOverrides: {
    loadingIndicator: ({ theme }) => ({
      color: theme.palette.background.default,
    }),
  },

  variants: [],
};
