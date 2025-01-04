"use client";
import { useContext, useEffect, useState } from "react";
import { Collapse, Skeleton, Stack, Typography } from "@mui/material";
import type { Collection, Url } from "@prisma/client";
import { getDomainUrlsByCollection } from "@/features/dashboard/actions";
import { GlobalContext } from "@/contexts/GlobalContext";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

export const ALL_COLLECTION_NAME = "all";

interface Props {
  collection: Collection;
}

export const ResultGroup = ({ collection }: Props) => {
  const [open, setOpen] = useState(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [urls, setUrls] = useState<Url[]>([]);

  const { domain } = useContext(GlobalContext);

  useEffect(() => {
    if (!domain) return;

    const getData = async () => {
      const urlsData = await getDomainUrlsByCollection(collection.id);
      setUrls(urlsData);
      setIsLoading(false);
    };

    void getData();

    // eslint-disable-next-line
  }, [domain]);

  console.log("urls", urls);

  return (
    <Stack spacing={6}>
      <Stack
        direction="row"
        justifyContent="space-between"
        onClick={() => setOpen((prev) => !prev)}
        sx={{ cursor: "pointer" }}
      >
        <Typography>{collection.name}</Typography>
        {open ? <ExpandLess /> : <ExpandMore />}
      </Stack>
      <Collapse in={open}>
        {isLoading ? (
          <Skeleton />
        ) : urls.length === 0 ? (
          "nie ma wyników lol"
        ) : (
          urls.map((url) => <div key={url.id}>{url.name}</div>)
        )}
      </Collapse>
    </Stack>
  );
};
