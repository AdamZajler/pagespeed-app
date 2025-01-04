"use server";

import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { LOGIN_PAGE_URL } from "@/features/login/router";
import type { Session } from "next-auth";

export const getDashboardSession = async (): Promise<Session> => {
  const session = await auth();
  if (!session || !session?.user?.id) {
    redirect(LOGIN_PAGE_URL);
  }

  return session;
};
