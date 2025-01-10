import { auth } from "@/auth";
import { signOut } from "@/auth";
import { LOGIN_PAGE_URL } from "@/features/login/router";

export default async function Page() {
  const session = await auth();
  return (
    <div>
      <h1>Page dashboard</h1>
      <h1>{session ? "ZALOGOWANY" : "NIE ZALOGOWANY"}</h1>
      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: LOGIN_PAGE_URL });
        }}
      >
        <button type="submit">wyloguj</button>
      </form>
    </div>
  );
}
