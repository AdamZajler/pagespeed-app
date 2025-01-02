import { SetUpContainer } from "@/features/dashboard/set-up/SetUpContainer";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { LOGIN_PAGE_URL } from "@/features/login/router";
import { prisma } from "@prisma";
import { DASHBOARD_PAGE_URL } from "@/features/dashboard/router";

export default async function Page() {
  const session = await auth();
  if (!session) {
    redirect(LOGIN_PAGE_URL);
  }

  const settings = await prisma.config.findUnique({
    where: {
      userId: session.user?.id,
    },
  });
  if (settings?.apiKey) {
    redirect(DASHBOARD_PAGE_URL);
  }

  return <SetUpContainer />;
}
