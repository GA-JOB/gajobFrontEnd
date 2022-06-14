import { MenuTitle } from "components/Menutitle";
import { ContestList } from "./ContestList";
import { ContestRank } from "./ContestRank";
import styled from "styled-components";
import useGetContests from "hooks/api/useGetContest";

export const Contest = () => {
  const { data } = useGetContests();

  return (
    <ContestWrapper>
      <MenuTitle
        title={"공모전 소식"}
        info={"실시간으로 제공되는 공모전 정보를 확인해보세요"}
      />

      <ContestContainer>
        <SideNavWrapper>
          <SideNav>
            <NavTitle>category</NavTitle>
            <NavList>
              <NavLink onClick={() => window.scrollTo(0, 0)}>
                🔥 실시간 HOT
              </NavLink>
            </NavList>
            <NavList>
              <NavLink onClick={() => window.scrollTo(5500, 5500)}>
                ⭐️ 공모전 모집중
              </NavLink>
            </NavList>
            <NavList>
              <NavLink onClick={() => window.scrollTo(5500, 5500)}>
                ❤️ 관심 공모전
              </NavLink>
            </NavList>
          </SideNav>
        </SideNavWrapper>

        <ContentsTypeWrapper>
          <ContestRank />
          <ContestList data={data} />
        </ContentsTypeWrapper>
      </ContestContainer>
    </ContestWrapper>
  );
};

const ContestWrapper = styled.div`
  height: 100%;
  width: 85%;
`;

const ContestContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SideNavWrapper = styled.div`
  width: 30%;
  height: 100%;

  vertical-align: baseline;
`;
const SideNav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  width: 15%;
  margin-top: 18vw;
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
const NavLink = styled.a`
  text-decoration: none;
  color: black;
`;

const ContentsTypeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-bottom: 3vw;
`;
