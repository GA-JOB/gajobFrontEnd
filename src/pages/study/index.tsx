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
  const [category, setCategory] = useState<string | null>(null);
  console.log(data);
  if (!token) {
    window.confirm("로그인 후 이용가능합니다.") === true
      ? window.location.replace("/login")
      : window.location.replace("/");
  }
  return (
    <StudyWrapper>
      <MenuTitle
        title={"STUDY"}
        info={"원하는 스터디를 만들고 찾아보세요"}
      ></MenuTitle>
      <StudyContainer>
        <SideNavWrapper>
          <SideNav>
            <NavTitle>category</NavTitle>
            <NavList onClick={() => setCategory(null)}>📍 전체보기</NavList>
            <NavList onClick={() => setCategory("어학")}>어학</NavList>
            <NavList onClick={() => setCategory("취업")}>취업</NavList>
            <NavList onClick={() => setCategory("공무원")}> 공무원</NavList>
            <NavList onClick={() => setCategory("취미")}>취미</NavList>
            <NavList onClick={() => setCategory("프로그래밍")}>
              프로그래밍
            </NavList>
            <NavList onClick={() => setCategory("자율")}>자율</NavList>
            <NavList onClick={() => setCategory("기타")}>기타</NavList>
          </SideNav>
        </SideNavWrapper>
        <StudyTypeWrapper>
          <RegisterBtn
            variant="text"
            onClick={() => setRegister((prev) => !prev)}
            style={{ marginBottom: "10px" }}
          >
            {register ? (
              <>스터디 목록 보러가기</>
            ) : (
              <>같이 스터디 하고싶은 사람 구해보아요</>
            )}
          </RegisterBtn>

          {register ? (
            <StudyRegister setRegister={setRegister} />
          ) : (
            <StudyList
              data={
                category
                  ? data?.filter((data) => category === data.studyCategory)
                  : data
              }
            />
          )}
        </StudyTypeWrapper>
      </StudyContainer>
    </StudyWrapper>
  );
};

const StudyWrapper = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 50px;

  min-height: 45vw;
  background-color: #eaeaea;
`;
const StudyContainer = styled.div`
  width: 90%;
  display: flex;
`;
const StudyTypeWrapper = styled.div`
  width: 70%;
  margin-bottom: 3vw;
  padding: 2vw;
  background-color: white;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;
// const Button = styled.div`
//   paddingbottom: 10px;
// `;
const SideNavWrapper = styled.div`
  width: 30%;
  height: 100%;
`;
const SideNav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  width: 15%;
  margin-top: 17vw;
  margin-left: 10vw;
  padding: 1vw;
  border: 1px solid lightgray;
  background-color: white;
  border-radius: 5px;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
const NavTitle = styled.div`
  font-weight: lighter;
  margin: 0.3vw 0.5vw;
`;
const NavList = styled.div`
  list-style: none;
  margin: 0.6vw;
  padding: 0.3vw;
  font-size: 12pt;
  letter-spacing: 1px;
  cursor: pointer;

  &:hover {
    padding: 0.3vw 1vw;
    background-color: #eaeaea;
    border-radius: 5px;
    transition: 0.5s;
  }
`;

const RegisterBtn = styled(Button)`
  display: flex;
  justify-content:center;
  align-item:center
  width: 100%;
  marginbottom: 2vw;
  padding: 1vw 2vw;
  textdecoration: none;
  fontweight: lighter;
  font-size: small;
  color: black;

  border: 1px solid #eaeaea;
  borderradius: 5px;
  cursor: pointer;
  margin-bottom:10px;
`;
