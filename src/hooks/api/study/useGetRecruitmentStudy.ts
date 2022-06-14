import useSWR from "swr";
import { fetcher } from "lib/api/fetcher";
import { IStudyRecruitment } from "types/index";

function useGetRecruitmentStudy(id: number) {
  const { data } = useSWR<IStudyRecruitment[]>(
    `/study/recruitment/${id}`,
    fetcher
  );

  return { data };
}

export default useGetRecruitmentStudy;
