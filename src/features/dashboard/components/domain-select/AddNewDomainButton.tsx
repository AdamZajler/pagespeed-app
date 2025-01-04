"use client";
import { Button, Stack } from "@mui/material";
import { useState } from "react";
import { Dialog } from "@/features/dashboard/components/domain-select/Dialog";

interface Props {
  successAction: () => void;
}

export const AddNewDomainButton = ({ successAction }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <Stack>
      <Button onClick={() => setOpen(true)}>Dodaj domenę</Button>
      <Dialog open={open} closeAction={() => setOpen(false)} successAction={successAction} />
    </Stack>
  );
};
