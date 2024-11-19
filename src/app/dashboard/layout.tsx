import type { PropsWithChildren } from "react";
import { Box, Stack } from "@mui/material";
import { SideBarMenu } from "@/features/dashboard/components/SideBarMenu";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <Stack direction="row" flexWrap="wrap">
      <SideBarMenu />
      <Box flexGrow={1}>{children}</Box>
    </Stack>
  );
}
