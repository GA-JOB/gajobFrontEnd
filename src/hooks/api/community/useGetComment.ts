import useSWR from "swr";
import { fetcher } from "lib/api/fetcher";
import { ICommunity } from "types";

function useGetComment(id: number) {
  const { data } = useSWR<ICommunity[]>(`/community/comments/${id}`, fetcher);

  return { data };
}

export default useGetComment;
