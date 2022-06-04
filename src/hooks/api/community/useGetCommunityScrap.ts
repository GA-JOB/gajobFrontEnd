import useSWR from "swr";
import { fetcher } from "lib/api/fetcher";
import { ICommunity } from "types";

function useGetCommunityScrap() {
  const { data } = useSWR<ICommunity[]>("/community/scrap", fetcher);

  return { data };
}

export default useGetCommunityScrap;
