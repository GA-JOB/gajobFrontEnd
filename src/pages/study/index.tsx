import { useState } from "react";
import styled from "styled-components";
// import { ButtonType } from "../components/button/ButtonType";
import { MenuTitle } from "components/Menutitle";
import { Button } from "@mui/material";
import { StudyList } from "pages/study/StudyList";

const boxs: any = [
  {
    id: 1,
    category: "프로그래밍",
    title: "C 프로그래밍 구해요",
    limit: 3,
    content: "000교수님 C프로그래밍 스터디 하실 분 연락주세요",
    state: "모집중",
    url: "https://open.kakao.com/o/s6Z9fjld",
  },
  {
    id: 2,
    category: "언어",
    title: "중국어할사람",
    limit: 3,
    state: "모집마감",
    content: "중국어할사람",
    url: "https://open.kakao.com/o/s6Z9fjld",
  },
  {
    id: 3,
    category: "자격증",
    title: "정처기 같이 공부할사람 구해요",
    limit: 5,
    state: "모집중",
    content: "2022년 0월 0일 필기시험 정처기 공부할 사람 구합니다",
    url: "https://open.kakao.com/o/s6Z9fjld",
  },
  {
    id: 4,
    category: "프로그래밍",
    title: "C 프로그래밍 구해요",
    limit: 3,
    state: "모집마감",
    content: "000교수님 C프로그래밍 스터디 하실 분 연락주세요",
    url: "https://open.kakao.com/o/s6Z9fjld",
  },
  {
    id: 5,
    category: "프로그래밍",
    title: "C 프로그래밍 구해요",
    limit: 3,
    state: "모집마감",
    content: "000교수님 C프로그래밍 스터디 하실 분 연락주세요",
    url: "https://open.kakao.com/o/s6Z9fjld",
  },
  {
    id: 6,
    category: "프로그래밍",
    title: "C 프로그래밍 구해요",
    limit: 3,
    state: "모집마감",
    content: "000교수님 C프로그래밍 스터디 하실 분 연락주세요",
    url: "https://open.kakao.com/o/s6Z9fjld",
  },
  {
    id: 7,
    category: "프로그래밍",
    title: "C 프로그래밍 구해요",
    limit: 3,
    state: "모집마감",
    content: "000교수님 C프로그래밍 스터디 하실 분 연락주세요",
    url: "https://open.kakao.com/o/s6Z9fjld",
  },
  {
    id: 8,
    category: "프로그래밍",
    title: "C 프로그래밍 구해요",
    limit: 3,
    state: "모집마감",
    content: "000교수님 C프로그래밍 스터디 하실 분 연락주세요",
    url: "https://open.kakao.com/o/s6Z9fjld",
  },
  {
    id: 9,
    category: "프로그래밍",
    title: "C 프로그래밍 구해요",
    limit: 3,
    state: "모집마감",
    content: "000교수님 C프로그래밍 스터디 하실 분 연락주세요",
    url: "https://open.kakao.com/o/s6Z9fjld",
  },
  {
    id: 10,
    category: "프로그래밍",
    title: "C 프로그래밍 구해요",
    limit: 3,
    state: "모집마감",
    content: "000교수님 C프로그래밍 스터디 하실 분 연락주세요",
    url: "https://open.kakao.com/o/s6Z9fjld",
  },
  {
    id: 11,
    category: "프로그래밍",
    title: "C 프로그래밍 구해요",
    limit: 3,
    state: "모집마감",
    content: "000교수님 C프로그래밍 스터디 하실 분 연락주세요",
    url: "https://open.kakao.com/o/s6Z9fjld",
  },
];

// const onClick=()=>{

// }

export const Study = () => {
  const [register, setRegister] = useState<Boolean>(false);
  return (
    <StudyWrapper>
      <MenuTitle
        title={"스터디"}
        info={"원하는 스터디를 만들고 찾아보세요"}
      ></MenuTitle>
      <Button variant="contained" onClick={() => setRegister(true)}>
        스터디 추가하기
      </Button>
      <StudyTypeWrapper>
        {register || <StudyList data={boxs} />}
      </StudyTypeWrapper>
    </StudyWrapper>
  );
};

const StudyWrapper = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 50px;
`;
const StudyTypeWrapper = styled.div`
  height: 90%;
  width: 100%;
`;
