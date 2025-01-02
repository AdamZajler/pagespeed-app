"use client";
import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getRandomNumberInRange } from "@/lib/getRandomNumberInRange";

interface Props {
  title: string;
  onSuccessAction: () => void;
}

export const Circle = ({ title, onSuccessAction }: Props) => {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prevState) => {
        if (prevState >= 100) {
          clearInterval(interval);
          setIsSuccess(true);
          return prevState;
        }

        const step = getRandomNumberInRange(10, 20);

        return prevState + step >= 100 ? 100 : prevState + step;
      });
    }, 800);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isSuccess) {
      onSuccessAction();
    }

    // eslint-disable-next-line
  }, [isSuccess]);

  const color =
    value === 0
      ? "grey.100"
      : value > 0 && value <= 25
        ? "red"
        : value > 25 && value <= 50
          ? "orange"
          : value > 50 && value <= 75
            ? "yellow"
            : "green";

  return (
    <Stack spacing={6}>
      <Box position="relative" width="fit-content">
        <CircularProgress variant="determinate" value={value} size={100} sx={{ color }} />
        <Typography
          variant="h4"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          {value}
        </Typography>
      </Box>
      <Typography textAlign="center">{title}</Typography>
    </Stack>
  );
};
