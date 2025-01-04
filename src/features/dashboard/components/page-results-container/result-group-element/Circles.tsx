import { Box, Skeleton, Stack, Tooltip } from "@mui/material";
import { getUrlHistory } from "@/features/dashboard/actions";
import { useEffect, useState } from "react";
import type { History } from "@prisma/client";

interface Props {
  urlId: number;
}

const Circle = ({ value, title }: { value: number; title: string }) => {
  const valueParsed = Math.round(value * 100);
  const color =
    valueParsed === 0
      ? "grey.100"
      : valueParsed > 0 && valueParsed <= 25
        ? "red"
        : valueParsed > 25 && valueParsed <= 50
          ? "orange"
          : valueParsed > 50 && valueParsed <= 75
            ? "yellow"
            : "green";

  return (
    <Tooltip title={title}>
      <Box
        width={32}
        height={32}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
          bgcolor: color,
          fontSize: "body2.fontSize",
        }}
      >
        {valueParsed}
      </Box>
    </Tooltip>
  );
};

export const Circles = ({ urlId }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [history, setHistory] = useState<null | History>(null);

  useEffect(() => {
    const getData = async () => {
      const data = await getUrlHistory(urlId);
      setHistory(data);
      setIsLoading(false);
    };

    void getData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("history", history);
  return (
    <Stack direction="row" spacing={3}>
      {isLoading ? (
        Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={`circle_${i}`} variant="circular" width={32} height={32} />
        ))
      ) : history ? (
        <>
          <Circle title="Accessibility" value={history.accessibility} />
          <Circle title="Best Practices" value={history.bestPractices} />
          <Circle title="Performance" value={history.performance} />
          <Circle title="SEO" value={history.seo} />
        </>
      ) : (
        <h6>Brak wyników</h6>
      )}
    </Stack>
  );
};
