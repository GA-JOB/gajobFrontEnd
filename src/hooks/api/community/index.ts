import { useNavigate } from "react-router-dom";
import { useSWRConfig } from "swr";
import { post, put, del } from "lib/api/client";
import { ICommunity } from "types";

type ICommunityPostType =
  | "id"
  | "writer"
  | "view"
  | "createdDate"
  | "modifiedDate"
  | "comments";
interface IPostCommunity extends Omit<ICommunity, ICommunityPostType> {}
interface IEditCommunity extends Omit<ICommunity, ICommunityPostType> {
  id: number;
}
interface IEditComment {
  postId: number | null;
  commentId: number | null;
  comment: string;
}

interface IPostComment {
  id: number | null;
  comment: string;
}

export const useCommunity = () => {
  // 데이터 최신화
  const { mutate } = useSWRConfig();
  const navigate = useNavigate();
  const postPost = async ({
    title,
    content,
    postCategory,
    jobCategory,
  }: IPostCommunity) => {
    await post(`/community/posts`, {
      title,
      content,
      postCategory,
      jobCategory,
    }).then((data: any) => {
      if (data) {
        console.log(JSON.stringify(data));

        navigate(0);
      }
    });

    mutate(`/community/posts`);
  };

  const editPost = async ({
    id,
    title,
    content,
    postCategory,
    jobCategory,
  }: IEditCommunity) => {
    await put(`/community/posts/${id}`, {
      title,
      content,
      postCategory,
      jobCategory,
    }).then((data: any) => {
      if (data) {
        console.log(JSON.stringify(data));
      }
    });

    mutate(`/community/posts`);
  };

  const deletePost = async (id: number) => {
    await del(`/community/posts/${id}`);
    navigate(-1);

    mutate(`/community/posts`);
  };

  const postComment = async ({ id, comment }: IPostComment) => {
    await post(`/community/comments/${id}`, {
      comment,
    }).then((data: any) => {
      if (data) {
        console.log(JSON.stringify(data));
      }
    });

    mutate(`/community/comments/${id}`, false);
  };

  const editComment = async ({ postId, commentId, comment }: IEditComment) => {
    await put(`/community/posts/${postId}/comments/${commentId}`, {
      comment,
    }).then((data: any) => {
      if (data) {
        console.log(JSON.stringify(data));
      }
    });

    mutate(`/community/posts/${postId}/comments/${commentId}`, false);
  };

  const deleteComment = async (postId: number, commentId: number) => {
    await del(`/community/comments/${commentId}`).then(() => {
      window.confirm("댓글이 삭제되었습니다.");
      mutate(`/community/comments/${commentId}`, false);
    });
  };

  const postScrap = async (postId: number) => {
    await post(`/community/scrap/${postId}`).then((res) => {
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

    mutate(`/community/scrap/${postId}`);
  };

  const postLikes = async (postId: number) => {
    await post(`/community/likes/${postId}`).then((res) => {
      if (res === "increase-likes") {
        alert("게시글에 공감하셨습니다.");
      } else {
        alert("게시글에 공감을 취소하셨습니다.");
      }
      window.location.reload();
    });

    mutate(`/community/likes/${postId}`);
  };

  return {
    postPost,
    editPost,
    deletePost,
    postComment,
    editComment,
    deleteComment,
    postScrap,
    postLikes,
  };
};
