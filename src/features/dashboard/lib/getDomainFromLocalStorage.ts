export const getDomainFromLocalStorage = (): string | null => {
  if (typeof window === "undefined") {
    return null;
  }

  // eslint-disable-next-line no-undef
  return window!.localStorage.getItem("domain");
};
