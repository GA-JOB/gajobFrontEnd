import useSWR from "swr";
import { fetcher } from "lib/api/fetcher";
import { IJobPostingCrawling } from "types";

function useGetJobPosting() {
  const { data } = useSWR<IJobPostingCrawling[]>("issue/job-posting", fetcher);

  return { data };
}

export default useGetJobPosting;
