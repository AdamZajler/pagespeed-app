"use server";

import type { Collection, Domain, Url } from "@prisma/client";
import { prisma } from "@prisma";
import { getDashboardSession } from "@/features/dashboard/lib/getDashboardSession";
import { obtainPageSpeedResult } from "@/actions/pagespeed-api/obtainPageSpeedResult";
import { revalidateTag, unstable_cache as cache } from "next/cache";

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

export async function revalidateCollections() {
  revalidateTag("get-user-collections");
}

// Then define the cached function that accepts the userId as a parameter
export const getUserCollections = cache(
  async (userId: string): Promise<Collection[]> => {
    if (!userId) {
      return [];
    }

    return prisma.collection.findMany({
      where: {
        userId: userId,
      },
    });
  },
  ["get-user-collections"],
);

export async function onAddAddressToDomain(
  pathname: string,
  domain: Domain,
  defaultCollectionName: string,
): Promise<{ success: boolean }> {
  const defaultCollection = await prisma.collection.findFirst({
    where: {
      name: defaultCollectionName,
    },
  });
  if (!defaultCollection) {
    return { success: false };
  }

  const url = await prisma.url.create({
    data: {
      domainId: domain.id,
      name: pathname,
      collectionId: defaultCollection.id,
    },
  });

  await obtainPageSpeedResult({ url: `https://www.${domain.name}/${pathname}`, urlId: url.id });

  return { success: true };
}
