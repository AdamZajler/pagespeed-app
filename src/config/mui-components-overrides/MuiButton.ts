import { type Components } from "@mui/material/styles/components";
import type theme from "@/config/theme";

type Theme = typeof theme;

export const MuiButton: Components<Theme>["MuiButton"] = {
  defaultProps: {},

  styleOverrides: {
    root: {
      textTransform: "none",
    },
  },

  variants: [
    {
      props: { size: "medium" },
      style: ({ theme }) => ({
        padding: `${theme.spacing(3)} ${theme.spacing(6)}`,
      }),
    },
  ],
};
