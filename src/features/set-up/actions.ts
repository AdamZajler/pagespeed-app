"use server";

import type { FormState } from "@/types/FormState";
import { parseZodErrorsToFormState } from "@/lib/form/parseZodErrorsToFormState";
import { type SetUpFormValues, SetUpValuesSchema } from "@/features/set-up/types/SetUpFormValues";

import { prisma } from "@prisma";
import { checkIfUserIsLoggedIn } from "@/lib/actions/checkIfUserIsLoggedIn";
import { obtainPageSpeedResult } from "@/actions/pagespeed-api/obtainPageSpeedResult";
import { ALL_COLLECTION_NAME } from "@/features/dashboard/components/page-results-container/ResultGroup";

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

  // Crete default collection
  const collection = await prisma.collection.create({
    data: {
      name: ALL_COLLECTION_NAME,
      userId: session.user.id,
    },
  });

  // Create URL
  const url = await prisma.url.create({
    data: {
      domainId: domain.id,
      name: "/",
      collectionId: collection.id,
    },
  });

  await obtainPageSpeedResult({ url: `https://www.${domain.name}`, urlId: url.id });

  return {
    success: true,
    message: "User registered",
  };
}
