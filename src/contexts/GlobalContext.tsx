"use client";

import type { ReactNode } from "react";
import { createContext, useState } from "react";
import type { Domain } from "@prisma/client";

type GlobalContextType = {
  domain: Domain | null;
  setDomain: (domain: Domain | null) => void;
};

export const GlobalContext = createContext<GlobalContextType>({
  domain: null,
  setDomain: () => {},
});

interface DomainProviderProps {
  children: ReactNode;
}

export function GlobalProvider({ children }: DomainProviderProps) {
  const [domain, setDomain] = useState<GlobalContextType["domain"]>(null);

  const value: GlobalContextType = {
    domain,
    setDomain,
  };

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
}
