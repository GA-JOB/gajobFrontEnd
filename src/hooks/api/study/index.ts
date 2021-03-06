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
  isSecret: boolean;
}
interface IRecruitStudy {
  postId: number | null;
  content: string;
}
interface IRecruitResultStudy {
  postId: number;
  studentId: number;
  result: string;
}
interface IEditComment {
  postId: number | null;
  commentId: number | null;
  comment: string;
  isSecret: boolean;
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

  // 스터디 신청
  const recruitStudy = async ({ postId, content }: IRecruitStudy) => {
    await post(`/study/recruitment/${postId}`, {
      content,
    }).then((data: any) => {
      if (data.result) {
        alert(
          "스터디 신청이 완료되었습니다. \n 신청 내역과 결과는 마이페이지에서 확인 가능합니다!"
        );

        navigate(-1);
      }
    });
  };
  // 스터디 신청 취소
  const deleteRecruitStudy = async (postId: number) => {
    await del(`/study/recruitment/${postId}`).then(() => {
      window.confirm("신청이 취소되었습니다.");
      navigate(-1);
      mutate(`/study/recruitment/${postId}`, false);
    });
  };
  // 스터디 신청 모집 결과 설정
  const recruitResultStudy = async ({
    postId,
    studentId,
    result,
  }: IRecruitResultStudy) => {
    await post(`/study/recruitment/${postId}/result/${studentId}`, {
      result,
    }).then((data: any) => {
      if (data.result) {
        alert(
          "스터디 승인 결과가 저장되었습니다.\n 모집 종료 시점에 지원자에게 메일로 결과 안내 발송될 예정입니다."
        );

        navigate(-1);
      }
    });
  };

  // 댓글 등록
  const postStudyComment = async ({ id, comment, isSecret }: IPostComment) => {
    await post(`/study/comments/${id}`, {
      comment,
      isSecret,
    }).then((data: any) => {});

    mutate(`/study/comments/${id}`, false);
  };
  const editStudyComment = async ({
    postId,
    commentId,
    comment,
    isSecret,
  }: IEditComment) => {
    await put(`/study/posts/${postId}/comments/${commentId}`, {
      comment,
      isSecret,
    }).then((data: any) => {
      if (data.comment) {
        alert("댓글이 수정되었습니다.");
      }
    });

    mutate(`/study/posts/${postId}/comments/${commentId}`, false);
  };
  // 스터디 댓글 삭제
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
        alert("해당 스터디 게시글에 공감하셨습니다.");
      } else {
        alert("해당 스터디 게시글 공감을 취소하셨습니다.");
      }
      window.location.reload();
    });

    mutate(`/study/likes/${postId}`);
  };

  return {
    postStudy,
    editStudy,
    deleteStudy,
    recruitStudy,
    deleteRecruitStudy,
    recruitResultStudy,
    postStudyComment,
    editStudyComment,
    deleteStudyComment,
    postScrap,
    postLikes,
  };
};
