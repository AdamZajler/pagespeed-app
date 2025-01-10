"use client";

import { useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Stack } from "@mui/material";
import { Input } from "@/components/controllers/Input";
import LoadingButton from "@mui/lab/LoadingButton";
import { FormContainer } from "@/components/form-container/FormContainer";
import { onAddNewDomain } from "@/features/dashboard/actions";
import { GlobalContext } from "@/contexts/GlobalContext";

import {
  AddNewDomainFormSchema,
  type AddNewDomainFormValues,
} from "@/features/dashboard/components/domain-select/FormValues";
import { useRouter } from "next/navigation";

interface Props {
  successAction: () => void;
}

export const Form = ({ successAction }: Props) => {
  const { domain } = useContext(GlobalContext);
  const router = useRouter();

  const form = useForm<AddNewDomainFormValues>({
    mode: "onBlur",
    resolver: zodResolver(AddNewDomainFormSchema),
  });

  async function submitForm(data: AddNewDomainFormValues) {
    if (!domain?.id) {
      return;
    }

    const { success } = await onAddNewDomain(data.domainName);

    if (success) {
      successAction();
      router.refresh();
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
          name="domainName"
          label="Podaj domenę"
          placeholder="youtube.com"
        />
        <LoadingButton type="submit" variant="contained" loading={form.formState.isSubmitting}>
          Dodaj
        </LoadingButton>
      </Stack>
    </FormContainer>
  );
};
