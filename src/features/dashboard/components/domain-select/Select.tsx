"use client";
import { Button, MenuItem, Select as MuiSelect, Skeleton } from "@mui/material";
import type { Domain } from "@prisma/client";
import { useContext, useEffect } from "react";
import { saveInitDomainToLocalStorage } from "@/features/dashboard/lib/saveInitDomainToLocalStorage";
import { saveDomainToLocalStorage } from "@/features/dashboard/lib/saveDomainToLocalStorage";
import { GlobalContext } from "@/contexts/GlobalContext";
import { getDomainFromLocalStorage } from "@/features/dashboard/lib/getDomainFromLocalStorage";

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
      setDomain(domains[0].name);
      saveDomainToLocalStorage({ domain: domains[0].name });
    } else if (savedDomain) {
      setDomain(savedDomain);
      saveDomainToLocalStorage({ domain: savedDomain });
    }
    // eslint-disable-next-line
  }, []);

  return domains.length === 0 || domain === "" ? (
    <Skeleton width={100} height={56} variant="rounded" />
  ) : (
    <MuiSelect
      value={domain}
      onChange={(e) => {
        saveDomainToLocalStorage({ domain: e.target.value });
        setDomain(e.target.value);
      }}
      sx={{ minWidth: 100 }}
    >
      {domains.map((domain, index) => (
        <MenuItem key={index} value={domain.name}>
          {domain.name.split(".")[0]}
        </MenuItem>
      ))}
      <Button>Dodaj domene</Button>
    </MuiSelect>
  );
};
