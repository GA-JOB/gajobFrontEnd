import { useSWRConfig } from "swr";
import { post } from "lib/api/client";
import { ICommunity } from "types";

type ICommunityPostType =
  | "id"
  | "postCategory"
  | "writer"
  | "view"
  | "createdDate"
  | "modifiedDate"
  | "comments";
interface IPostCommunity extends Omit<ICommunity, ICommunityPostType> {}

interface IPostComment {
  id: number | null;
  comment: string;
}

export const useCommunity = () => {
  // 데이터 최신화
  const { mutate } = useSWRConfig();
  const postCommunity = async ({
    title,
    content,
    category,
  }: IPostCommunity) => {
    await post(`/community/posts`, {
      title,
      content,
      category,
    }).then((data: any) => {
      if (data.title) {
        console.log(JSON.stringify(data));

        window.location.replace("/jobdam");
      }
    });
  };

  const postComment = async ({ id, comment }: IPostComment) => {
    await post(`/community/comments/${id}`, {
      comment,
    }).then((data: any) => {
      if (data.comment) {
        console.log(JSON.stringify(data));
      }
    });

    mutate(`/community/posts`);
  };

  return { postCommunity, postComment };
};
