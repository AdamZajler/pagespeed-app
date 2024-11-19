"use server";

import type { FormState } from "@/types/FormState";
import { parseZodErrorsToFormState } from "@/lib/form/parseZodErrorsToFormState";
import {
  type SetUpFormValues,
  SetUpValuesSchema,
} from "@/features/dashboard/set-up/types/SetUpFormValues";

export async function onSubmitAction(formData: SetUpFormValues): Promise<FormState> {
  const formParsed = SetUpValuesSchema.safeParse(formData);

  if (!formParsed.success) {
    return parseZodErrorsToFormState<SetUpFormValues>({
      formData,
      issues: formParsed.error.issues,
    });
  }

  return {
    success: true,
    message: "User registered",
  };
}
