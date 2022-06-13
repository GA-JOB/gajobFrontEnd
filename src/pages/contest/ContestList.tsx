import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const columns: ColumnDefinition[] | any = [
    {
      formatter: "rownum",
      hozAlign: "center",
      fontSize: "10pt",
      vertAlign: "middle",
      width: "5%",
      headerSort: false,
    },
    {
      title: "제목",
      field: "title",
      hozAlign: "left",
      width: "30%",
      headerSort: false,
    },
    {
      title: "주최기관",
      field: "organization",
      hozAlign: "left",
      width: "20%",
      headerSort: false,
    },
    {
      title: "카테고리",
      field: "categories",
      hozAlign: "left",
      vertAlign: "middle",
      width: "15%",
      headerSort: false,
    },
    {
      title: "대상",
      field: "targets",
      hozAlign: "left",
      vertAlign: "middle",
      width: "14%",
      headerSort: false,
    },
    {
      title: "모집상태",
      field: "state",
      hozAlign: "center",
      vertAlign: "middle",
      width: "8%",
      headerSort: false,
    },
    {
      title: "모집기한",
      field: "todayState",
      hozAlign: "center",
      vertAlign: "middle",
      width: "8%",
      headerSort: false,
    },
    // {
    //   title: "바로가기",
    //   field: "url",
    //   formatter: "link",
    //   formatterParams: {
    //     label: "Click here",
    //     urlPrefix: "https://" || "http://", // tabulator link 적용하기.
    //     urlField: "url",
    //     target: "_blank", // 새 탭에서 링크를 열기 위함.
    //   },
    //   width: 100,
    //   hozAlign: "center",
    //   vertAlign: "middle",
    // },
  ];

  const options: ReactTabulatorOptions = {
    height: "100%",
    layout: "fitColumns",
    pagination: true,
    paginationMode: "local",
    paginationSize: 10,
  };
  const rowClickHandler = (e: any, data: any) => {
    const contestUrl = data._row.data.url; // 선택한 id 값
    window.location.href = `https://${contestUrl}`;
  };

  if (!data) return <></>;
  return (
    <>
      <ContestListWrapper>
        <SubTitle>⭐️ 모집중인 공모전</SubTitle>
        <TabulatorStyle
          className="Table"
          columns={columns}
          data={data}
          options={options}
          events={{ rowClick: rowClickHandler }}
        />
      </ContestListWrapper>
    </>
  );
};

const ContestListWrapper = styled.div`
  width: 95%;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;
const SubTitle = styled.div`
  margin: 1vw 0;
  font-size: 15pt;
  font-weight: lighter;
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
