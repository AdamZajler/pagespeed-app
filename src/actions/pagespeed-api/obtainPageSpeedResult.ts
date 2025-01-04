"use server";

import {
  getPageSpeedResult,
  type GetPageSpeedResultProps,
} from "@/actions/pagespeed-api/getPageSpeedResult";
import {
  savePageSpeedResult,
  type SavePageSpeedResultProps,
} from "@/actions/pagespeed-api/savePageSpeedResult";

type Props = Pick<SavePageSpeedResultProps, "urlId"> & GetPageSpeedResultProps;

export async function obtainPageSpeedResult({ url, urlId }: Props): Promise<{ success: boolean }> {
  const { data } = await getPageSpeedResult({ url });
  if (!data) {
    return { success: false };
  }

  const { success } = await savePageSpeedResult({ data, urlId });

  return { success };
}
