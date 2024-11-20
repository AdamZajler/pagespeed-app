import type { PropsWithChildren } from "react";
import { Box, Stack, Typography } from "@mui/material";

interface Props {
  title: string;
}

export const FormBox = ({ children, title }: PropsWithChildren<Props>) => {
  return (
    <Stack
      spacing={6}
      sx={{
        width: "100%",
        maxWidth: 656,
        p: 12,
        mx: "auto",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "common.black",
      }}
    >
      <Typography variant="h3" fontWeight="regular">
        {title}
      </Typography>
      <Box>{children}</Box>
    </Stack>
  );
};
