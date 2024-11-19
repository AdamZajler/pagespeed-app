import { z } from "zod";
import { customErrorMap } from "@/config/zod/errorMap";

z.setErrorMap(customErrorMap);

export const LoginFormValuesSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type LoginFormValues = z.infer<typeof LoginFormValuesSchema>;
