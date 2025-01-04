import { prisma } from "@prisma";
import type { Domain } from "@prisma/client";

import { getDashboardSession } from "@/features/dashboard/lib/getDashboardSession";
import { Select } from "@/features/dashboard/components/domain-select/Select";

export const DomainSelect = async () => {
  const session = await getDashboardSession();

  const domains: Domain[] = await prisma.domain.findMany({
    where: {
      userId: session.user!.id,
    },
  });

  return <Select domains={domains} />;
};
