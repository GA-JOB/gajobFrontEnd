import { useState } from "react";
import { MenuTitle } from "components/Menutitle";
import { ContestGallery } from "./ContestGallery";
import { ContestList } from "./ContestList";
import styled from "styled-components";
import { FormatListBulleted, GridView } from "@mui/icons-material";

const boxs: any = [
  {
    id: 1,
    category: "기획/아이디어",
    title: "2022 환경창업대전 Eco + Start-up Challenge",
    organization: "환경부",
    state: "활동중",
    todayState: "활동중",
    url: "https://www.ecostartup.kr/ecostartup/2022challenge/2022/1",
    imgUrl:
      "http://file1.jobkorea.co.kr/contest/files/Banner1/202204/2867_2.jpg",
  },
  {
    id: 2,
    category: "취업/창업",
    title: "2022 환경창업대전 Eco + Start-up Challenge",
    organization: "환경부",
    state: "활동중",
    todayState: "활동중",
    url: "https://www.ecostartup.kr/ecostartup/2022challenge/2022/1",
    imgUrl:
      "http://file1.jobkorea.co.kr/contest/files/Banner1/202204/2867_2.jpg",
  },
  {
    id: 3,
    category: "기획/아이디어",
    title: "2022 환경창업대전 Eco + Start-up Challenge",
    organization: "환경부",
    state: "활동중",
    todayState: "활동중",
    url: "https://www.ecostartup.kr/ecostartup/2022challenge/2022/1",
    imgUrl:
      "http://file1.jobkorea.co.kr/contest/files/Banner1/202204/2867_2.jpg",
  },
  {
    id: 4,
    category: "취업/창업",
    title: "2022 환경창업대전 Eco + Start-up Challenge",
    organization: "환경부",
    state: "활동중",
    todayState: "활동중",
    url: "https://www.ecostartup.kr/ecostartup/2022challenge/2022/1",
    imgUrl:
      "http://file1.jobkorea.co.kr/contest/files/Banner1/202204/2867_2.jpg",
  },
  {
    id: 5,
    category: "기획/아이디어",
    title: "2022 환경창업대전 Eco + Start-up Challenge",
    organization: "환경부",
    state: "활동중",
    todayState: "활동중",
    url: "https://www.ecostartup.kr/ecostartup/2022challenge/2022/1",
    imgUrl:
      "http://file1.jobkorea.co.kr/contest/files/Banner1/202204/2867_2.jpg",
  },
  {
    id: 6,
    category: "취업/창업",
    title: "2022 환경창업대전 Eco + Start-up Challenge",
    organization: "환경부",
    state: "활동중",
    todayState: "활동중",
    url: "https://www.ecostartup.kr/ecostartup/2022challenge/2022/1",
    imgUrl:
      "http://file1.jobkorea.co.kr/contest/files/Banner1/202204/2867_2.jpg",
  },
  {
    id: 7,
    category: "기획/아이디어",
    title: "2022 환경창업대전 Eco + Start-up Challenge",
    organization: "환경부",
    state: "활동중",
    todayState: "활동중",
    url: "https://www.ecostartup.kr/ecostartup/2022challenge/2022/1",
    imgUrl:
      "http://file1.jobkorea.co.kr/contest/files/Banner1/202204/2867_2.jpg",
  },
  {
    id: 8,
    category: "취업/창업",
    title: "2022 환경창업대전 Eco + Start-up Challenge",
    organization: "환경부",
    state: "활동중",
    todayState: "활동중",
    url: "https://www.ecostartup.kr/ecostartup/2022challenge/2022/1",
    imgUrl:
      "http://file1.jobkorea.co.kr/contest/files/Banner1/202204/2867_2.jpg",
  },
  {
    id: 9,
    category: "기획/아이디어",
    title: "2022 환경창업대전 Eco + Start-up Challenge",
    organization: "환경부",
    state: "활동중",
    todayState: "활동중",
    url: "https://www.ecostartup.kr/ecostartup/2022challenge/2022/1",
    imgUrl:
      "http://file1.jobkorea.co.kr/contest/files/Banner1/202204/2867_2.jpg",
  },
  {
    id: 10,
    category: "취업/창업",
    title: "2022 환경창업대전 Eco + Start-up Challenge",
    organization: "환경부",
    state: "활동중",
    todayState: "활동중",
    url: "https://www.ecostartup.kr/ecostartup/2022challenge/2022/1",
    imgUrl:
      "http://file1.jobkorea.co.kr/contest/files/Banner1/202204/2867_2.jpg",
  },
  {
    id: 11,
    category: "기획/아이디어",
    title: "2022 환경창업대전 Eco + Start-up Challenge",
    organization: "환경부",
    state: "활동중",
    todayState: "활동중",
    url: "https://www.ecostartup.kr/ecostartup/2022challenge/2022/1",
    imgUrl:
      "http://file1.jobkorea.co.kr/contest/files/Banner1/202204/2867_2.jpg",
  },
  {
    id: 12,
    category: "취업/창업",
    title: "2022 환경창업대전 Eco + Start-up Challenge",
    organization: "환경부",
    state: "활동중",
    todayState: "활동중",
    url: "https://www.ecostartup.kr/ecostartup/2022challenge/2022/1",
    imgUrl:
      "http://file1.jobkorea.co.kr/contest/files/Banner1/202204/2867_2.jpg",
  },
  {
    id: 13,
    category: "기획/아이디어",
    title: "2022 환경창업대전 Eco + Start-up Challenge",
    organization: "환경부",
    state: "모집중",
    todayState: "모집중",
    url: "https://www.ecostartup.kr/ecostartup/2022challenge/2022/1",
    imgUrl:
      "http://file1.jobkorea.co.kr/contest/files/Banner1/202204/2867_2.jpg",
  },
  {
    id: 14,
    category: "기획/아이디어",
    title: "2022 환경창업대전 Eco + Start-up Challenge",
    organization: "환경부",
    state: "모집중",
    todayState: "모집중",
    url: "https://www.ecostartup.kr/ecostartup/2022challenge/2022/1",
    imgUrl:
      "http://file1.jobkorea.co.kr/contest/files/Banner1/202204/2867_2.jpg",
  },
  {
    id: 15,
    category: "기획/아이디어",
    title: "2022 환경창업대전 Eco + Start-up Challenge",
    organization: "환경부",
    state: "모집중",
    todayState: "모집중",
    url: "https://www.ecostartup.kr/ecostartup/2022challenge/2022/1",
    imgUrl:
      "http://file1.jobkorea.co.kr/contest/files/Banner1/202204/2867_2.jpg",
  },
];

export const Contest = () => {
  const [viewType, setViewType] = useState<string>("grid");
  let gridStyle,
    listStyle = {
      opacity: 0.5,
    };

  if (viewType === "grid") {
    listStyle = { opacity: 0.5 };
    gridStyle = { opacity: 1 };
  } else if (viewType === "list") {
    gridStyle = { opacity: 0.5 };
    listStyle = { opacity: 1 };
  }

  return (
    <ContestWrapper>
      <MenuTitle
        title={"공모전 소식"}
        info={"실시간으로 제공되는 공모전 정보를 확인해보세요"}
      />

      <SelectViewType>
        <Button style={gridStyle}>
          <GridView onClick={() => setViewType("grid")} />
        </Button>
        <Button style={listStyle}>
          <FormatListBulleted
            onClick={() => {
              setViewType("list");
            }}
          />
        </Button>
      </SelectViewType>

      <ContentsTypeWrapper>
        {viewType === "grid" && <ContestGallery data={boxs} />}
        {viewType === "list" && <ContestList data={boxs} />}
      </ContentsTypeWrapper>
    </ContestWrapper>
  );
};

const ContestWrapper = styled.div`
  height: 100%;
  width: 80%;
`;
const SelectViewType = styled.div`
  width: 100%;
  padding: 1vw;
`;
const Button = styled.span`
  width: 100%;
  padding: 0.5vw;
  cursor: pointer;
`;

const ContentsTypeWrapper = styled.div`
  width: 100%;
`;
