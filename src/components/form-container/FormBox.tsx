import type { PropsWithChildren } from "react";
import { Box, Stack, Typography } from "@mui/material";

interface Props {
  title: string;
}

export const FormBox = ({ children, title }: PropsWithChildren<Props>) => {
  return (
    <Stack
      spacing={10}
      sx={{
        width: "100%",
        maxWidth: 620,
        py: { xs: 12 },
        px: { xs: 0, sm: 12 },
        mx: "auto",
        borderWidth: { xs: 0, sm: "1px" },
        borderStyle: "solid",
        borderColor: "common.black",
        borderRadius: 2,
        alignSelf: { xs: "flex-start", sm: "initial" },
      }}
    >
      <Typography variant="h3" fontWeight="regular">
        {title}
      </Typography>
      <Box>{children}</Box>
    </Stack>
  );
};
