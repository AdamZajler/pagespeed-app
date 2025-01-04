"use client";
import { Dialog as MuiDialog, DialogTitle, Stack } from "@mui/material";
import { Form } from "@/features/dashboard/components/page-results-container/add-new-url-button/Form";

interface Props {
  open: boolean;
  closeAction: () => void;
  successAction: () => void;
}

export const Dialog = ({ open, closeAction, successAction }: Props) => {
  return (
    <MuiDialog
      onClose={closeAction}
      open={open}
      PaperProps={{
        sx: {
          py: { xs: 6, sm: 12 },
          px: { xs: 0, sm: 12 },
          mx: "auto",
          borderWidth: { xs: 0, sm: "1px" },
          borderStyle: "solid",
          borderColor: "common.black",
          alignSelf: { xs: "flex-start", sm: "initial" },
        },
      }}
    >
      <Stack spacing={6}>
        <DialogTitle variant="h3" fontWeight="regular" sx={{ p: 0 }}>
          Dodaj nowy adres witryny
        </DialogTitle>
        <Form
          successAction={() => {
            closeAction();
            successAction();
          }}
        />
      </Stack>
    </MuiDialog>
  );
};
