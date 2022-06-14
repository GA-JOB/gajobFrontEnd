import { useNavigate } from "react-router-dom";
import { Loading } from "components/loading";
import "react-tabulator/lib/styles.css"; // default theme
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css"; // use Theme(s)
import { ReactTabulator } from "react-tabulator";
import { ColumnDefinition, ReactTabulatorOptions } from "react-tabulator";
import styled from "styled-components";
import { IStudyRecruitment } from "types/index";

interface IApplicantsListProps {
  data?: IStudyRecruitment[];
  isMypage: boolean;
}
export const StudyApplicantsList = ({
  data,
  isMypage,
}: IApplicantsListProps) => {
  const navigate = useNavigate();

  const columns: ColumnDefinition[] | any = [
    { formatter: "rownum", hozAlign: "center", headerSort: false },
    {
      title: "신청자",
      field: "name",
      display: "block",
      width: "10%",
      hozAlign: "left",
      headerSort: false, //sorting 안함
    },

    {
      title: "학번",
      field: "studentId",
      width: "15%",
      hozAlign: "left",
      headerSort: false,
    },
    {
      title: "한줄 소개",
      field: "content",
      width: "35%",
      hozAlign: "left",
      headerSort: false,
    },
    {
      title: "신청일",
      field: "applicationDate",
      width: "20%",
      hozAlign: "left",
      headerSort: false,
    },
    {
      title: "상태",
      field: "result",
      width: "10%",
      hozAlign: "left",
      headerSort: false,
    },
  ];

  const options: ReactTabulatorOptions = {
    pagination: true,
    paginationMode: "local",
    paginationSize: 5,
  };
  const rowClickHandler = (e: any, data: any) => {
    const studentId = data._row.data.id; // 선택한 id 값
    navigate(`/study/${data._row.data.postId}/applicants/${studentId}`, {
      state: { data: data._row.data, isMypage: isMypage },
    });
  };

  if (!data) return <Loading />;
  return (
    <ApplicantsWrapper>
      {data?.length !== 0 ? (
        <TabulatorStyle
          className="Table"
          columns={columns}
          data={data}
          options={options}
          events={{ rowClick: rowClickHandler }}
        />
      ) : (
        <>
          {!isMypage ? "신청자가 없습니다." : "신청 내역이 존재하지 않습니다."}
        </>
      )}
    </ApplicantsWrapper>
  );
};

const ApplicantsWrapper = styled.div`
  font-weight: lighter;
  text-align: center;
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
