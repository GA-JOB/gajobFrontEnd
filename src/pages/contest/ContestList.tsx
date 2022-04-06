import styled from "styled-components";
import "react-tabulator/lib/styles.css"; // default theme
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css"; // use Theme(s)
import { ReactTabulator } from "react-tabulator";
import { ColumnDefinition, ReactTabulatorOptions } from "react-tabulator";

interface IContestProps {
  data: any;
}

export const ContestList = ({ data }: IContestProps) => {
  const columns: ColumnDefinition[] | any = [
    { formatter: "rownum", hozAlign: "center", width: 40 },
    {
      title: "이미지",
      field: "imgUrl",
      formatter: "image",
      formatterParams: {
        height: "100px",
        width: "150px",
      },
    },
    { title: "제목", field: "title", hozAlign: "center", vertAlign: "middle" },
    {
      title: "주최기관",
      field: "organization",
      hozAlign: "center",
      vertAlign: "middle",
    },
    {
      title: "모집상태",
      field: "state",
      hozAlign: "center",
      vertAlign: "middle",
    },
    {
      title: "카테고리",
      field: "category",
      hozAlign: "center",
      vertAlign: "middle",
    },
    {
      title: "상세페이지",
      field: "url",
      formatter: "link",
      formatterParams: {
        label: "바로가기",
        urlPrefix: "", // tabulator link 적용하기.
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
    layout: "fitColumns",
    pagination: true,
    paginationMode: "local",
    paginationSize: 10,
  };
  return (
    <ContestListWrapper>
      <TabulatorStyle
        className="Table"
        columns={columns}
        data={data}
        options={options}
      />
    </ContestListWrapper>
  );
};

const ContestListWrapper = styled.div`
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
