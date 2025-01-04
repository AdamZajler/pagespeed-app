"use client";

import type { ReactNode } from "react";
import { createContext, useState } from "react";

type GlobalContextType = {
  domain: string;
  setDomain: (domain: string) => void;
};

export const GlobalContext = createContext<GlobalContextType>({
  domain: "",
  setDomain: () => {},
});

interface DomainProviderProps {
  children: ReactNode;
}

export function GlobalProvider({ children }: DomainProviderProps) {
  const [domain, setDomain] = useState<string>("");

  const value: GlobalContextType = {
    domain,
    setDomain,
  };

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
}
