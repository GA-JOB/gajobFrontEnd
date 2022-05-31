import useSWR from "swr";
import { fetcher } from "lib/api/fetcher";
import { IJobPostingCrawling } from "types";

function useGetJobPostingScrap() {
  const { data } = useSWR<IJobPostingCrawling[]>(
    "/issue/job-posting/scrap",
    fetcher
  );

  return { data };
}

export default useGetJobPostingScrap;
