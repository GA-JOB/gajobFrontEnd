import useSWR from "swr";
import { fetcher } from "lib/api/fetcher";
import { IContestCrawling } from "types";

function useGetContests() {
  const { data } = useSWR<IContestCrawling[]>("/issue/exhibits", fetcher);

  return { data };
}

export default useGetContests;
