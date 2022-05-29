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
  careerState: string | null;
}

export const JobPostingList = ({ data, careerState }: IJobPostingProps) => {
  const navigate = useNavigate();

  const columns: ColumnDefinition[] | any = [
    {
      formatter: "rownum",
      hozAlign: "center",
      width: 40,
      headerSort: false,
    },
    {
      title: "채용공고명",
      field: "title",
      width: 250,
      hozAlign: "left",
      headerSort: false,
    },
    { title: "회사명", field: "company", hozAlign: "left", headerSort: false },
    {
      title: "급여형태",
      field: "salaryType",
      width: 100,
      hozAlign: "left",
      headerSort: false,
    },
    { title: "급여", field: "salary", hozAlign: "left", headerSort: false },
    {
      title: "마감일",
      field: "closeDate",
      hozAlign: "left",
      width: 150,
      headerSort: false,
    },
    {
      title: "경력",
      field: "career",
      hozAlign: "left",
      width: 100,
      headerSort: false,
    },
    {
      title: "지역",
      field: "region",
      hozAlign: "left",
      width: 150,
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
        // data={data}
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
