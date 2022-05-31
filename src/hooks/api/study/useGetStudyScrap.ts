import useSWR from "swr";
import { fetcher } from "lib/api/fetcher";

interface IStudyScrap {
  id: number;
  title: string;
  studyCategory: string;
  area: string;
  status: string;
  scrapDate: string;
  studyId: number;
}

function useGetStudyScrap() {
  const { data } = useSWR<IStudyScrap[]>("/study/scrap", fetcher);

  return { data };
}

export default useGetStudyScrap;
