import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactTabulator } from "react-tabulator";
import { ColumnDefinition, ReactTabulatorOptions } from "react-tabulator";
import "react-tabulator/lib/styles.css"; // default theme
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css"; // use Theme(s)
import "styles/tabulator.scss";
import styled from "styled-components";
import { IJobPostingCrawling } from "types";
interface IJobPostingProps {
  data: IJobPostingCrawling[];
  careerState: string | null;
}

export const JobPostingList = ({ data, careerState }: IJobPostingProps) => {
  const navigate = useNavigate();

  const columns: ColumnDefinition[] | any = [
    {
      formatter: "rownum",
      hozAlign: "center",
      width: "5%",
      vertAlign: "middle",
      headerSort: false,
    },
    {
      title: "채용공고명",
      field: "title",
      width: "27%",
      vertAlign: "middle",
      hozAlign: "left",
      headerSort: false,
    },
    {
      title: "회사명",
      field: "company",
      width: "12%",
      vertAlign: "middle",
      hozAlign: "left",
      headerSort: false,
    },
    {
      title: "급여형태",
      field: "salaryType",
      width: "6%",
      vertAlign: "middle",
      hozAlign: "left",
      headerSort: false,
    },
    {
      title: "급여",
      field: "salary",
      width: "15%",
      vertAlign: "middle",
      hozAlign: "left",
      headerSort: false,
    },
    {
      title: "마감일",
      field: "closeDate",
      vertAlign: "middle",
      hozAlign: "left",
      width: "15%",
      headerSort: false,
    },
    {
      title: "경력",
      field: "career",
      vertAlign: "middle",
      hozAlign: "left",
      width: "8%",
      headerSort: false,
    },
    {
      title: "지역",
      field: "region",
      vertAlign: "middle",
      hozAlign: "left",
      width: "12%",
      headerSort: false,
    },
  ];
  const options: ReactTabulatorOptions = {
    pagination: true,
    paginationMode: "local",
    paginationSize: 10,
  };
  const rowClickHandler = (e: any, data: any) => {
    const id = data._row.data.id; // 선택한 id 값
    navigate(`/job-posting/${id}`, { state: data._row.data });
  };

  return (
    <JobPostingWrapper className="JobPostingWrapper">
      <TabulatorStyle
        columns={columns}
        data={
          careerState === null
            ? data
            : data?.filter((data) => data.career.startsWith(careerState))
        }
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

  .tabulator-row {
    height: 50px;
    line-height: 30px;
  }
`;
