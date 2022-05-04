import { Loading } from "components/loading";
import styled from "styled-components";
import "react-tabulator/lib/styles.css"; // default theme
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css"; // use Theme(s)
import { ReactTabulator } from "react-tabulator";
import { ColumnDefinition, ReactTabulatorOptions } from "react-tabulator";
import { IContestCrawling } from "types";

interface IContestProps {
  data?: IContestCrawling[];
}

export const ContestList = ({ data }: IContestProps) => {
  const columns: ColumnDefinition[] | any = [
    {
      title: "id",
      field: "id",
      hozAlign: "center",
      fontSize: "10pt",
      vertAlign: "middle",
      width: 1,
    },
    {
      title: "제목",
      field: "title",
      width: 300,
    },
    {
      title: "주최기관",
      field: "organization",
      width: 100,
    },
    {
      title: "카테고리",
      field: "category",
      hozAlign: "center",
      vertAlign: "middle",
      width: 120,
    },
    {
      title: "모집상태",
      field: "state",
      hozAlign: "center",
      vertAlign: "middle",
      width: 100,
    },
    {
      title: "현재상태",
      field: "todayState",
      hozAlign: "center",
      vertAlign: "middle",
      width: 100,
    },
    {
      title: "바로가기",
      field: "url",
      formatter: "link",
      formatterParams: {
        label: "Click here",
        urlPrefix: "https://" || "http://", // tabulator link 적용하기.
        urlField: "url",
        target: "_blank", // 새 탭에서 링크를 열기 위함.
      },
      width: 100,
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
  width: 95%;

  @media screen and (max-width: 900px) {
    display: none;
  }
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
