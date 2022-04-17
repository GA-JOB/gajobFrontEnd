import useSWR from "swr";
import { fetcher } from "lib/api/fetcher";
import { ICommunity } from "types";

function useGetAllCommunity(id: number | null) {
  const { data } = useSWR<ICommunity[]>(
    !id ? "community/posts" : `community/posts/${id}`,
    fetcher
  );

  return { data };
}

export default useGetAllCommunity;
