import { z } from "zod";
import { customErrorMap } from "@/config/zod/errorMap";

z.setErrorMap(customErrorMap);

export const SetUpValuesSchema = z.object({
  // TODO dodać odpowiednią walidację dla klucza API oraz adresu URL
  apiKey: z.string().min(16),
  urlAddress: z.string(),
});

export type SetUpFormValues = z.infer<typeof SetUpValuesSchema>;
