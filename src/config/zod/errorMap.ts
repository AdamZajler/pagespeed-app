import { z } from "zod";

export const customErrorMap: z.ZodErrorMap = (issue, ctx) => {
  const defaultError = { message: ctx.defaultError };

  switch (issue.code) {
    case z.ZodIssueCode.invalid_type:
      if (issue.received === "undefined") {
        return { message: "To pole jest wymagane!" };
      }

      return defaultError;
    default:
      return defaultError;
  }
};
