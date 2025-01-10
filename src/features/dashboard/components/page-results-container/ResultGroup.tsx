"use client";
import { useContext, useEffect, useState } from "react";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Skeleton,
  Stack,
} from "@mui/material";
import type { Collection, Url } from "@prisma/client";
import { getDomainUrlsByCollection } from "@/features/dashboard/actions";
import { GlobalContext } from "@/contexts/GlobalContext";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { ResultGroupElement } from "@/features/dashboard/components/page-results-container/result-group-element/ResultGroupElement";

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
  return (
    <Stack spacing={6}>
      <Stack
        direction="row"
        justifyContent="space-between"
        onClick={() => setOpen((prev) => !prev)}
        sx={{ cursor: "pointer" }}
      >
        <ListItemButton sx={{ p: 0 }}>
          <ListItemText
            primary={collection.name === "all" ? "Strony bez grupy" : collection.name}
          />
          <ListItemIcon>{open ? <ExpandLess /> : <ExpandMore />}</ListItemIcon>
        </ListItemButton>
      </Stack>
      <Collapse in={open}>
        {isLoading ? (
          <Skeleton />
        ) : urls.length === 0 ? (
          `Nie znaleziono żadnych wyników!`
        ) : (
          <List sx={{ p: 0, display: "flex", flexDirection: "column", gap: 4, mx: 3 }}>
            {urls.map((url) => (
              <ResultGroupElement key={url.id} url={url} />
            ))}
          </List>
        )}
      </Collapse>
    </Stack>
  );
};
