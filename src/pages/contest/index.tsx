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
        {viewType === "grid" && <ContestGallery data={data} />}
        {viewType === "list" && <ContestList data={data} />}
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
  width: 100%;
  margin-bottom: 5vw;
`;
