import { z } from "zod";

export const RegisterFormValuesSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(8, "Password must be at least 8 characters"),
    rePassword: z.string(),
  })
  .refine((data) => data.password === data.rePassword, {
    message: "Password mismatch!",
    path: ["rePassword"],
  });

export type RegisterFormValues = z.infer<typeof RegisterFormValuesSchema>;
