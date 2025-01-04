"use client";

import { Container, Grow, Stack } from "@mui/material";
import { Input } from "@/components/controllers/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import LoadingButton from "@mui/lab/LoadingButton";

import { onSubmitAction } from "@/features/set-up/actions";
import { validateForm } from "@/lib/form/validateForm";
import { FormContainer } from "@/components/form-container/FormContainer";
import { type SetUpFormValues, SetUpValuesSchema } from "@/features/set-up/types/SetUpFormValues";
import { useState } from "react";
import { SetUpSuccessAnimationScreen } from "@/features/set-up/components/SetUpSuccessAnimationScreen";
import { TransitionGroup } from "react-transition-group";
import { FormBox } from "@/components/form-container/FormBox";

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
    <Container maxWidth="xl" sx={{ height: "100%", display: "flex", alignItems: "center" }}>
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
        <FormBox title="Dodaj pierwszą stronę">
          <FormContainer
            onSubmit={form.handleSubmit(submitForm)}
            globalError={form.formState.errors.root}
          >
            <Stack spacing={6}>
              <Input control={form.control} name="apiKey" label="Podaj klucz API" />
              <Input
                control={form.control}
                name="urlAddress"
                label="Podaj adres URL"
                placeholder="youtube.com"
              />
              <LoadingButton
                type="submit"
                variant="contained"
                loading={form.formState.isSubmitting}
              >
                Dalej
              </LoadingButton>
            </Stack>
          </FormContainer>
        </FormBox>
      ) : null}
    </Container>
  );
}