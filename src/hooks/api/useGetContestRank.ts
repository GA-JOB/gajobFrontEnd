import useSWR from "swr";
import { fetcher } from "lib/api/fetcher";
import { IContestRankingCrawling } from "types";

function useGetContestRank() {
  const { data } = useSWR<IContestRankingCrawling[]>(
    "/issue/exhibit-rankings",
    fetcher
  );

  return { data };
}

export default useGetContestRank;
