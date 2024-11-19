"use server";

import {
  type LoginFormValues,
  LoginFormValuesSchema,
} from "@/features/login/types/LoginFormValues";
import type { FormState } from "@/types/FormState";
import { parseZodErrorsToFormState } from "@/lib/form/parseZodErrorsToFormState";

export async function onSubmitAction(formData: LoginFormValues): Promise<FormState> {
  const formParsed = LoginFormValuesSchema.safeParse(formData);

  if (!formParsed.success) {
    return parseZodErrorsToFormState<LoginFormValues>({
      formData,
      issues: formParsed.error.issues,
    });
  }

  // TODO wywalić potem
  if (formParsed.data.password !== "technik2") {
    console.log("ERROR!");
    return {
      success: false,
      message: "ERROR SUKO!",
    };
  }

  return {
    success: true,
    message: "Success",
  };
}
