import { prisma } from "@prisma";
import { Select, MenuItem, Button } from "@mui/material";
import { getDashboardSession } from "@/features/dashboard/lib/getDashboardSession";

export const DomainSelect = async () => {
  const session = await getDashboardSession();

  const domains = await prisma.domain.findMany({
    where: {
      userId: session.user.id,
    },
  });

  return (
    <Select id="domain-select" value={domains[0].name}>
      {domains.map((domain, index) => (
        <MenuItem key={index} value={domain.name}>
          {domain.name.split(".")[0]}
        </MenuItem>
      ))}
      <Button>Dodaj domene</Button>
    </Select>
  );
};
