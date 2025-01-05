"use server";

import type { Collection, Domain, Url, History } from "@prisma/client";
import { prisma } from "@prisma";
import { getDashboardSession } from "@/features/dashboard/lib/getDashboardSession";
import { obtainPageSpeedResult } from "@/actions/pagespeed-api/obtainPageSpeedResult";
import { unstable_cache as cache } from "next/cache";

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

export async function onAddNewCollection(collectionName: string): Promise<{ success: boolean }> {
  const session = await getDashboardSession();
  await prisma.collection.create({
    data: {
      name: collectionName,
      userId: session!.user!.id,
    },
  });

  return { success: true };
}

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

export async function getUrlHistory(urlId: number): Promise<History | null> {
  return prisma.history.findFirst({
    where: {
      urlId,
    },
  });
}

export async function onAddNewDomain(domainName: string): Promise<{ success: boolean }> {
  const session = await getDashboardSession();

  await prisma.domain.create({
    data: {
      userId: session!.user!.id,
      name: domainName,
    },
  });

  return { success: true };
}
