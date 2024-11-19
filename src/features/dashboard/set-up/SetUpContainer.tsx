"use client";

import { Button, Container, Grow, Stack, Typography } from "@mui/material";
import { Input } from "@/components/controllers/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { onSubmitAction } from "@/features/dashboard/set-up/actions";
import { validateForm } from "@/lib/form/validateForm";
import { FormContainer } from "@/components/form-container/FormContainer";
import {
  type SetUpFormValues,
  SetUpValuesSchema,
} from "@/features/dashboard/set-up/types/SetUpFormValues";
import { useState } from "react";
import { SetUpSuccessAnimationScreen } from "@/features/dashboard/set-up/components/SetUpSuccessAnimationScreen";
import { TransitionGroup } from "react-transition-group";

export function SetUpContainer() {
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<SetUpFormValues>({
    mode: "onBlur",
    resolver: zodResolver(SetUpValuesSchema),
  });

  async function submitForm(data: SetUpFormValues) {
    const { success, message, issues } = await onSubmitAction(data);

    const isFormOk = validateForm({
      control: form.control,
      success,
      issues,
      message,
    });

    if (isFormOk) {
      setIsSuccess(true);
    }
  }

  return (
    <Container maxWidth="xl">
      <TransitionGroup>
        {isSuccess ? (
          <Grow>
            <div>
              <SetUpSuccessAnimationScreen />
            </div>
          </Grow>
        ) : null}
      </TransitionGroup>
      {!isSuccess ? (
        <FormContainer
          onSubmit={form.handleSubmit(submitForm)}
          globalError={form.formState.errors.root}
        >
          <Stack spacing={6}>
            <Typography variant="h3" fontWeight="regular">
              Dodaj pierwszą stronę
            </Typography>
            <Input control={form.control} name="apiKey" label="Podaj klucz API" />
            <Input control={form.control} name="urlAddress" label="Podaj adres URL" />
            <Button type="submit" variant="contained" disabled={form.formState.isSubmitting}>
              Dalej
            </Button>
          </Stack>
        </FormContainer>
      ) : null}
    </Container>
  );
}
