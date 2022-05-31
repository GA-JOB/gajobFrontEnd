import { useState } from "react";
import { MenuTitle } from "components/Menutitle";
import { StudyList } from "pages/study/StudyList";
import styled from "styled-components";
import storage from "hooks/store";
import useGetStudy from "hooks/api/study/useGetStudy";

export const Study = () => {
  const token = storage.get("user-token");

  const { data } = useGetStudy();
  const [category, setCategory] = useState<string | null>(null);

  // const todayTime = () => {
  //   let date = new Date();
  //   let todayYear = date.getFullYear();
  //   let todayMonth = date.getMonth() + 1;
  //   let todayDate = date.getDate();
  //   const week = ["일", "월", "화", "수", "목", "금", "토"];
  //   let dayOfWeek = week[date.getDay()];

  //   return (
  //     todayYear +
  //     "년 " +
  //     todayMonth +
  //     "월 " +
  //     todayDate +
  //     "일, " +
  //     dayOfWeek +
  //     "요일 "
  //   );
  // };

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
            <NavTitle> category</NavTitle>

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

            {/* <NavList>✍🏻 작성자</NavList> <NavInfo>{nickname}</NavInfo>
                <NavList>📆 작성일</NavList> <NavInfo>{todayTime()}</NavInfo> */}
          </SideNav>
        </SideNavWrapper>

        <StudyTypeWrapper>
          <Category>
            <strong>✔️ STUDY </strong>
            {category === null ? "| 전체보기" : "| " + category}
          </Category>
          <StudyList
            data={
              category
                ? data?.filter((data) => category === data.studyCategory)
                : data
            }
          />
        </StudyTypeWrapper>
      </StudyContainer>
    </StudyWrapper>
  );
};

const StudyWrapper = styled.div`
  width: 100%;
  min-height: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #eaeaea;
`;
const StudyContainer = styled.div`
  width: 90%;
  display: flex;
`;
const SideNavWrapper = styled.div`
  width: 30%;
`;
const SideNav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  width: 15%;
  height: 35%;
  overflow: scroll;
  margin-top: 17vw;
  margin-left: 8vw;
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
  font-size: 11pt;
  letter-spacing: 1px;
  cursor: pointer;

  &:hover {
    padding: 0.3vw 1vw;
    background-color: #eaeaea;
    border-radius: 5px;
    transition: 0.5s;
  }
`;

const StudyTypeWrapper = styled.div`
  width: 100%;
  margin-bottom: 5vw;
  padding: 2vw;
  background-color: white;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;
const Category = styled.div`
  margin: 0.5vw;
  font-weight: lighter;
  letter-spacing: 1px;
`;
