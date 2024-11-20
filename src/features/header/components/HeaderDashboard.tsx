import { HeaderBase } from "@/features/header/components/HeaderBase";
import { Stack, Typography } from "@mui/material";

export const HeaderDashboard = () => {
  return (
    <HeaderBase>
      <Stack flexDirection="row" justifyContent="space-between" alignItems="center">
        {/* ZROBIĆ TO SUSPENSEM */}
        <Typography variant="h5">Select</Typography>
        <Typography variant="h5">Account</Typography>
      </Stack>
    </HeaderBase>
  );
};
