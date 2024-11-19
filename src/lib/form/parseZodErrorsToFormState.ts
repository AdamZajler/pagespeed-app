import type { ZodIssue } from "zod";
import type { FormState } from "@/types/FormState";

interface Props<T extends object> {
  formData: T;
  issues: ZodIssue[];
}

export const parseZodErrorsToFormState = <T extends object>({
  formData,
  issues,
}: Props<T>): FormState => {
  const fields: Record<string, string> = {};

  for (const key of Object.keys(formData) as (keyof T)[]) {
    // TODO idk. jak naprawić tego generyka, nie jestem w tym zbyt dobry xD
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    fields[key] = formData[key]?.toString();
  }

  return {
    success: false,
    message: "Invalid form data",
    fields,
    issues,
  };
};
