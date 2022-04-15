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
import { IJobPostingCrawling } from "types";
import storage from "hooks/store";

export const JobPosting = () => {
  const token = storage.get("user-token");
  const { data } = useGetJobPosting();

  if (!data) return <Loading />;
  if (!token) return <>접근 못함</>;
  return (
    <JobPostingWrapper>
      <MenuTitle
        title="공고"
        info="카테고리 별 채용 공고 소식을 한눈에 확인하세요."
      />
      <JobPostingList data={data} />
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
