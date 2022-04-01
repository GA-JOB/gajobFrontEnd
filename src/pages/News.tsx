import React from "react";
import { ReactTabulator } from "react-tabulator";
import { ColumnDefinition, ReactTabulatorOptions } from "react-tabulator";
import useGetNews from "hooks/api/useGetNews";
import styled from "styled-components";
import "react-tabulator/lib/styles.css"; // default theme
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css"; // use Theme(s)

export const JobNews = () => {
  const { data } = useGetNews();

  const columns: ColumnDefinition[] = [
    {
      title: "id",
      field: "id",
      width: 80,
      hozAlign: "center",
      vertAlign: "middle",
    },

    {
      title: "이미지",
      field: "imgUrl",
      formatter: "image",
      formatterParams: {
        height: "100px",
        width: "150px",
        urlSuffix: ".jpg" || ".png",
      },
      width: 200,
      hozAlign: "center",
      vertAlign: "middle",
    },
    {
      title: "제목",
      field: "title",
      hozAlign: "center",
      vertAlign: "middle",
    },

    {
      title: "작성일",
      field: "createTime",
      sorter: "date",
      width: 120,
      hozAlign: "center",
      vertAlign: "middle",
    },
    {
      title: "상세페이지",
      field: "url",
      formatter: "link",
      formatterParams: {
        label: "Click Here",
        urlPrefix: "https://" || "http://", // tabulator link 적용하기.
        urlField: "url",
        target: "_blank", // 새 탭에서 링크를 열기 위함.
      },
      width: 150,
      hozAlign: "center",
      vertAlign: "middle",
    },
  ];

  const options: ReactTabulatorOptions = {
    height: "100%",
    movableRows: false,
    movableColumns: true,
  };

  if (!data) return <div>loading...</div>;
  return (
    <JobNewsWrapper>
      <NewsTitle>GA-JOB 뉴스</NewsTitle>
      <NewsList>
        <TabulatorStyle columns={columns} data={data} options={options} />
      </NewsList>
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

const NewsTitle = styled.div`
  font-size: 12pt;
`;

const NewsList = styled.div`
  width: 100%;
`;

const TabulatorStyle = styled(ReactTabulator)`
  align-items: center;
  justify-content: center;
  text-align: center;

  .tabulator-row table {
    vertical-align: middle;
    border-collapse: collapse;
  }

  .tabulator-row table img {
    border: 2px solid #ccc;
  }

  .tabulator-row table tr td {
    border: none;
  }

  .tabulator-row table tr td:first-of-type {
    width: 60px;
  }

  .tabulator-row table tr td div {
    padding: 5px;
  }
`;
