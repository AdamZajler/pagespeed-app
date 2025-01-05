"use client";

import { Stack, Typography } from "@mui/material";
import type { History, Url, Domain } from "@prisma/client";
import { obtainPageSpeedResultAction } from "@/features/dashboard/actions";
import { useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import { useRouter } from "next/navigation";

interface Props {
  url: Url;
  history: History;
  domain: Domain;
}

export const ResultContainer = ({ url, history, domain }: Props) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Stack spacing={15} padding={12}>
      <Typography variant="h3">{url.name === "/" ? "Strona główna" : url.name}</Typography>
      <Stack direction="row" spacing={15}>
        <h6>Wydajność: {history.performance}</h6>
        <h6>Dostępność: {history.accessibility}</h6>
        <h6>Best Practices: {history.bestPractices}</h6>
        <h6>SEO: {history.seo}</h6>
      </Stack>
      <LoadingButton
        loading={isLoading}
        variant="contained"
        onClick={async () => {
          setIsLoading(true);
          await obtainPageSpeedResultAction(
            `https://www.${domain.name}${url.name === "/" ? "/" : `/${url.name}`}`,
            url.id,
          );
          router.refresh();
          setIsLoading(false);
        }}
        // onSubmit={async () => {
        //   "use server";
        //
        //   await obtainPageSpeedResult({
        //     url: `https://www.${url.name}${url.name === "/" ? "/" : `/${url.name}`}`,
        //     urlId: url.id,
        //   });
        // }}
      >
        Dodaj nowy pomiar
      </LoadingButton>
    </Stack>
  );
};
