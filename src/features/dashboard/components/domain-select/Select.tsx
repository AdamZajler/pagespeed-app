"use client";
import { MenuItem, Select as MuiSelect, Skeleton } from "@mui/material";
import type { Domain } from "@prisma/client";
import { useContext, useEffect } from "react";
import { saveInitDomainToLocalStorage } from "@/features/dashboard/lib/saveInitDomainToLocalStorage";
import { saveDomainToLocalStorage } from "@/features/dashboard/lib/saveDomainToLocalStorage";
import { GlobalContext } from "@/contexts/GlobalContext";
import { getDomainFromLocalStorage } from "@/features/dashboard/lib/getDomainFromLocalStorage";
import { AddNewDomainButton } from "@/features/dashboard/components/domain-select/AddNewDomainButton";

interface Props {
  domains: Domain[];
}

export const Select = ({ domains }: Props) => {
  const { domain, setDomain } = useContext(GlobalContext);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    saveInitDomainToLocalStorage({ domains });
    const savedDomain = getDomainFromLocalStorage();

    if (domains.length === 1 || !savedDomain) {
      setDomain(domains[0]);
      saveDomainToLocalStorage({ domain: domains[0].name });
    } else if (savedDomain) {
      const find = domains.find((d) => d.name === savedDomain);
      if (!find) {
        return;
      }

      setDomain(find);
      saveDomainToLocalStorage({ domain: savedDomain });
    }
    // eslint-disable-next-line
  }, []);

  return domains.length === 0 || !domain?.name ? (
    <Skeleton width={100} height={56} variant="rounded" />
  ) : (
    <MuiSelect
      value={domain.name}
      onChange={(e) => {
        const find = domains.find((d) => d.name === e.target.value);
        if (!find) {
          return;
        }

        saveDomainToLocalStorage({ domain: find.name });
        setDomain(find);
      }}
      sx={{ minWidth: 100 }}
    >
      {domains.map((domain, index) => (
        <MenuItem key={index} value={domain.name}>
          {domain.name.split(".")[0]}
        </MenuItem>
      ))}
      <AddNewDomainButton successAction={() => {}} />
    </MuiSelect>
  );
};
