import useSWR from "swr";
import { fetcher } from "lib/api/fetcher";
import { IStudyRecruitment } from "types/index";

export const useGetMyApplyStudy = () => {
  const { data } = useSWR<IStudyRecruitment[]>(`mypage/supply-study`, fetcher);

  return { data };
};
