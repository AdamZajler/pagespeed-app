import { HeaderBase } from "@/features/header/components/HeaderBase";
import { Stack } from "@mui/material";
import { DomainSelect } from "@/features/dashboard/components/domain-select/DomainSelect";

export const HeaderDashboard = () => {
  return (
    <HeaderBase>
      <Stack flexDirection="row" justifyContent="space-between" alignItems="center">
        <DomainSelect />
      </Stack>
    </HeaderBase>
  );
};
