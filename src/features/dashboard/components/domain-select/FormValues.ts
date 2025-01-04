import { z } from "zod";

export const AddNewDomainFormSchema = z.object({
  domainName: z.string(),
});

export type AddNewDomainFormValues = z.infer<typeof AddNewDomainFormSchema>;
