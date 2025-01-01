import { Box, Container, Stack } from "@mui/material";
import Image from "next/image";
import logo from "../../../../public/logo.svg";
import type { PropsWithChildren } from "react";

export const HeaderBase = ({ children }: PropsWithChildren) => {
  return (
    <Box
      height={64}
      sx={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: "grey.100" }}
    >
      <Container maxWidth="xl" sx={{ height: "100%" }}>
        <Stack direction="row" spacing={6} height="100%" alignItems="center">
          <Image src={logo} alt="Website Logo" priority />
          <Box flexGrow={1}>{children}</Box>
        </Stack>
      </Container>
    </Box>
  );
};
