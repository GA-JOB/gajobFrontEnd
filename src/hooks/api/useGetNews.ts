import useSWR from "swr";
import { fetcher } from "lib/api/fetcher";
import { INewsCrawling } from "types";

function useGetNews() {
  const { data } = useSWR<INewsCrawling[]>("/issue/news", fetcher);

  return { data };
}

export default useGetNews;
