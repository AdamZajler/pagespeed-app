import { auth } from "@/auth";

export default async function Page() {
  const session = await auth();
  console.log(session);
  return (
    <div>
      <h1>Page dashboard</h1>
      <h1>{session ? "ZALOGOWANY" : "NIE ZALOGOWANY"}</h1>
    </div>
  );
}
