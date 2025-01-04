"use server";

import type { Url } from "@prisma/client";
import { prisma } from "@prisma";
import { getDashboardSession } from "@/features/dashboard/lib/getDashboardSession";

export async function getDomainUrls(domainName: string): Promise<Url[]> {
  // Sprawdź uprawnienia
  await getDashboardSession();

  const domain = await prisma.domain.findFirst({
    where: {
      name: domainName,
    },
  });

  // TOOD do zafixowania na nigdy (ktoś może podać złą domene z przeglądarki)
  return prisma.url.findMany({
    where: {
      domainId: domain!.id,
    },
  });
}
