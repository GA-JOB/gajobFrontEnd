import useSWR from "swr";
import { fetcher } from "lib/api/fetcher";
import { ICommunity } from "types";

function useGetMyCommunityPosts() {
  const { data } = useSWR<ICommunity[]>("/mypage/posts", fetcher);

  return { data };
}

export default useGetMyCommunityPosts;
