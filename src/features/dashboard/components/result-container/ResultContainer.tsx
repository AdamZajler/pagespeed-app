import { Stack, Typography } from "@mui/material";
import type { History } from "@prisma/client";

interface Props {
  name: string;
  history: History;
}

export const ResultContainer = ({ name, history }: Props) => {
  return (
    <Stack spacing={15} padding={12}>
      <Typography variant="h3">{name === "/" ? "Strona główna" : name}</Typography>
      <Stack direction="row" spacing={15}>
        <h6>Wydajność: {history.performance}</h6>
        <h6>Dostępność: {history.accessibility}</h6>
        <h6>Best Practices: {history.bestPractices}</h6>
        <h6>SEO: {history.seo}</h6>
      </Stack>
    </Stack>
  );
};
