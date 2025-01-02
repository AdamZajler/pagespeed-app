"use client";
import { Stack } from "@mui/material";
import { Circle } from "@/features/set-up/components/progress-circles/Circle";
import { useState } from "react";
import { redirect } from "next/navigation";
import { DASHBOARD_PAGE_URL } from "@/features/dashboard/router";

const circlesTitles = ["Wydajność", "Dostępność", "Dostępność", "SEO"];

export const ProgressCircles = () => {
  const [successCircles, setSuccessCircles] = useState<number>(0);

  const handleSuccess = () => {
    setSuccessCircles((prevState) => prevState + 1);
  };

  if (successCircles === circlesTitles.length) {
    redirect(DASHBOARD_PAGE_URL);
  }

  return (
    <Stack spacing={10} direction="row" flexWrap="wrap" alignItems="center" justifyContent="center">
      {circlesTitles.map((title, index) => (
        <Circle key={`${title}-${index}`} title="Wydajność" onSuccessAction={handleSuccess} />
      ))}
    </Stack>
  );
};
