"use client";
import { Button, Stack } from "@mui/material";
import { useState } from "react";
import { Dialog } from "@/features/dashboard/components/page-results-container/add-new-collection-button/Dialog";

interface Props {
  successAction: () => Promise<void>;
}

export const AddNewCollectionButton = ({ successAction }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <Stack>
      <Button
        variant="contained"
        sx={{ width: "100%", maxWidth: 320, alignSelf: "center" }}
        onClick={() => setOpen(true)}
      >
        Dodaj nową grupę
      </Button>
      <Dialog open={open} closeAction={() => setOpen(false)} successAction={successAction} />
    </Stack>
  );
};
