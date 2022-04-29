import { useState } from "react";
import { MenuTitle } from "components/Menutitle";
import { StudyList } from "pages/study/StudyList";
import styled from "styled-components";
import { Button } from "@mui/material";
import storage from "hooks/store";
import useGetStudy from "hooks/api/study/useGetStudy";
import { StudyRegister } from "./StudyRegister";
// const boxs: any = [
//   {
//     id: 1,
//     category: "프로그래밍",
//     title: "C 프로그래밍 구해요",
//     limit: 3,
//     content: "000교수님 C프로그래밍 스터디 하실 분 연락주세요",
//     state: "모집중",
//     url: "https://open.kakao.com/o/s6Z9fjld",
//   },
//
// ];

export const Study = () => {
  const token = storage.get("user-token");
  const { data } = useGetStudy();
  const [register, setRegister] = useState<Boolean>(false);

  console.log(data);
  if (!token) return <>접근 못함</>;

  return (
    <StudyWrapper>
      <MenuTitle
        title={"STUDY"}
        info={"원하는 스터디를 만들고 찾아보세요"}
      ></MenuTitle>
      <Button
        variant="contained"
        onClick={() => setRegister((prev) => !prev)}
        style={{ marginBottom: "10px" }}
      >
        {register ? <>스터디 목록 보러가기</> : <>스터디 추가하기</>}
      </Button>
      <StudyTypeWrapper>
        {register ? (
          <StudyRegister setRegister={setRegister} />
        ) : (
          <StudyList data={data} />
        )}
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

// const Button = styled.div`
//   paddingbottom: 10px;
// `;
