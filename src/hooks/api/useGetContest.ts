import useSWR from "swr";
import { fetcher } from "lib/api/fetcher";
import { IContestCrawling } from "types";

function useGetContests() {
  const { data } = useSWR<IContestCrawling[]>("contest", fetcher);

  return { data };
}

export default useGetContests;
