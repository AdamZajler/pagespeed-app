import "server-only";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { DASHBOARD_PAGE_URL } from "@/features/dashboard/router";

export async function redirectToDashboardIfLoggedIn() {
  const session = await auth();
  if (session) {
    redirect(DASHBOARD_PAGE_URL);
  }
}
