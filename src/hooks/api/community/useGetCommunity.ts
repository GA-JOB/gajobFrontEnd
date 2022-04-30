import useSWR from "swr";
import { fetcher } from "lib/api/fetcher";
import { ICommunity } from "types";

function useGetCommunity() {
  const { data, error } = useSWR<ICommunity[]>("/community/posts", fetcher, {
    refreshInterval: 500,
  });

  return { data, error };
}

export default useGetCommunity;
