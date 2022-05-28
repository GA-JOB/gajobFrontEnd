import React from "react";
import styled from "styled-components";
import { ReactTabulator } from "react-tabulator";
import { IJobPostingCrawling } from "types";
import { ColumnDefinition, ReactTabulatorOptions } from "react-tabulator";
import "react-tabulator/lib/styles.css"; // default theme
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css"; // use Theme(s)
import "styles/tabulator.scss";
import { useNavigate } from "react-router-dom";
interface IJobPostingProps {
  data: IJobPostingCrawling[];
}

export const JobPostingList = ({ data }: IJobPostingProps) => {
  const navigate = useNavigate();
  const columns: ColumnDefinition[] | any = [
    { formatter: "rownum", hozAlign: "center", width: 40, headerSort: false },
    { title: "채용공고명", field: "title", width: 150, headerSort: false },
    { title: "회사명", field: "company", headerSort: false },
    { title: "급여타입", field: "salaryType", headerSort: false },
    { title: "급여", field: "salary", headerSort: false },
    {
      title: "마감일",
      field: "closeDate",
      headerSort: false,
    },
    { title: "경력", field: "career", headerSort: false },
    { title: "지역", field: "region", headerSort: false },
  ];
  const options: ReactTabulatorOptions = {
    pagination: true,
    paginationMode: "local",
    paginationSize: 10,
  };
  const rowClickHandler = (e: any, data: any) => {
    console.log(data._row.data.id); // 선택했을 때 id값
    const id = data._row.data.id;
    console.log(data._row.data);
    navigate(`/job-posting/${id}`, { state: data._row.data });
  };
  return (
    <JobPostingWrapper className="JobPostingWrapper">
      <TabulatorStyle
        columns={columns}
        data={data}
        options={options}
        events={{ rowClick: rowClickHandler }}
      />
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
