import React from "react";
import styled from "styled-components";
import { ReactTabulator } from "react-tabulator";
import { IJobPostingCrawling } from "types";
import { ColumnDefinition, ReactTabulatorOptions } from "react-tabulator";
import "react-tabulator/lib/styles.css"; // default theme
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css"; // use Theme(s)
import "styles/tabulator.scss";
interface IJobPostingProps {
  data: IJobPostingCrawling[];
}

export const JobPostingList = ({ data }: IJobPostingProps) => {
  const columns: ColumnDefinition[] | any = [
    { formatter: "rownum", hozAlign: "center", width: 40 },
    { title: "채용공고 제목", field: "title", width: 150 },
    { title: "회사명", field: "company" },
    { title: "급여타입", field: "salaryType" },
    { title: "급여", field: "salary" },
    {
      title: "마감일",
      field: "closeDate",
    },
    { title: "경력", field: "career" },
    { title: "지역", field: "region" },
  ];
  const options: ReactTabulatorOptions = {
    pagination: true,
    paginationMode: "local",
    paginationSize: 10,
  };

  return (
    <JobPostingWrapper className="JobPostingWrapper">
      <TabulatorStyle columns={columns} data={data} options={options} />
    </JobPostingWrapper>
  );
};

const JobPostingWrapper = styled.div`
  width: 100%;
`;

const TabulatorStyle = styled(ReactTabulator)`
  align-items: center;
  justify-content: center;
  text-align: center;
`;
