import { ButtonBase, Link, Stack, Typography } from "@mui/material";
import { DASHBOARD_RESULTS_PAGE_URL } from "@/features/dashboard/router";
import type { Url } from "@prisma/client";

interface Props {
  url: Url;
}

export const ResultGroupElement = ({ url }: Props) => {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Typography>{url.name}</Typography>
      <Link href={`${DASHBOARD_RESULTS_PAGE_URL}/${url.id}`}>
        <ButtonBase
          component="div"
          sx={{ p: 2, border: "1px solid black", borderRadius: 2, color: "text.primary" }}
        >
          Zobacz szczegóły
        </ButtonBase>
      </Link>
    </Stack>
  );
};
