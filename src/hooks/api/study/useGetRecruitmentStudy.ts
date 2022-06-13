import useSWR from "swr";
import { fetcher } from "lib/api/fetcher";

interface IRecruitmentProps {
  id: number;
  content: string;
  writer: string;
  studentId: string;
  applicationDate: string;
  result: string;
}
function useGetRecruitmentStudy(id: number) {
  const { data } = useSWR<IRecruitmentProps[]>(
    `/study/recruitment/${id}`,
    fetcher
  );

  return { data };
}

export default useGetRecruitmentStudy;
