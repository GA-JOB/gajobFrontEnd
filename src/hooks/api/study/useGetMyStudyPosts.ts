import useSWR from "swr";
import { fetcher } from "lib/api/fetcher";
import { IStudy } from "types";

function useGetMyStudyPosts() {
  const { data } = useSWR<IStudy[]>("/mypage/study", fetcher);

  return { data };
}

export default useGetMyStudyPosts;
