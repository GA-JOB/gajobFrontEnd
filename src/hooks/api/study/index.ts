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
  const postStudyComment = async ({ id, comment }: IPostComment) => {
    await post(`/study/comments/${id}`, {
      comment,
    }).then((data: any) => {
      if (data) {
        console.log(JSON.stringify(data));
      }
    });

    mutate(`/study/comments/${id}`, false);
  };
  const editStudyComment = async ({
    postId,
    commentId,
    comment,
  }: IEditComment) => {
    await put(`/study/posts/${postId}/comments/${commentId}`, {
      comment,
    }).then((data: any) => {
      if (data) {
        console.log(JSON.stringify(data));
      }
    });

    mutate(`/study/posts/${postId}/comments/${commentId}`, false);
  };
  const deleteStudyComment = async (studyId: number, commentId: number) => {
    await del(`/study/comments/${commentId}`).then(() => {
      window.confirm("댓글이 삭제되었습니다.");
      mutate(`/study/comments/${commentId}`, false);
    });
  };

  const postScrap = async (postId: number) => {
    await post(`/study/scrap/${postId}`).then((res) => {
      if (res === "scrap-success") {
        alert(
          "해당 게시글 스크랩이 완료되었습니다.\n스크랩 목록은 마이페이지에서 조회 가능합니다."
        );
      } else {
        alert("해당 게시글 스크랩이 취소되었습니다.");
      }
      console.log(res);
      window.location.reload();
    });

    mutate(`/study/scrap/${postId}`);
  };

  const postLikes = async (postId: number) => {
    await post(`/study/likes/${postId}`).then((res) => {
      if (res === "increase-likes") {
        alert("스터디에 공감하셨습니다.");
      } else {
        alert("스터디 공감을 취소하셨습니다.");
      }
      window.location.reload();
    });

    mutate(`/study/likes/${postId}`);
  };

  return {
    postStudy,
    editStudy,
    deleteStudy,
    postStudyComment,
    editStudyComment,
    deleteStudyComment,
    postScrap,
    postLikes,
  };
};
