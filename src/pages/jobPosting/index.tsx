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
import useGetJobPosting from "hooks/api/useGetJobPosting";
import storage from "hooks/store";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
export const JobPosting = () => {
  const token = storage.get("user-token");
  const { data } = useGetJobPosting();
  const [area, setArea] = useState<string>("전체보기");
  const areaValue = [
    "전체보기",
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
      <InputSelectField variant="filled" sx={{ m: 0, minWidth: "100%" }}>
        <Select
          name="area"
          value={area}
          onChange={(e) => setArea(e.target.value)}
        >
          {areaValue.map((area) => (
            <MenuItem value={area}>{area}</MenuItem>
          ))}
        </Select>
      </InputSelectField>
      <JobPostingList
        data={
          area === "전체보기"
            ? data
            : data?.filter((data) => data.region.startsWith(area))
        }
      />
    </JobPostingWrapper>
  );
};

const JobPostingWrapper = styled.div`
  height: 100%;
  width: 80%;
  align-items: center;
  justify-content: center;
  text-align: center;
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
const NavInfo = styled.div`
  font-size: 11pt;
  font-weight: lighter;
  padding: 0.3vw 1vw;
`;
const InputSelectField = styled(FormControl)`
  width: 100%;
  font-size: 10pt;
`;
