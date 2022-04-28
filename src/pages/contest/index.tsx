import { useState } from "react";
import { MenuTitle } from "components/Menutitle";
import { ContestGallery } from "./ContestGallery";
import { ContestList } from "./ContestList";
import styled from "styled-components";
import { FormatListBulleted, GridView } from "@mui/icons-material";
import useGetContests from "hooks/api/useGetContest";

export const Contest = () => {
  const { data } = useGetContests();

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

      <ContestContainer>
        <SideNavWrapper>
          <SideNav>
            <NavTitle>category</NavTitle>
            <NavList onClick={() => window.location.replace("/contest/rank")}>
              🔥 Hot Ranking
            </NavList>
            <NavList onClick={() => window.location.replace("/contest")}>
              📒 공모전 전체
            </NavList>
          </SideNav>
        </SideNavWrapper>

        <ContentsTypeWrapper>
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

          {viewType === "grid" && <ContestGallery data={data} />}
          {viewType === "list" && <ContestList data={data} />}
        </ContentsTypeWrapper>
      </ContestContainer>
    </ContestWrapper>
  );
};

const ContestWrapper = styled.div`
  height: 100%;
  width: 90%;
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
const SelectViewType = styled.div`
  width: 100%;
  padding: 1vw;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;
const Button = styled.span`
  width: 100%;
  padding: 0.5vw;
  cursor: pointer;
`;
const ContentsTypeWrapper = styled.div`
  width: 90%;
  margin-bottom: 5vw;
`;
