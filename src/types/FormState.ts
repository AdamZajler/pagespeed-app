import type { ZodIssue } from "zod";

export type FormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: ZodIssue[];
};
