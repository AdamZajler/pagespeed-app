import { ButtonBase, Link, Stack, Typography } from "@mui/material";
import { DASHBOARD_RESULTS_PAGE_URL } from "@/features/dashboard/router";
import type { Url } from "@prisma/client";
import { Circles } from "@/features/dashboard/components/page-results-container/result-group-element/Circles";

interface Props {
  url: Url;
}

export const ResultGroupElement = ({ url }: Props) => {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Typography width={220}>{url.name}</Typography>
      <Circles urlId={url.id} />
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
