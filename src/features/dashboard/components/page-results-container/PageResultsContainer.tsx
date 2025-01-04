"use client";
import type { Collection } from "@prisma/client";
import { useContext, useEffect, useState } from "react";
import { getUsersCollections } from "@/features/dashboard/actions";
import { GlobalContext } from "@/contexts/GlobalContext";
import { Box } from "@mui/material";
import { ResultGroup } from "@/features/dashboard/components/page-results-container/ResultGroup";

export const PageResultsContainer = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [collections, setCollections] = useState<Collection[]>([]);
  const { domain } = useContext(GlobalContext);

  useEffect(() => {
    if (domain === "") return;

    const getData = async () => {
      const collectionsData = await getUsersCollections();
      setCollections(collectionsData);
      setIsLoading(false);
    };

    void getData();
  }, [domain]);

  console.log(collections);

  return (
    <Box p={26}>
      {isLoading ? (
        <h6>Loading...</h6>
      ) : domain === "" ? (
        <h6>No results</h6>
      ) : (
        collections.map((collection) => <ResultGroup key={collection.id} collection={collection} />)
      )}
    </Box>
  );
};
