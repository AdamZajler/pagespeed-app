import type { Domain } from "@prisma/client";
import { saveDomainToLocalStorage } from "@/features/dashboard/lib/saveDomainToLocalStorage";

interface Props {
  domains: Domain[];
}

export const saveInitDomainToLocalStorage = ({ domains }: Props) => {
  if (domains.length > 1 || typeof window === "undefined") {
    return;
  }

  saveDomainToLocalStorage({ domain: domains[0].name });
};
