import { getHistoryById, getUrlById } from "@/features/dashboard/actions";
import { ResultContainer } from "@/features/dashboard/components/result-container/ResultContainer";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const id = parseInt((await params).id);
  const data = await getHistoryById(id);
  const urlData = await getUrlById(id);

  console.log("data: ", data);
  console.log("data2: ", urlData);
  return <ResultContainer name={urlData.name} history={data} />;
}
