"use server";

import { auth } from "@/auth";
import type { CoreVitals, PageSpeedResult } from "@/features/dashboard/types/PageSpeedResult";
import { prisma } from "@prisma";

export interface SavePageSpeedResultProps {
  data: PageSpeedResult;
  urlId: number;
}

interface State {
  success: boolean;
}

export async function savePageSpeedResult({
  data,
  urlId,
}: SavePageSpeedResultProps): Promise<State> {
  const session = await auth();
  if (!session || !session?.user?.id) {
    console.error("Missing session!");
    return { success: false };
  }

  const coreVitals: Partial<CoreVitals> = Object.fromEntries(
    Object.entries(data.loadingExperience.metrics)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .filter(([_, value]) => value.percentile !== undefined)
      .map(([key, value]) => [key, value.percentile]),
  ) as Partial<CoreVitals>;

  await prisma.history.create({
    data: {
      urlId,
      performance: data.lighthouseResult.categories.performance.score,
      accessibility: data.lighthouseResult.categories.accessibility.score,
      bestPractices: data.lighthouseResult.categories["best-practices"].score,
      seo: data.lighthouseResult.categories.seo.score,
      coreVitals,
      createdAt: data.lighthouseResult.fetchTime,
    },
  });

  return { success: true };
}
