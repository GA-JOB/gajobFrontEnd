import { useLocation } from "react-router";
import { useParams, useNavigate } from "react-router-dom";
import { MenuTitle } from "components/Menutitle";
import { ButtonType } from "components/button/ButtonType";
import { StudyRecruitmentForm } from "components/common/StudyRecruitmentForm";
import styled from "styled-components";
import useGetAuth from "hooks/api/auth/useGetAuth";

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
        <BoxWrapper>
          <InfoTitle> 📖 스터디 정보</InfoTitle>
          <Content>
            <ContentTitle>
              작성자 <Contents>{data.writer}</Contents>
            </ContentTitle>
            <ContentTitle>
              카테고리 <Contents>{data.studyCategory}</Contents>
            </ContentTitle>
            <ContentTitle>
              제목 <Contents>{data.title}</Contents>
            </ContentTitle>
            <ContentTitle>
              내용 <Contents>{data.content}</Contents>
            </ContentTitle>
            <ContentTitle>
              지역 <Contents>{data.area}</Contents>
            </ContentTitle>
            <ContentTitle>
              모집기간
              <Contents> {data.startDate + " ~ " + data.endDate}</Contents>
            </ContentTitle>
            <ContentTitle>
              경쟁률 현황
              <Contents>
                {competeRate} : 1{" "}
                {"(신청인원 : " +
                  data.supplyCnt +
                  " / 모집 최대인원: " +
                  data.maxPeople +
                  ")"}
              </Contents>
            </ContentTitle>
          </Content>
        </BoxWrapper>

        <BoxWrapper>
          <InfoTitle> 신청자 소개 </InfoTitle>
          <StudyRecruitmentForm isResult={false} />
        </BoxWrapper>
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
const BoxWrapper = styled.div`
  width: 40%;
  height: 48vw;
  margin: 0 1vw;
`;
const InfoTitle = styled.h4`
  margin: 1vw 0;
  text-align: center;
  /* font-weight: lighter; */
`;
const Content = styled.div`
  margin: 1vw;
  padding: 0 1vw;
  border-top: 3px solid #002187;
  border-bottom: 3px solid #002187;
`;
const ContentTitle = styled.div`
  padding: 0.6vw 0;
  line-height: 2vw;
`;
const Contents = styled.div`
  border-top: 1px solid #eaeaea;
  font-size: 13pt;
  font-weight: lighter;
  height: 35px;

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const ButtonWrapper = styled.div`
  text-align: center;
  margin: 1vw 0;
`;
