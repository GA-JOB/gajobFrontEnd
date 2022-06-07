import { useState } from "react";
import { useNavigate } from "react-router";
import { useParams, useLocation } from "react-router-dom";
import { Loading } from "components/loading";
import { StudyRecruitmentForm } from "components/common/StudyRecruitmentForm";
import { ButtonType } from "components/button/ButtonType";
import styled from "styled-components";
import { useStudy } from "hooks/api/study";

export const StudyRecruitApplicant = () => {
  const { postId, studentId } = useParams();
  const { state: data }: any = useLocation();
  const { recruitResultStudy } = useStudy();
  const navigate = useNavigate();

  const onClickrRecruitResult = (recruitResult: string) => {
    recruitResultStudy({
      postId: Number(postId),
      studentId: Number(studentId),
      result: recruitResult,
    });
  };

  if (!data) <Loading></Loading>;
  return (
    <StudyRecruitWrapper>
      <StudyRecruitmentForm introduction={data.content} isResult={true} />
      상태: <span>{data.result}</span>
      <ResultBtn>
        <ButtonType
          variants={data.result !== "반려" ? "text" : ""}
          title={"승인"}
          onClick={() => {
            onClickrRecruitResult("승인");
          }}
          widthStyle={"50%"}
        />
        <ButtonType
          variants={data.result !== "승인" ? "text" : ""}
          title={"반려"}
          onClick={() => {
            onClickrRecruitResult("반려");
          }}
          widthStyle={"50%"}
        />
      </ResultBtn>
      <ButtonWrapper>
        <ButtonType
          variants="text"
          title={"목록으로"}
          onClick={() => navigate(-1)}
        />
      </ButtonWrapper>
    </StudyRecruitWrapper>
  );
};

const StudyRecruitWrapper = styled.div`
  width: 50%;
  padding: 3vw;
  justify-content: center;
  align-items: center;
`;
const ResultBtn = styled.div`
  justify-content: center;
  align-items: center;
  padding: 0 15vw;
`;
const ButtonWrapper = styled.div`
  text-align: center;
  margin: 1vw 0;
`;
