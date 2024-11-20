import type { PropsWithChildren } from "react";
import { Box, Stack } from "@mui/material";
import { SideBarMenu } from "@/features/dashboard/components/SideBarMenu";
import { CommonLayout } from "@/components/layout/CommonLayout";
import { HeaderDashboard } from "@/features/header/components/HeaderDashboard";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <CommonLayout>
      <HeaderDashboard />
      <Stack direction="row" flexWrap="wrap">
        <SideBarMenu />
        <Box flexGrow={1}>{children}</Box>
      </Stack>
    </CommonLayout>
  );
}
