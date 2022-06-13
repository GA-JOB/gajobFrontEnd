import { useSWRConfig } from "swr";
import { post } from "lib/api/client";
// import { IJobPostingCrawling } from "types";

export const useJobPosting = () => {
  // 데이터 최신화
  const { mutate } = useSWRConfig();

  const postScrap = async (postId: number) => {
    await post(`issue/job-posting/scraps/${postId}`).then((res) => {
      if (res === "scrap-success") {
        alert(
          "해당 채용공고 스크랩이 완료되었습니다.\n스크랩 목록은 마이페이지에서 조회 가능합니다."
        );
      } else {
        alert("해당 채용공고 스크랩이 취소되었습니다.");
      }
      console.log(res);
    });

    mutate(`issue/job-posting/scraps/${postId}`);
  };

  return {
    postScrap,
  };
};
