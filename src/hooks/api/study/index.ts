import { post } from "lib/api/client";
import { IStudy } from "types";

// 이렇게 타입 명 쓰는게 더 낫지 않나?
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
    return { res };
  };
  return { postStudy };
  // const updateStudy
  // const deleteStudy
};
