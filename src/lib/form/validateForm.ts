import type { FieldValues, UseFormReturn } from "react-hook-form";
import type { FormState } from "@/types/FormState";
import type { ZodIssue } from "zod";

type Props<T extends FieldValues> = Required<Pick<FormState, "message" | "success">> & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: UseFormReturn<T> | any | undefined;
  issues: ZodIssue[] | undefined;
};

export function validateForm<T extends FieldValues>({
  control,
  issues,
  message,
  success,
}: Props<T>): boolean {
  if (!success && !issues && !!message) {
    control.setError("root", {
      type: "manual",
      message: message,
    });

    return false;
  } else if (!success && issues && issues?.length) {
    issues.forEach((issue) => {
      control.setError(Array.isArray(issue.path) ? `${issue.path[0]}` : `${issue.path}`, {
        type: "manual",
        message: issue.message,
      });
    });

    return false;
  }

  return true;
}
