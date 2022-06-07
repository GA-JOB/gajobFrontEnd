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
    <>
      <StudyRecruitmentForm introduction={data.content} isResult={true} />
      현재 상태: {data.result}
      <ButtonType
        title={"승인"}
        onClick={() => {
          onClickrRecruitResult("승인");
        }}
      />
      <ButtonType
        title={"반려"}
        onClick={() => {
          onClickrRecruitResult("반려");
        }}
      />
      <ButtonWrapper>
        <ButtonType
          variants="text"
          title={"목록으로"}
          onClick={() => navigate(-1)}
        />
      </ButtonWrapper>
    </>
  );
};

const ButtonWrapper = styled.div`
  text-align: center;
  margin: 1vw 0;
`;
