import useSWR from "swr";
import { fetcher } from "lib/api/fetcher";
import { IStudy } from "types";

function useGetStudyScrap() {
  const { data } = useSWR<IStudy[]>("/study/scrap", fetcher);

  return { data };
}

export default useGetStudyScrap;
