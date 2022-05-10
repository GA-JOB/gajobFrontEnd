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
  const postPost = async ({ title, content, postCategory }: IPostCommunity) => {
    await post(`/community/posts`, {
      title,
      content,
      postCategory,
    }).then((data: any) => {
      if (data) {
        console.log(JSON.stringify(data));

        window.location.replace("/jobdam");
      }
    });

    mutate(`/community/posts`);
  };

  const editPost = async ({
    id,
    title,
    content,
    postCategory,
  }: IEditCommunity) => {
    await put(`/community/posts/${id}`, {
      title,
      content,
      postCategory,
    }).then((data: any) => {
      if (data) {
        console.log(JSON.stringify(data));
      }
    });

    mutate(`/community/posts`);
  };

  const deletePost = async (id: number) => {
    await del(`/community/posts/${id}`);

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
      console.log(res);
    });

    mutate(`/community/scrap/${postId}`);
  };

  const postLikes = async (postId: number) => {
    await post(`/community/likes/${postId}`).then((res) => {
      console.log(res);
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
