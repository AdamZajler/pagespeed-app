import { prisma } from "@prisma";

export const PageResultsContainer = async () => {
  const urls = await prisma.url.findMany({
    where: {
      domainId: 2,
    },
  });
  console.log("urls", urls);
  return (
    <div>
      <h1>Page Results</h1>
      <ul>
        {urls.map((url) => (
          <li key={url.id}>{url.name}</li>
        ))}
      </ul>
    </div>
  );
};
