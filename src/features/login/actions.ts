"use server";

import {
  type LoginFormValues,
  LoginFormValuesSchema,
} from "@/features/login/types/LoginFormValues";
import type { FormState } from "@/types/FormState";

export async function onSubmitAction(formData: LoginFormValues): Promise<FormState> {
  const formParsed = LoginFormValuesSchema.safeParse(formData);

  if (!formParsed.success) {
    const fields: Record<string, string> = {};

    for (const key of Object.keys(formData) as (keyof LoginFormValues)[]) {
      fields[key] = formData[key]?.toString();
    }

    return {
      message: "Invalid form data",
      fields,
      issues: formParsed.error.issues,
    };
  }

  // TODO wywalić potem
  if (formParsed.data.password !== "technik2") {
    console.log("ERROR!");
    return { message: "ERROR SUKO!" };
  }

  return { message: "User registered" };
}
