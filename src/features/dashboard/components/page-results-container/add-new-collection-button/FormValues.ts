import { z } from "zod";

export const AddNewGroupFormSchema = z.object({
  groupName: z.string(),
});

export type AddNewGroupFormValues = z.infer<typeof AddNewGroupFormSchema>;
