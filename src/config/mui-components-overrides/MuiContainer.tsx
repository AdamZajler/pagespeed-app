import { type Components } from "@mui/material/styles/components";
import type theme from "@/config/theme";

type Theme = typeof theme;

export const MuiContainer: Components<Theme>["MuiContainer"] = {
  defaultProps: {},

  styleOverrides: {
    root: ({ theme }) => ({
      [theme.breakpoints.up("xs")]: {
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
      },
      [theme.breakpoints.up("sm")]: {
        paddingLeft: theme.spacing(12),
        paddingRight: theme.spacing(12),
      },
    }),
  },

  variants: [],
};
