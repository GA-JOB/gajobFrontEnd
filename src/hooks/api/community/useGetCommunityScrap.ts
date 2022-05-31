import useSWR from "swr";
import { fetcher } from "lib/api/fetcher";

interface ICommunityScrap {
  id: number;
  title: string;
  postCategory: string;
  jobCategory: string;
  writer: string;
  scrapDate: string;
  postId: number;
}

function useGetCommunityScrap() {
  const { data } = useSWR<ICommunityScrap[]>("/community/scrap", fetcher);

  return { data };
}

export default useGetCommunityScrap;
