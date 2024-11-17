import { z } from "zod";

export const LoginFormValuesSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type LoginFormValues = z.infer<typeof LoginFormValuesSchema>;
