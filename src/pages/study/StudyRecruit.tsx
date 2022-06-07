import { useLocation } from "react-router";
import { useParams, useNavigate } from "react-router-dom";
import { MenuTitle } from "components/Menutitle";
import { ButtonType } from "components/button/ButtonType";
import { StudyRecruitmentForm } from "components/common/StudyRecruitmentForm";
import styled from "styled-components";
import useGetAuth from "hooks/api/auth/useGetAuth";

interface StudyRecruitProps {
  title?: string;
  content?: string;
}
export const StudyRecruit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state: data }: any = useLocation();
  const user = useGetAuth();
  const competeRate = data.supplyCnt / data.maxPeople;

  if (!data && !user) return <></>;
  return (
    <Box>
      <MenuTitle
        title={"STUDY 신청"}
        info={"STUDY 신청을 위한 정보들을 작성해주세요!"}
      />
      <StudyRecruitWrapper>
        <StudyInfoWrapper>
          <InfoTitle>스터디 정보</InfoTitle>
          <div>작성자</div> {data.writer} <br />
          <div>카테고리</div> {data.studyCategory} <br />
          <div>제목</div> {data.title} <br />
          <div>내용</div> {data.content} <br />
          <div>지역</div> {data.area} <br />
          <div>모집 마감일</div> {data.endDate} <br />
          <div>경쟁률 현황</div> {competeRate} : 1 (신청인원 : {data.supplyCnt}{" "}
          / 모집 최대인원: {data.maxPeople} ) <br />
        </StudyInfoWrapper>

        <StudyRecruitmentForm isResult={false} />
      </StudyRecruitWrapper>

      <ButtonWrapper>
        <ButtonType
          title="상세 페이지로"
          variants="text"
          onClick={() => navigate(-1)}
        />
      </ButtonWrapper>
    </Box>
  );
};
const Box = styled.div`
  width: 100%;
  padding: 1vw 10vw;
  display: column;
  align-items: center;
  justify-content: center;
`;
const StudyRecruitWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const StudyInfoWrapper = styled.div`
  width: 40%;
  margin: 1vw;
`;
const InfoTitle = styled.h4`
  margin: 1vw 0;
  text-align: center;
  font-weight: lighter;
`;
const ButtonWrapper = styled.div`
  text-align: center;
  margin: 1vw 0;
`;
