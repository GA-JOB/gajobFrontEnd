import useSWR from "swr";
import { fetcher } from "lib/api/fetcher";
import { IStudy } from "types";

function useGetStudy() {
  const { data, error } = useSWR<IStudy[]>("/study/posts", fetcher);

  return { data, error };
}

export default useGetStudy;
