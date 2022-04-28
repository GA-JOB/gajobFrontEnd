import useSWR from "swr";
import { fetcher } from "lib/api/fetcher";
import { ICommunity } from "types";

function useGetPieceCommunity(id: number) {
  const { data, error } = useSWR<ICommunity>(`community/posts/${id}`, fetcher);

  return { data, error };
}

export default useGetPieceCommunity;
