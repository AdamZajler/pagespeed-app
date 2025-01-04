import { SetUpContainer } from "@/features/set-up/SetUpContainer";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { LOGIN_PAGE_URL } from "@/features/login/router";
import { DASHBOARD_PAGE_URL } from "@/features/dashboard/router";
import { getUserSettings } from "@/features/dashboard/lib/getUserSettings";

export default async function Page() {
  const session = await auth();
  if (!session || !session.user?.id) {
    redirect(LOGIN_PAGE_URL);
  }

  const settings = await getUserSettings({ userId: session.user.id });
  if (settings?.apiKey) {
    redirect(DASHBOARD_PAGE_URL);
  }

  return <SetUpContainer />;
}
