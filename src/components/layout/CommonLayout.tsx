import type { PropsWithChildren } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/config/theme";
import { CssBaseline } from "@mui/material";
import { Roboto } from "next/font/google";
import type { Metadata } from "next";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export const CommonLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="pl">
      <body className={roboto.variable}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};