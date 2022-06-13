import "react-tabulator/lib/styles.css"; // default theme
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css"; // use Theme(s)
import { ReactTabulator } from "react-tabulator";
import { ColumnDefinition, ReactTabulatorOptions } from "react-tabulator";
import styled from "styled-components";
import { INewsCrawling } from "types";

interface INewsProps {
  searchedData: INewsCrawling[];
}

export const NewsList = ({ searchedData }: INewsProps) => {
  const columns: ColumnDefinition[] | any = [
    {
      formatter: "rownum",
      width: "5%",
      hozAlign: "center",
      vertAlign: "middle",
      headerSort: false,
    },
    {
      title: "이미지",
      field: "imgUrl",
      formatter: "image",
      formatterParams: {
        height: "120px",
        width: "150px",
      },
      width: "15%",
      hozAlign: "left",
      vertAlign: "middle",
      headerSort: false,
    },
    {
      title: "제목",
      field: "title",
      width: "35%",
      hozAlign: "left",
      vertAlign: "middle",
    },
    {
      title: "내용",
      field: "contents",
      width: "35%",
      hozAlign: "left",
      vertAlign: "middle",
    },
    {
      title: "작성일",
      field: "createTime",
      sorter: "date",
      width: "10%",
      hozAlign: "center",
      vertAlign: "middle",
    },
    // {
    //   title: "상세페이지",
    //   field: "url",
    //   formatter: "link",
    //   formatterParams: {
    //     label: "Click Here",
    //     urlPrefix: "https://" || "http://", // tabulator link 적용하기.
    //     urlField: "url",
    //     target: "_blank", // 새 탭에서 링크를 열기 위함.
    //   },
    //   width: 150,
    //   hozAlign: "center",
    //   vertAlign: "middle",
    // },
  ];
  const rowClickHandler = (e: any, data: any) => {
    const newsUrl = data._row.data.url; // 선택한 id 값
    window.location.href = `https://${newsUrl}`;
  };

  const options: ReactTabulatorOptions = {
    height: "100%",
    layout: "fitColumns",
    pagination: true,
    paginationMode: "local",
    paginationSize: 10,
  };

  return (
    <NewsListWrapper>
      <TabulatorStyle
        columns={columns}
        data={searchedData}
        options={options}
        events={{ rowClick: rowClickHandler }}
      />
    </NewsListWrapper>
  );
};

const NewsListWrapper = styled.div`
  width: 100%;

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

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
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
