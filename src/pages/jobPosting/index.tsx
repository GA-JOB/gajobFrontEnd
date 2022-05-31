import React, { useState } from "react";
import { MenuTitle } from "components/Menutitle";
import { SearchData } from "components/search";
import { JobPostingList } from "./JobPostingList";
import { Loading } from "components/loading/index";
import "react-tabulator/lib/styles.css"; // default theme
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css"; // use Theme(s)
import styled from "styled-components";
import { ReactTabulator } from "react-tabulator";
import { ColumnDefinition, ReactTabulatorOptions } from "react-tabulator";
import useGetJobPosting from "hooks/api/jobPosting/useGetJobPosting";
import storage from "hooks/store";
import { Bookmark } from "@mui/icons-material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
export const JobPosting = () => {
  const token = storage.get("user-token");
  const { data } = useGetJobPosting();
  const [area, setArea] = useState<string>("지역 전체보기");
  const areaValue = [
    "지역 전체보기",
    "경기",
    "강원",
    "충북",
    "충남",
    "전북",
    "전남",
    "경북",
    "경남",
    "대구",
    "대전",
    "광주",
    "인천",
    "부산",
    "울산",
    "서울",
    "세종",
    "제주",
  ];
  const [state, setState] = useState<string | null>(null);

  // 상태 표시 style
  const selectBtn = {
    backgroundColor: "white",
    border: "1px solid black",
    opacity: "1",
  };
  const noSelectBtn = {
    color: "black",
  };

  const onClickScrapLink = () => {
    window.location.replace("mypage/scraps");
  };

  if (!token) {
    window.confirm("로그인 후 이용가능합니다.") === true
      ? window.location.replace("/login")
      : window.location.replace("/");
  }
  if (!data) return <Loading />;
  return (
    <JobPostingWrapper>
      <MenuTitle
        title="채용공고"
        info="카테고리 별 채용공고 소식을 한눈에 확인하세요."
      />

      <ContentWrapper>
        <InputSelectField variant="filled" sx={{ m: 2, minWidth: "15%" }}>
          <Select
            variant="standard"
            name="area"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          >
            {areaValue.map((area) => (
              <MenuItem value={area}>{area}</MenuItem>
            ))}
          </Select>
        </InputSelectField>

        <StateTag>
          <ListStyle
            style={state === null ? selectBtn : noSelectBtn}
            onClick={() => setState(null)}
          >
            # 전체
          </ListStyle>
          <ListStyle
            style={state === "관계없음" ? selectBtn : noSelectBtn}
            onClick={() => setState("관계없음")}
          >
            # 관계없음
          </ListStyle>
          <ListStyle
            style={state === "경력" ? selectBtn : noSelectBtn}
            onClick={() => setState("경력")}
          >
            # 경력
          </ListStyle>
          <ListStyle
            style={state === "신입" ? selectBtn : noSelectBtn}
            onClick={() => setState("신입")}
          >
            # 신입
          </ListStyle>
          <LinkStyle href="mypage/scraps"> {"> "} my scrap 보러가기</LinkStyle>
        </StateTag>

        <JobPostingList
          data={
            area === "지역 전체보기"
              ? data
              : data?.filter((data) => data.region.startsWith(area))
          }
          careerState={state}
        />
        {/* 직종별 카테고리 분류 추가 필요. */}
      </ContentWrapper>
    </JobPostingWrapper>
  );
};

const JobPostingWrapper = styled.div`
  min-height: 50vw;
  width: 100%;
  padding-bottom: 5vw;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const ContentWrapper = styled.div`
  width: 80%;
  background-color: white;
  border-radius: 5px;
`;

const InputSelectField = styled(FormControl)`
  float: left;
  font-size: 8pt;
  text-align: left;
`;

const StateTag = styled.div`
  width: 100%;
`;
const ListStyle = styled.li`
  list-style: none;
  display: inline-block;
  background-color: #eaeaea;
  border-radius: 15px;
  font-size: 9pt;
  opacity: 0.7;

  margin: 1vw;
  padding: 0.5vw 1vw;
  cursor: pointer;

  &:hover {
    background-color: white;
    border: 1px solid black;
    opacity: 1;
  }
`;

const LinkStyle = styled.a`
  float: right;
  margin-top: 1.5vw;
  font-size: 10pt;
  text-decoration: none;
`;
