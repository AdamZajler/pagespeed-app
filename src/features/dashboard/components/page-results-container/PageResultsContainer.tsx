"use client";
import type { Collection } from "@prisma/client";
import { useContext, useEffect, useState } from "react";
import { getUserCollections } from "@/features/dashboard/actions";
import { GlobalContext } from "@/contexts/GlobalContext";
import { Box, Stack } from "@mui/material";
import { ResultGroup } from "@/features/dashboard/components/page-results-container/ResultGroup";
import { AddNewUrlButton } from "@/features/dashboard/components/page-results-container/add-new-url-button/AddNewUrlButton";
import { getDashboardSession } from "@/features/dashboard/lib/getDashboardSession";
import { AddNewCollectionButton } from "@/features/dashboard/components/page-results-container/add-new-collection-button/AddNewCollectionButton";

export const PageResultsContainer = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [collections, setCollections] = useState<Collection[]>([]);
  const { domain } = useContext(GlobalContext);

  const refreshData = async () => {
    setIsLoading(true);

    const session = await getDashboardSession();
    const collectionsData = await getUserCollections(session.user!.id as string);

    setCollections(collectionsData);
    setIsLoading(false);
  };

  useEffect(() => {
    if (!domain) return;
    void refreshData();
  }, [domain]);

  const handleRefresh = async () => {
    await refreshData();
  };

  return (
    <Box p={26}>
      <Stack spacing={20} maxWidth={770}>
        {isLoading ? (
          <h6>Loading...</h6>
        ) : !domain ? (
          <h6>No results</h6>
        ) : (
          collections.map((collection) => (
            <ResultGroup key={collection.id} collection={collection} />
          ))
        )}
        <Stack spacing={6} direction="row" justifyContent="center">
          <AddNewUrlButton successAction={handleRefresh} />
          <AddNewCollectionButton successAction={handleRefresh} />
        </Stack>
      </Stack>
    </Box>
  );
};
