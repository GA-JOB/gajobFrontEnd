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

    mutate(`/community/posts`);
  };

  return { postPost, editPost, deletePost, postComment };
};
