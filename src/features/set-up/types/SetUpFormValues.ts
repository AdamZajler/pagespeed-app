import { z } from "zod";
import { customErrorMap } from "@/config/zod/errorMap";

z.setErrorMap(customErrorMap);

const domainRegex = /^(?!.*\/$)(?!.*:\/\/)[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;

export const SetUpValuesSchema = z.object({
  apiKey: z.string().min(16, { message: "Klucz API musi mieć co najmniej 16 znaków" }),
  urlAddress: z.string().regex(domainRegex, {
    message:
      "Adres URL musi być w formacie domena.pl lub domena.com z prawidłową końcówką domeny, bez protokołu i podstron.",
  }),
});

export type SetUpFormValues = z.infer<typeof SetUpValuesSchema>;
