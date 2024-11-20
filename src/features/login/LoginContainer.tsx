"use client";

import { Button, Container, Stack } from "@mui/material";
import { Input } from "@/components/controllers/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  type LoginFormValues,
  LoginFormValuesSchema,
} from "@/features/login/types/LoginFormValues";
import { onSubmitAction } from "@/features/login/actions";
import { validateForm } from "@/lib/form/validateForm";
import { FormContainer } from "@/components/form-container/FormContainer";
import { FormBox } from "@/components/form-container/FormBox";

export function LoginContainer() {
  const form = useForm<LoginFormValues>({
    mode: "onBlur",
    resolver: zodResolver(LoginFormValuesSchema),
  });

  async function submitForm(data: LoginFormValues) {
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
    <Container maxWidth="xl" sx={{ height: "100%", display: "flex", alignItems: "center" }}>
      <FormBox title="Logowanie">
        <FormContainer
          onSubmit={form.handleSubmit(submitForm)}
          globalError={form.formState.errors.root}
        >
          <Stack spacing={6}>
            <Input control={form.control} name="email" label="e-mail" />
            <Input control={form.control} name="password" label="hasło" />
            <Button type="submit" variant="contained" disabled={form.formState.isSubmitting}>
              Zaloguj się
            </Button>
          </Stack>
        </FormContainer>
      </FormBox>
    </Container>
  );
}
