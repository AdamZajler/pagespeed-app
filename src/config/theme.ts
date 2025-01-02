"use client";
import { createTheme } from "@mui/material/styles";
import { MuiContainer } from "@/config/mui-components-overrides/MuiContainer";
import { MuiLink } from "@/config/mui-components-overrides/MuiLink";
import { MuiDivider } from "@/config/mui-components-overrides/MuiDivider";
import { MuiAlert } from "@/config/mui-components-overrides/MuiAlert";
import { muiPalette } from "@/config/mui-components-overrides/muiPalette";
import { muiTypography } from "@/config/mui-components-overrides/muiTypography";
import { MuiButton } from "@/config/mui-components-overrides/MuiButton";
import { MuiLoadingButton } from "@/config/mui-components-overrides/MuiLoadingButton";

const theme = createTheme({
  spacing: 4,
  typography: muiTypography,
  palette: muiPalette(),

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        },
      },
    },
    MuiContainer: MuiContainer,
    MuiLink: MuiLink,
    MuiDivider: MuiDivider,
    MuiAlert: MuiAlert,
    MuiButton: MuiButton,
    MuiLoadingButton: MuiLoadingButton,
  },
});

export default theme;
