"use server";

import { auth } from "@/auth";
import { getUserSettings } from "@/features/dashboard/lib/getUserSettings";
import type { PageSpeedResult } from "@/features/dashboard/types/PageSpeedResult";

export interface GetPageSpeedResultProps {
  url: string;
}

interface State {
  data?: PageSpeedResult;
  success: boolean;
}

export async function getPageSpeedResult({ url }: GetPageSpeedResultProps): Promise<State> {
  const session = await auth();
  if (!session || !session?.user?.id) {
    console.error("Missing session!");
    return { success: false };
  }

  const settings = await getUserSettings({ userId: session.user.id });
  if (!settings?.apiKey) {
    console.error("Missing settings!");
    return { success: false };
  }

  const URL = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}&category=ACCESSIBILITY&category=BEST_PRACTICES&category=PERFORMANCE&category=SEO&key=${settings.apiKey}`;

  const res = (await fetch(URL)
    .then((r) => r.json())
    .catch((e) => console.error(`Error for ${URL}`, e))) as PageSpeedResult;

  return {
    data: res,
    success: true,
  };
}
