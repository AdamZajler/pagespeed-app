"use client";

import { useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Stack } from "@mui/material";
import { Input } from "@/components/controllers/Input";
import LoadingButton from "@mui/lab/LoadingButton";
import { FormContainer } from "@/components/form-container/FormContainer";
import { onAddAddressToDomain } from "@/features/dashboard/actions";
import { GlobalContext } from "@/contexts/GlobalContext";
import {
  AddNewAddressFormSchema,
  type AddNewAddressFormValues,
} from "@/features/dashboard/components/page-results-container/add-new-url-button/FormValues";
import { ALL_COLLECTION_NAME } from "@/features/dashboard/components/page-results-container/ResultGroup";

interface Props {
  successAction: () => void;
}

export const Form = ({ successAction }: Props) => {
  const { domain } = useContext(GlobalContext);

  const form = useForm<AddNewAddressFormValues>({
    mode: "onBlur",
    resolver: zodResolver(AddNewAddressFormSchema),
  });

  async function submitForm(data: AddNewAddressFormValues) {
    console.log("XDD: ", data, domain);
    // TODO bez sensu
    if (!domain?.id) {
      return;
    }

    const { success } = await onAddAddressToDomain(data.pathname, domain, ALL_COLLECTION_NAME);

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
          name="pathname"
          label="Podaj adres strony"
          placeholder={`np. "blog" lub "aktualnosci/post"`}
        />
        <LoadingButton type="submit" variant="contained" loading={form.formState.isSubmitting}>
          Dodaj adres
        </LoadingButton>
      </Stack>
    </FormContainer>
  );
};
