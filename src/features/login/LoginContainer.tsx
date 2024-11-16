"use client";

import { Button, Container, Stack, Typography } from "@mui/material";
import { Input } from "@/components/controllers/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  type LoginFormValues,
  LoginFormValuesSchema,
} from "@/features/login/types/LoginFormValues";
import { onSubmitAction } from "@/features/login/actions";
import { validateForm } from "@/lib/form/parseZodIssues";

export function LoginContainer() {
  const form = useForm<LoginFormValues>({
    mode: "onBlur",
    resolver: zodResolver(LoginFormValuesSchema),
  });

  async function submitForm(data: LoginFormValues) {
    const res = await onSubmitAction(data);

    const isFormOk = validateForm({
      control: form.control,
      issues: res.issues,
      message: res.message,
    });

    if (isFormOk) {
      console.log("UDAO SIE");
    }
  }

  return (
    <Container maxWidth="xl">
      <form onSubmit={form.handleSubmit(submitForm)}>
        <Stack spacing={6}>
          <Typography variant="h3" fontWeight="regular">
            Logowanie
          </Typography>
          <Input control={form.control} name="email" label="e-mail" />
          <Input control={form.control} name="password" label="hasło" />
          <Button type="submit" variant="contained" disabled={form.formState.isSubmitting}>
            Zaloguj się
          </Button>
          {/*TODO zrobić wrapper na form któy wyświetli ew. komunikaty globalne*/}
          {form.formState.errors.root ? <h6>{form.formState.errors.root.message}</h6> : null}
        </Stack>
      </form>
    </Container>
  );
}
