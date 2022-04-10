import { Loading } from "components/loading";
import styled from "styled-components";
import "react-tabulator/lib/styles.css"; // default theme
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css"; // use Theme(s)
import { ReactTabulator } from "react-tabulator";
import { ColumnDefinition, ReactTabulatorOptions } from "react-tabulator";
// import { IContestCrawling } from "types";

interface IContestProps {
  data: any;
}

export const StudyList = ({ data }: IContestProps) => {
  const columns: ColumnDefinition[] | any = [
    { formatter: "rownum", hozAlign: "center", width: 40 },
    {
      title: "카테고리",
      field: "category",
      hozAlign: "center",
      vertAlign: "middle",
      width: 120,
    },

    {
      title: "제목",
      field: "title",
      hozAlign: "center",
      vertAlign: "middle",
      width: 120,
    },
    {
      title: "인원제한",
      field: "limit",
      hozAlign: "center",
      vertAlign: "middle",
      width: 120,
    },

    {
      title: "모집상태",
      field: "state",
      hozAlign: "center",
      vertAlign: "middle",
      width: 160,
    },
    {
      title: "상세내용",
      field: "content",
      hozAlign: "center",
      vertAlign: "middle",
    },
    {
      title: "오픈카톡",
      field: "url",
      formatter: "link",
      formatterParams: {
        label: "오픈카톡 링크로 바로가기",
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

  if (!data) return <Loading />;
  return (
    <StudyListWrapper>
      <TabulatorStyle
        className="Table"
        columns={columns}
        data={data}
        options={options}
      />
    </StudyListWrapper>
  );
};

const StudyListWrapper = styled.div`
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
