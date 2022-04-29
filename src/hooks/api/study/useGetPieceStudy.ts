import useSWR from "swr";
import { fetcher } from "lib/api/fetcher";
import { IStudy } from "types";

function useGetPieceStudy(id: number) {
  const { data } = useSWR<IStudy>(`/study/posts/${id}`, fetcher);

  return { data };
}

export default useGetPieceStudy;
