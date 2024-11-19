import type { ZodIssue } from "zod";

export type FormState = {
  success: boolean;
  message: string;
  fields?: Record<string, string>;
  issues?: ZodIssue[];
};
