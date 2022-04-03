import React, { useState } from "react";
import { MenuTitle } from "components/Menutitle";
import { SearchData } from "components/search";
import { NewsList } from "./NewsList";
import "react-tabulator/lib/styles.css"; // default theme
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css"; // use Theme(s)
import styled from "styled-components";
import useGetNews from "hooks/api/useGetNews";
import { INewsCrawling } from "types";

export const JobNews = () => {
  const { data } = useGetNews();
  const [searchedData, setSearchedData] = useState<INewsCrawling[]>([]);

  if (!data) return <div>loading...</div>;
  return (
    <JobNewsWrapper>
      <MenuTitle
        title="JOB NEWS"
        info="실시간으로 제공되는 최신 취업 소식을 확인해보세요."
      />
      <SearchData data={data} setSearchedData={setSearchedData} />
      <NewsList searchedData={searchedData} />
    </JobNewsWrapper>
  );
};

const JobNewsWrapper = styled.div`
  height: 100%;
  width: 80%;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
