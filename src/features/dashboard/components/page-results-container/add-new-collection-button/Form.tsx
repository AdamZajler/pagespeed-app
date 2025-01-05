"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Stack } from "@mui/material";
import { Input } from "@/components/controllers/Input";
import LoadingButton from "@mui/lab/LoadingButton";
import { FormContainer } from "@/components/form-container/FormContainer";
import { onAddNewCollection } from "@/features/dashboard/actions";
import {
  AddNewGroupFormSchema,
  type AddNewGroupFormValues,
} from "@/features/dashboard/components/page-results-container/add-new-collection-button/FormValues";

interface Props {
  successAction: () => void;
}

export const Form = ({ successAction }: Props) => {
  const form = useForm<AddNewGroupFormValues>({
    mode: "onBlur",
    resolver: zodResolver(AddNewGroupFormSchema),
  });

  async function submitForm(data: AddNewGroupFormValues) {
    const { success } = await onAddNewCollection(data.groupName);

    if (success) {
      successAction();
    }
  }

  return (
    <FormContainer
      onSubmit={form.handleSubmit(submitForm)}
      globalError={form.formState.errors.root}
    >
      <Stack spacing={6}>
        <Input
          control={form.control}
          name="groupName"
          label="Podaj nazwę grupy"
          placeholder={`np. "Strony blogowe" lub "Ulubione"`}
        />
        <LoadingButton type="submit" variant="contained" loading={form.formState.isSubmitting}>
          Dodaj grupę
        </LoadingButton>
      </Stack>
    </FormContainer>
  );
};
