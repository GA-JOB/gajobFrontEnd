import { useNavigate } from "react-router";
import { useParams, useLocation } from "react-router-dom";
import { Loading } from "components/loading";
import { StudyRecruitmentForm } from "components/common/StudyRecruitmentForm";
import { ButtonType } from "components/button/ButtonType";
import styled from "styled-components";
import { ArrowBack } from "@mui/icons-material";
import { useStudy } from "hooks/api/study";

export const StudyRecruitApplicant = () => {
  const { postId, studentId } = useParams();
  const { state: data }: any = useLocation();
  const { recruitResultStudy, deleteRecruitStudy } = useStudy();
  const navigate = useNavigate();

  const onClickrRecruitResult = (recruitResult: string) => {
    recruitResultStudy({
      postId: Number(postId),
      studentId: Number(studentId),
      result: recruitResult,
    });
  };

  const approveColor = {
    color: "green",
    border: "2px solid green",
  };
  const denyColor = {
    color: "red",
    border: "2px solid red",
  };

  if (!data) <Loading></Loading>;
  return (
    <StudyRecruitWrapper>
      <InfoTitle>신청자 정보 </InfoTitle>{" "}
      <IconWrapper>
        {!data.isMypage ? (
          <ArrowBack onClick={() => navigate(-1)} />
        ) : (
          <ButtonType
            variants="text"
            link={`/study/${Number(postId)}`}
            title={"< 상세페이지로"}
          />
        )}
      </IconWrapper>
      <Status style={data.data.result === "승인" ? approveColor : denyColor}>
        {data.data.result}
      </Status>
      <StudyRecruitmentForm introduction={data.data.content} isResult={true} />
      {!data.isMypage ? (
        <ResultBtn>
          <ButtonType
            variants={data.data.result !== "반려" ? "text" : ""}
            title={"승인"}
            onClick={() => {
              onClickrRecruitResult("승인");
            }}
            widthStyle={"10%"}
          />
          <ButtonType
            variants={data.data.result !== "승인" ? "text" : ""}
            title={"반려"}
            onClick={() => {
              onClickrRecruitResult("반려");
            }}
            widthStyle={"10%"}
          />
        </ResultBtn>
      ) : (
        <ResultBtn>
          <ButtonType
            variants="text"
            title="신청 취소"
            onClick={() => deleteRecruitStudy(Number(postId))}
          ></ButtonType>
        </ResultBtn>
      )}
    </StudyRecruitWrapper>
  );
};

const StudyRecruitWrapper = styled.div`
  width: 50%;
  padding: 3vw;
  justify-content: center;
  align-items: center;
`;
const InfoTitle = styled.h4`
  margin: 1vw 0;
  text-align: center;
  font-weight: lighter;
`;
const IconWrapper = styled.span`
  margin: 0 1vw;
  cursor: pointer;
  width: 10px;
`;
const Status = styled.span`
  float: right;
  color: black;
  font-size: 11pt;
  font-weight: bold;
  padding: 0.2vw 1vw;
  border: 2px solid black;
  border-radius: 20px;
`;

const ResultBtn = styled.span`
  margin-left: 45%;
  width: 100%;
`;
