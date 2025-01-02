import { HeaderBase } from "@/features/header/components/HeaderBase";
import { Stack, Typography } from "@mui/material";
import { DomainSelect } from "@/features/dashboard/components/DomainSelect";

export const HeaderDashboard = () => {
  return (
    <HeaderBase>
      <Stack flexDirection="row" justifyContent="space-between" alignItems="center">
        {/* ZROBIĆ TO SUSPENSEM */}
        <DomainSelect />
        <Typography variant="h5">Account</Typography>
      </Stack>
    </HeaderBase>
  );
};
