import { type PaletteOptions } from "@mui/material/styles/createPalette";
import { colors } from "@/config/colors";
import { createTheme } from "@mui/material/styles";

export const muiPalette = (): PaletteOptions => {
  const defaultTheme = createTheme();

  return {
    mode: "light",
    text: {
      primary: colors.black,
      secondary: colors.primary[500],
      disabled: colors.grey[500],
      grey: colors.grey[400],
    },
    primary: {
      main: colors.primary[500],

      "100": colors.primary[100],
      "200": colors.primary[200],
      "300": colors.primary[300],
      "400": colors.primary[400],
      "500": colors.primary[500],
      "600": colors.primary[600],
      "700": colors.primary[700],
      "800": colors.primary[700],
      "900": colors.primary[700],
    },

    secondary: {
      main: colors.secondary[500],

      "100": colors.secondary[100],
      "200": colors.secondary[200],
      "300": colors.secondary[300],
      "400": colors.secondary[400],
      "500": colors.secondary[500],
      "600": colors.secondary[600],
      "700": colors.secondary[700],
      "800": colors.secondary[700],
      "900": colors.secondary[700],
    },

    third: defaultTheme.palette.augmentColor({
      color: {
        main: colors.primary[500],
        light: colors.secondary[500],
        dark: colors.grey[600],

        "100": colors.secondary[100],
        "200": colors.secondary[200],
        "300": colors.secondary[300],
        "400": colors.secondary[400],
        "500": colors.secondary[400],
        "600": colors.secondary[400],
        "700": colors.secondary[400],
        "800": colors.secondary[400],
        "900": colors.secondary[400],
      },
    }),

    default: {
      main: colors.grey[200],
      light: colors.grey[500],
      dark: colors.grey[100],
    },

    error: {
      main: colors.red[500],
    },
    success: {
      main: colors.success[500],
    },
    warning: {
      main: colors.warning[500],
    },

    background: {
      default: colors.white,
      paper: colors.white,
      charcoal: colors.grey[600],
      secondary: colors.grey[700],
    },

    action: {
      disabled: colors.grey[500],
      disabledBackground: colors.grey[500],
    },

    grey: {
      "100": colors.grey[100],
      "200": colors.grey[200],
      "300": colors.grey[300],
      "400": colors.grey[400],
      "500": colors.grey[500],
      "600": colors.grey[600],
      "700": colors.grey[700],
      "800": colors.grey[800],
      "900": colors.grey[900],
    },
  };
};

declare module "@mui/material/styles" {
  interface Palette {
    third: Palette["primary"] & {
      "100": string;
      "200": string;
      "300": string;
      "400": string;
    };
    default: Palette["primary"] & {
      "100": string;
      "200": string;
      "300": string;
      "400": string;
    };
  }

  interface PaletteOptions {
    third: PaletteOptions["primary"];
    default: PaletteOptions["primary"];
  }

  interface TypeBackground {
    secondary: string;
    charcoal: string;
    aquaDeep: string;
  }
}
