import { useSWRConfig } from "swr";
import { post } from "lib/api/client";
import { IStudy } from "types";

type IOmitStudyPost =
  | "id"
  | "status"
  | "writer"
  | "view"
  | "createdDate"
  | "modifiedDate"
  | "comments"
  | "likes";

interface IStudyRequest extends Omit<IStudy, IOmitStudyPost> {}

export const useStudy = () => {
  // 데이터 최신화
  const { mutate } = useSWRConfig();

  const postStudy = async ({
    title,
    content,
    studyCategory,
    area,
    minPeople,
    maxPeople,
    startDate,
    endDate,
  }: IStudyRequest) => {
    const res = await post(`/study/posts`, {
      title,
      content,
      studyCategory,
      area,
      minPeople,
      maxPeople,
      startDate,
      endDate,
    }).then((data: any) => {
      if (data.title) {
        console.log(JSON.stringify(data));
      }
    });

    mutate(`/study/posts`);
    return { res };
  };
  return { postStudy };
  // const updateStudy
  // const deleteStudy
};
