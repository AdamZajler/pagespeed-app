"use client";
import { Button, FormControl, InputLabel, MenuItem, Select as MuiSelect } from "@mui/material";
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
  console.log("domain,", domain);
  return (
    <FormControl>
      <InputLabel id="label">Domain</InputLabel>
      <MuiSelect
        id="domain-select"
        value={domain}
        onChange={(e) => {
          saveDomainToLocalStorage({ domain: e.target.value });
          setDomain(e.target.value);
        }}
        labelId="label"
        label="Domain"
        sx={{ minWidth: 100 }}
        disabled={domains.length === 0 || domain === ""}
      >
        {domains.map((domain, index) => (
          <MenuItem key={index} value={domain.name}>
            {domain.name.split(".")[0]}
          </MenuItem>
        ))}
        <Button>Dodaj domene</Button>
      </MuiSelect>
    </FormControl>
  );
};
