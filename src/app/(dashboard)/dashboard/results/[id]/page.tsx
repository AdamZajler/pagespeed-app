import { getDomainById, getHistoryByUrlId, getUrlById } from "@/features/dashboard/actions";
import { ResultContainer } from "@/features/dashboard/components/result-container/ResultContainer";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const id = parseInt((await params).id);
  const data = await getHistoryByUrlId(id);
  const urlData = await getUrlById(id);
  const domainData = await getDomainById(urlData.domainId);

  console.log("data: ", data);
  console.log("data2: ", urlData);
  return <ResultContainer url={urlData} history={data} domain={domainData} />;
}
