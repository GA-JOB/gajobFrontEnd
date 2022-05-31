import useSWR from "swr";
import { fetcher } from "lib/api/fetcher";

interface IJobPostingScrap {
  id: number;
  title: string;
  scrapDate: string;
  wantedInfoUrl: string;
}

function useGetJobPostingScrap() {
  const { data } = useSWR<IJobPostingScrap[]>(
    "/issue/job-posting/scrap",
    fetcher
  );

  return { data };
}

export default useGetJobPostingScrap;
