"use client";

import { Container, Link, Stack, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
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
import { FormBox } from "@/components/form-container/FormBox";
import { LOGIN_PAGE_URL } from "@/features/login/router";

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
    <Container maxWidth="xl" sx={{ height: "100%", display: "flex", alignItems: "center" }}>
      <FormBox title="Rejestracja">
        <FormContainer
          onSubmit={form.handleSubmit(submitForm)}
          globalError={form.formState.errors.root}
        >
          <Stack spacing={6}>
            <Input control={form.control} name="email" label="E-mail" />
            <Input control={form.control} name="password" label="Hasło" />
            <Input control={form.control} name="rePassword" label="Powtórz hasło" />
            <LoadingButton type="submit" variant="contained" loading={form.formState.isSubmitting}>
              Zarejestruj się
            </LoadingButton>
            <Typography
              sx={{
                alignSelf: "center",
              }}
            >
              Masz już konto?{" "}
              <Link
                href={LOGIN_PAGE_URL}
                sx={{ textDecoration: "underline", color: "text.primary" }}
              >
                Zaloguj się!
              </Link>
            </Typography>
          </Stack>
        </FormContainer>
      </FormBox>
    </Container>
  );
}
