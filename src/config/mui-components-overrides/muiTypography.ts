import type { TypographyOptions } from "@mui/material/styles/createTypography";

export const muiTypography: TypographyOptions = {
  fontFamily: "var(--font-roboto)",
  h1: {
    fontSize: "2.75rem",
    lineHeight: "44px",
    fontWeight: 600,
  },
  h2: {
    fontSize: "2.25rem",
    lineHeight: "42px",
    fontWeight: 600,
  },
  h3: {
    fontSize: "1.5rem",
    lineHeight: "32px",
    fontWeight: 600,
  },
  h4: {
    fontSize: "1.25rem",
    lineHeight: "28px",
    fontWeight: 600,
  },
  h5: {
    fontSize: "1rem",
    lineHeight: "26px",
    fontWeight: 600,
  },
  h6: {
    fontSize: "1rem",
    lineHeight: "24px",
    fontWeight: 600,
  },
  body1: {
    fontSize: "1rem",
    lineHeight: "24px",
  },
  body2: {
    fontSize: "0.875rem",
    lineHeight: "22px",
  },
  caption: {
    fontSize: "0.75rem",
    lineHeight: "20px",
    fontWeight: 400,
  },
};

declare module "@mui/material/styles" {
  interface TypeText {
    primary: string;
    secondary: string;
    disabled: string;
    grey: string;
  }
}
