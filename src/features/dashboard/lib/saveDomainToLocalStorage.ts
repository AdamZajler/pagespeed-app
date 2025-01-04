interface Props {
  domain: string;
}

export const saveDomainToLocalStorage = ({ domain }: Props) => {
  if (typeof window === "undefined") {
    return;
  }

  // eslint-disable-next-line no-undef
  window!.localStorage.setItem("domain", domain);
};
