"use client";

import { Button, Container, Stack, Typography } from "@mui/material";
import { Input } from "@/components/controllers/Input";
import { useForm } from "react-hook-form";

type FormValues = { email: string; password: string };

export function LoginContainer() {
  const { control } = useForm<FormValues>();

  return (
    <Container maxWidth="xl">
      <Stack spacing={6}>
        <Typography variant="h3" fontWeight="regular">
          Logowanie
        </Typography>
        <Input control={control} name="email" label="e-mail" />
        <Input control={control} name="password" label="hasło" />
        <Button variant="contained">Zaloguj się</Button>
      </Stack>
    </Container>
  );
}
