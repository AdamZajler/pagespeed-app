"use server";

import type { Collection, Url } from "@prisma/client";
import { prisma } from "@prisma";
import { getDashboardSession } from "@/features/dashboard/lib/getDashboardSession";

export async function getDomainUrlsByCollection(collectionId: number): Promise<Url[]> {
  // Sprawdź uprawnienia
  await getDashboardSession();

  // const domain = await prisma.domain.findFirst({
  //   where: {
  //     collectionId,
  //   },
  // });

  // TOOD do zafixowania na nigdy (ktoś może podać złą domene z przeglądarki)
  return prisma.url.findMany({
    where: {
      collectionId,
    },
  });
}

export async function getUsersCollections(): Promise<Collection[]> {
  const { user } = await getDashboardSession();

  return prisma.collection.findMany({
    where: {
      userId: user!.id,
    },
  });
}
