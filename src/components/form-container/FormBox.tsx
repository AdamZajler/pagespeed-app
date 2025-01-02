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
        py: { xs: 6, sm: 12 },
        px: { xs: 0, sm: 12 },
        mx: "auto",
        borderWidth: { xs: 0, sm: "1px" },
        borderStyle: "solid",
        borderColor: "common.black",
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
