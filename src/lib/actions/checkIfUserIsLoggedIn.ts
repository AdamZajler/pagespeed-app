import { auth } from "@/auth";
import type { FormState } from "@/types/FormState";
import type { Session } from "next-auth";

interface StateSuccess extends FormState {
  success: true;
  session: Session;
}

interface StateFailed extends FormState {
  success: false;
  session: undefined;
}

type State = StateSuccess | StateFailed;

export async function checkIfUserIsLoggedIn(): Promise<State> {
  const session = (await auth()) || undefined;

  return !session
    ? {
        success: false,
        message: "User not logged in!",
        session: undefined,
      }
    : {
        success: true,
        message: "User logged in!",
        session,
      };
}
