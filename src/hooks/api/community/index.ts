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
        // alert("게시글이 성공적으로 작성되었습니다.");
      }
    });

    return { res };
  };

  return { postCommunity };
};
