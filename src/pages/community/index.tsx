import { useState } from "react";
import { MenuTitle } from "components/Menutitle";
import { PostList } from "pages/community/PostList";
import styled from "styled-components";
import storage from "hooks/store";

export const Community = () => {
  const token = storage.get("user-token");
  const [category, setCategory] = useState<string | null>(null);

  if (!token) {
    window.confirm("로그인 후 이용가능합니다.") === true
      ? window.location.replace("/login")
      : window.location.replace("/");
  }
  return (
    <>
      <CommunityWrapper>
        <MenuTitle
          title="JOB담"
          info="취업 관련하여 꿀팁을 서로 공유해보세요!"
        />

        <CommuContainer>
          <SideNavWrapper>
            <SideNav>
              <NavTitle>category</NavTitle>
              <NavList onClick={() => setCategory(null)}>📍 전체보기</NavList>
              <NavList onClick={() => setCategory("취뽀")}>🥳 취뽀</NavList>
              <NavList onClick={() => setCategory("취업고민")}>
                💼 취업고민
              </NavList>
              <NavList onClick={() => setCategory("꿀팁")}>🍯 꿀팁</NavList>
              <NavList onClick={() => setCategory("일상")}>🌸 일상</NavList>
            </SideNav>
          </SideNavWrapper>

          <ContentWrapper>
            <PostList isMypage={false} postCategory={category} />
          </ContentWrapper>
        </CommuContainer>
      </CommunityWrapper>
    </>
  );
};

const CommunityWrapper = styled.div`
  width: 100%;
  min-height: 45vw;
  background-color: #eaeaea;
`;
const CommuContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
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

const ContentWrapper = styled.div`
  width: 70%;
  margin-bottom: 3vw;
  padding: 2vw;
  background-color: white;
  border: 1px solid #eaeaea;
  border-radius: 5px;
`;
