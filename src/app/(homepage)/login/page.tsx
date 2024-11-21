import { LoginContainer } from "@/features/login/LoginContainer";
import { signIn } from "@/auth";

export default function Page() {
  return (
    <>
      <form
        action={async () => {
          "use server";
          await signIn("discord", { redirectTo: "/dashboard" });
        }}
      >
        <button type="submit">Sign in</button>
      </form>
      <LoginContainer />
    </>
  );
}
