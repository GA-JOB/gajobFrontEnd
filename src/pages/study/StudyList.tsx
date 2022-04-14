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
      display: "block",
      width: 120,
    },

    {
      title: "제목",
      field: "title",
      width: 180,
      // text-overflow: ellipsis; 사용을 위해 주석처리
      //   hozAlign: "center",
      //   vertAlign: "middle",

      headerSort: false, //sorting안함
    },
    {
      title: "인원제한",
      field: "limit",
      hozAlign: "center",
      vertAlign: "middle",
      width: 120,
      headerSort: false,
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
      headerSort: false, //sorting안함
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
      headerSort: false,
    },
  ];

  const options: ReactTabulatorOptions = {
    height: "100px",
    layout: "fitColumns",
    pagination: true,
    paginationMode: "local",
    paginationSize: 10,
    printAsHtml: true,
  };
  const rowClickHandler = (e: any, data: any) => {
    console.log(data._row.data);
  };
  if (!data) return <Loading />;
  return (
    <StudyListWrapper>
      <TabulatorStyle
        className="Table"
        columns={columns}
        data={data}
        options={options}
        events={{ rowClick: rowClickHandler }}
      />
    </StudyListWrapper>
  );
};

const StudyListWrapper = styled.div`
  width: 100%;
`;

const TabulatorStyle = styled(ReactTabulator)`
  .tabulator .tabulator-tableHolder {
    position: relative;
    width: 100%;
    white-space: nowrap;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
`;
