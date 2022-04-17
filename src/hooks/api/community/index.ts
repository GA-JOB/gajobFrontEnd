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
interface IPostCommunityRequest extends Omit<ICommunity, ICommunityPostType> {}

export const useCommunity = () => {
  const postCommunity = async ({
    title,
    content,
    category,
  }: IPostCommunityRequest) => {
    const res = await post(`/community/posts`, {
      title,
      content,
      category,
    }).then((data: any) => {
      if (data.title) {
        console.log(JSON.stringify(data));

        window.location.replace("/jobdam");
      }
    });

    return { res };
  };

  return { postCommunity };
};
