import { useNavigate } from "react-router-dom";
import { useSWRConfig } from "swr";
import { post, put, del } from "lib/api/client";
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

interface IPostStudy extends Omit<IStudy, IOmitStudyPost> {}
interface IEditStudy extends Omit<IStudy, IOmitStudyPost> {
  id: number;
  status: string;
}
interface IPostComment {
  id: number | null;
  comment: string;
}
interface IEditComment {
  postId: number | null;
  commentId: number | null;
  comment: string;
}
export const useStudy = () => {
  const navigate = useNavigate();
  // 데이터 최신화
  const { mutate } = useSWRConfig();

  //스터디 등록
  const postStudy = async ({
    title,
    content,
    studyCategory,
    area,
    minPeople,
    maxPeople,
    startDate,
    endDate,
    openTalkUrl,
  }: IPostStudy) => {
    const res = await post(`/study/posts`, {
      title,
      content,
      studyCategory,
      area,
      minPeople,
      maxPeople,
      startDate,
      endDate,
      openTalkUrl,
    }).then((data: any) => {
      if (data.title) {
        alert("글을 등록하였습니다.");
        navigate(-1);
      }
    });

    mutate(`/study/posts`);
    return { res };
  };
  //스터디 수정
  const editStudy = async ({
    id,
    title,
    content,
    studyCategory,
    area,
    minPeople,
    maxPeople,
    startDate,
    endDate,
    openTalkUrl,
  }: IEditStudy) => {
    await put(`/study/posts/${id}`, {
      title,
      content,
      studyCategory,
      area,
      minPeople,
      maxPeople,
      startDate,
      endDate,
      openTalkUrl,
    }).then((data: any) => {
      if (data) {
        console.log(JSON.stringify(data));
      }
    });

    mutate(`/stduy/posts`);
  };

  // 스터디 삭제
  const deleteStudy = async (id: number) => {
    await del(`/study/posts/${id}`);

    mutate(`/study/posts`);
  };

  // post comment
  const postComment = async ({ id, comment }: IPostComment) => {
    await post(`/study/comments/${id}`, {
      comment,
    }).then((data: any) => {
      if (data) {
        console.log(JSON.stringify(data));
      }
    });

    mutate(`/study/comments/${id}`, false);
  };
  const editComment = async ({ postId, commentId, comment }: IEditComment) => {
    await put(`/study/posts/${postId}/comments/${commentId}`, {
      comment,
    }).then((data: any) => {
      if (data) {
        console.log(JSON.stringify(data));
      }
    });

    mutate(`/study/posts/${postId}/comments/${commentId}`, false);
  };
  const deleteComment = async (studyId: number, commentId: number) => {
    await del(`/study/comments/${commentId}`).then(() => {
      window.confirm("댓글이 삭제되었습니다.");
      mutate(`/study/comments/${commentId}`, false);
    });
  };

  return {
    postStudy,
    editStudy,
    deleteStudy,
    postComment,
    editComment,
    deleteComment,
  };
};
