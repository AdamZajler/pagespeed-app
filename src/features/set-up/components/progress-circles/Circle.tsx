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
    const totalDuration = 6000;
    const updateInterval = 800;
    const steps = totalDuration / updateInterval; // Total number of steps
    const averageIncrement = 100 / steps; // Average increment per step

    const interval = setInterval(() => {
      setValue((prevState) => {
        if (prevState >= 100) {
          clearInterval(interval);
          setIsSuccess(true);
          return prevState;
        }

        // Random variation around the average increment
        const variation = getRandomNumberInRange(-1, 1);
        const increment = averageIncrement + variation;

        // Ensure we don't exceed 100
        return prevState + increment >= 100 ? 100 : prevState + increment;
      });
    }, updateInterval);

    // Cleanup interval on component unmount
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
          {value.toFixed()}
        </Typography>
      </Box>
      <Typography textAlign="center">{title}</Typography>
    </Stack>
  );
};
