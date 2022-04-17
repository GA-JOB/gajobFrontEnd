import { post } from "lib/api/client";
import { ICommunity } from "types";

interface IPostCommunityRequest extends ICommunity {}

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
