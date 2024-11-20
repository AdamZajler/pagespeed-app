"use client";
import { Stack } from "@mui/material";
import { Circle } from "@/features/dashboard/set-up/components/progress-circles/Circle";
import { useState } from "react";

const circlesTitles = ["Wydajność", "Dostępność", "Dostępność", "SEO"];

export const ProgressCircles = () => {
  const [successCircles, setSuccessCircles] = useState<number>(0);

  const handleSuccess = () => {
    setSuccessCircles((prevState) => prevState + 1);
  };

  if (successCircles === circlesTitles.length) {
    console.log("KONIEC SUKO");
  }

  return (
    <Stack spacing={10} direction="row" flexWrap="wrap" alignItems="center" justifyContent="center">
      {circlesTitles.map((title, index) => (
        <Circle key={`${title}-${index}`} title="Wydajność" onSuccessAction={handleSuccess} />
      ))}
    </Stack>
  );
};
