import { z } from "zod";

export const customErrorMap: z.ZodErrorMap = (issue, ctx) => {
  if (issue.code === z.ZodIssueCode.invalid_type) {
    if (issue.received === "undefined") {
      return { message: "To pole jest wymagane!" };
    }
  }

  return { message: ctx.defaultError };
};
