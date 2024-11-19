"use client";

import { Button, Container, Stack, Typography } from "@mui/material";
import { Input } from "@/components/controllers/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  type RegisterFormValues,
  RegisterFormValuesSchema,
} from "@/features/register/types/RegisterFormValues";
import { onSubmitAction } from "@/features/register/actions";
import { validateForm } from "@/lib/form/validateForm";
import { FormContainer } from "@/components/form-container/FormContainer";

export function RegisterContainer() {
  const form = useForm<RegisterFormValues>({
    mode: "onBlur",
    resolver: zodResolver(RegisterFormValuesSchema),
  });

  async function submitForm(data: RegisterFormValues) {
    const { success, message, issues } = await onSubmitAction(data);

    const isFormOk = validateForm({
      control: form.control,
      success,
      issues,
      message,
    });

    if (isFormOk) {
      console.log("UDAO SIE");
    }
  }

  return (
    <Container maxWidth="xl">
      <FormContainer
        onSubmit={form.handleSubmit(submitForm)}
        globalError={form.formState.errors.root}
      >
        <Stack spacing={6}>
          <Typography variant="h3" fontWeight="regular">
            Rejestracja
          </Typography>
          <Input control={form.control} name="email" label="E-mail" />
          <Input control={form.control} name="password" label="Hasło" />
          <Input control={form.control} name="rePassword" label="Powtórz hasło" />
          <Button type="submit" variant="contained" disabled={form.formState.isSubmitting}>
            Zarejestruj się
          </Button>
        </Stack>
      </FormContainer>
    </Container>
  );
}
