import type { PropsWithChildren } from "react";
import { Box, Stack } from "@mui/material";
import { SideBarMenu } from "@/features/dashboard/components/SideBarMenu";
import { CommonLayout } from "@/components/layout/CommonLayout";
import { HeaderDashboard } from "@/features/header/components/HeaderDashboard";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { LOGIN_PAGE_URL } from "@/features/login/router";
import { GlobalProvider } from "@/contexts/GlobalContext";

export default async function RootLayout({ children }: PropsWithChildren) {
  const session = await auth();
  if (!session) {
    redirect(LOGIN_PAGE_URL);
  }

  return (
    <CommonLayout>
      <GlobalProvider>
        <HeaderDashboard />
        <Stack direction="row" flexWrap="wrap" height="100%">
          <SideBarMenu />
          <Box flexGrow={1}>{children}</Box>
        </Stack>
      </GlobalProvider>
    </CommonLayout>
  );
}
