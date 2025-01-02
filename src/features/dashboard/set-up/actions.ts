"use server";

import type { FormState } from "@/types/FormState";
import { parseZodErrorsToFormState } from "@/lib/form/parseZodErrorsToFormState";
import {
  type SetUpFormValues,
  SetUpValuesSchema,
} from "@/features/dashboard/set-up/types/SetUpFormValues";

import { prisma } from "@prisma";
import { checkIfUserIsLoggedIn } from "@/lib/actions/checkIfUserIsLoggedIn";

export async function onSubmitAction(formData: SetUpFormValues): Promise<FormState> {
  const { session, ...rest } = await checkIfUserIsLoggedIn();
  if (!rest.success || !session) {
    return rest;
  }

  const formParsed = SetUpValuesSchema.safeParse(formData);

  if (!formParsed.success) {
    return parseZodErrorsToFormState<SetUpFormValues>({
      formData,
      issues: formParsed.error.issues,
    });
  }

  await prisma.config.create({
    data: {
      // id: "1",
      userId: session.userId, // 16 znaków - ID istniejącego użytkownika
      apiKey: "1234567890123456", // max 64 znaki
    },
  });

  return {
    success: true,
    message: "User registered",
  };
}
