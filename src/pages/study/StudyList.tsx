import { useState } from "react";
import { Loading } from "components/loading";
import { ButtonType } from "components/button/ButtonType";
import styled from "styled-components";
import "react-tabulator/lib/styles.css"; // default theme
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css"; // use Theme(s)
import { ReactTabulator } from "react-tabulator";
import { ColumnDefinition, ReactTabulatorOptions } from "react-tabulator";
import { IStudy } from "types";
import "styles/tabulator.scss";
import { useNavigate } from "react-router-dom";

interface IStudyProps {
  isMypage?: boolean;
  data: IStudy[] | undefined;
}
export const StudyList = ({ isMypage, data }: IStudyProps) => {
  const navigate = useNavigate();

  const [state, setState] = useState<string | null>(null);
  const columns: ColumnDefinition[] | any = [
    { formatter: "rownum", hozAlign: "center", width: "5%", headerSort: false },
    {
      title: "카테고리",
      field: "studyCategory",
      display: "block",
      width: "15%",
      hozAlign: "left",
      headerSort: false,
    },

    {
      title: "제목",
      field: "title",
      width: "25%",
      hozAlign: "left",
      // text-overflow: ellipsis; 사용을 위해 주석처리
      headerSort: false,
    },
    {
      title: "모집인원",
      field: "maxPeople",
      width: "10%",
      hozAlign: "left",
      headerSort: false,
    },
    {
      title: "상세내용",
      field: "content",
      width: "35%",
      hozAlign: "left",
      headerSort: false,
    },
    {
      title: "모집마감일",
      field: "endDate",
      width: "10%",
      hozAlign: "left",
      headerSort: false, //sorting안함
    },
    // {
    //   title: "오픈카톡",
    //   field: "openTalkUrl",
    //   formatter: "link",
    //   formatterParams: {
    //     label: "오픈카톡 링크로 바로가기",
    //     urlPrefix: "", // tabulator link 적용하기.
    //     urlField: "openTalkUrl",
    //     target: "_blank", // 새 탭에서 링크를 열기 위함.
    //   },
    //   width: 150,
    //   hozAlign: "center",
    //   vertAlign: "middle",
    //   headerSort: false,
    // },
  ];

  const options: ReactTabulatorOptions = {
    // height: "100px",
    // layout: "fitColumns",
    pagination: true,
    paginationMode: "local",
    paginationSize: 8,
    // printAsHtml: true,
  };
  const rowClickHandler = (e: any, data: any) => {
    console.log(data._row.data.id); // 선택했을 때 id값
    const id = data._row.data.id;
    navigate(`/study-detail/${id}`);
  };

  // 상태 표시 style
  const selectBtn = {
    backgroundColor: "white",
    border: "1px solid black",
    opacity: "1",
  };
  const noSelectBtn = {
    color: "black",
  };

  if (!data) return <Loading />;
  return (
    <StudyListWrapper>
      <ButtonTypeWrapper>
        <ButtonType
          variants="text"
          title="본인의 관심 분야인 스터디를 만들고 홍보해주세요 !"
          link="/study/posting"
          widthStyle="100%"
        />
      </ButtonTypeWrapper>

      <StateTag>
        <ListStyle
          style={state === null ? selectBtn : noSelectBtn}
          onClick={() => setState(null)}
        >
          # 전체
        </ListStyle>
        <ListStyle
          style={state === "모집중" ? selectBtn : noSelectBtn}
          onClick={() => setState("모집중")}
        >
          # 모집중
        </ListStyle>
        <ListStyle
          style={state === "모집종료" ? selectBtn : noSelectBtn}
          onClick={() => setState("모집종료")}
        >
          #모집종료
        </ListStyle>
      </StateTag>

      <TabulatorStyle
        className="Table"
        columns={columns}
        data={
          state === null
            ? data
            : data?.filter((data) => data.status.startsWith(state))
        }
        options={options}
        events={{ rowClick: rowClickHandler }}
      />
    </StudyListWrapper>
  );
};

const StudyListWrapper = styled.div`
  width: 100%;
`;
const ButtonTypeWrapper = styled.div`
  margin-bottom: 1vw;
  font-size: 12pt;
`;

const StateTag = styled.div`
  width: 100%;
`;
const ListStyle = styled.li`
  list-style: none;
  display: inline-block;
  background-color: #eaeaea;
  border-radius: 15px;
  font-size: 9pt;
  opacity: 0.7;

  margin: 1vw;
  padding: 0.5vw 1vw;
  cursor: pointer;

  &:hover {
    background-color: white;
    border: 1px solid black;
    opacity: 1;
  }
`;

const TabulatorStyle = styled(ReactTabulator)`
  .tabulator .tabulator-tableHolder {
    position: relative;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
  }
`;
