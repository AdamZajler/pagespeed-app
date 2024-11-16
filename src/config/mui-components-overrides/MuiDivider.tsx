import { type Components } from "@mui/material/styles/components";
import type theme from "@/config/theme";

type Theme = typeof theme;

export const MuiDivider: Components<Theme>["MuiDivider"] = {
  defaultProps: {},

  styleOverrides: {
    wrapper: ({ theme }) => ({
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    }),
  },

  variants: [],
};
