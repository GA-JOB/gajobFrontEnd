import useSWR from "swr";
import { fetcher } from "lib/api/fetcher";
import { ICommunity } from "types";

function useGetPieceCommunity(id: number | null) {
  const { data } = useSWR<ICommunity>(`community/posts/${id}`, fetcher);

  return { data };
}

export default useGetPieceCommunity;
