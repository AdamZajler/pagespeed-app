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
  if (!rest.success || !session || !session.user?.id) {
    return rest;
  }

  const formParsed = SetUpValuesSchema.safeParse(formData);

  if (!formParsed.success) {
    return parseZodErrorsToFormState<SetUpFormValues>({
      formData,
      issues: formParsed.error.issues,
    });
  }

  // Create a new config for the user
  await prisma.config.create({
    data: {
      userId: session.user.id,
      apiKey: formParsed.data.apiKey,
    },
  });

  // Create domain
  const domain = await prisma.domain.create({
    data: {
      userId: session.user.id,
      name: formParsed.data.urlAddress,
    },
  });

  // Create URL
  await prisma.url.create({
    data: {
      domainId: domain.id,
      name: "/",
    },
  });

  return {
    success: true,
    message: "User registered",
  };
}
