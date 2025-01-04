import { z } from "zod";

export const AddNewAddressFormSchema = z.object({
  pathname: z.string(),
});

export type AddNewAddressFormValues = z.infer<typeof AddNewAddressFormSchema>;
