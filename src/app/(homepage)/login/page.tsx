import { LoginContainer } from "@/features/login/LoginContainer";
import { redirectToDashboardIfLoggedIn } from "@/lib/redirectToDashboardIfLoggedIn";

export default async function Page() {
  await redirectToDashboardIfLoggedIn();

  return <LoginContainer />;
}
