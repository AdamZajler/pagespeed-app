"use client";
import type { Url } from "@prisma/client";
import { useContext, useEffect, useState } from "react";
import { getDomainUrls } from "@/features/dashboard/actions";
import { GlobalContext } from "@/contexts/GlobalContext";

export const PageResultsContainer = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [urls, setUrls] = useState<Url[]>([]);
  const { domain } = useContext(GlobalContext);

  useEffect(() => {
    if (domain === "") return;

    const getData = async () => {
      const data = await getDomainUrls(domain);
      setUrls(data);
      setIsLoading(false);
    };

    void getData();
  }, [domain]);

  return (
    <div>
      <h1>Page Results</h1>
      {isLoading ? (
        <h6>Loading...</h6>
      ) : domain === "" ? (
        <h6>No results</h6>
      ) : (
        <ul>
          {urls.length === 0 && <li>No urls</li>}
          {urls.map((url) => (
            <li key={url.id}>{url.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
