"use server";

import type { FormState } from "@/types/FormState";
import {
  type RegisterFormValues,
  RegisterFormValuesSchema,
} from "@/features/register/types/RegisterFormValues";
import { parseZodErrorsToFormState } from "@/lib/form/parseZodErrorsToFormState";

export async function onSubmitAction(formData: RegisterFormValues): Promise<FormState> {
  const formParsed = RegisterFormValuesSchema.safeParse(formData);

  if (!formParsed.success) {
    return parseZodErrorsToFormState<RegisterFormValues>({
      formData,
      issues: formParsed.error.issues,
    });
  }

  // TODO wywalić potem
  if (formParsed.data.password !== "12345678") {
    console.log("ERROR!");
    return {
      success: false,
      message: "ERROR SUKO!",
    };
  }

  return {
    success: true,
    message: "User registered",
  };
}
