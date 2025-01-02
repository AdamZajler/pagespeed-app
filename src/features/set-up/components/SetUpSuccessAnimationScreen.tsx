import { Stack, Typography } from "@mui/material";
import { ProgressCircles } from "@/features/set-up/components/progress-circles/ProgressCircles";

export const SetUpSuccessAnimationScreen = () => {
  return (
    <Stack spacing={20}>
      <Stack spacing={9}>
        <Typography variant="h2" color="primary.600" textAlign="center">
          Postaw pierwsze kroki w zwiększaniu dostępności witryn internetowych
        </Typography>
        <Typography variant="h3" textAlign="center">
          Żeby korzystać z aplikacji oraz móc mierzyć i śledzić wydajność swoich witryn, dodaj swój
          pierwszy adres URL{" "}
        </Typography>
        <ProgressCircles />
      </Stack>
    </Stack>
  );
};
