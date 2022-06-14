import { Loading } from "components/loading";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router";
import { ButtonType } from "components/button/ButtonType";
// import { BookmarkBorder, Bookmark } from "@mui/icons-material";
// import { useJobPosting } from "hooks/api/jobPosting";

export const JobPostingDetails = () => {
  const navigate = useNavigate();
  const { state: data }: any = useLocation();
  // const { postScrap } = useJobPosting();

  // const IconStyle = {
  //   fontSize: 26,
  //   cursor: "pointer",
  // };

  // const onClickScrap = () => {
  //   postScrap(data.id);
  // };

  if (!data) return <Loading />;
  return (
    <JobPostingDetailWrapper>
      <ContentWrapper>
        <Title>
          {data.title} <SubTitle>{data.company}</SubTitle>
        </Title>
        <DateStyle>
          최종수정일: {data.lastModifyDate} (표기: 년월일시분)
        </DateStyle>
        <hr />

        <Content>
          <ContentTitle>기업 정보</ContentTitle>
          <ContentWrapper>
            <div>- 기업명: {data.company}</div>
            <div>- 근무 지역: {data.region}</div>
            <div>- 상세 주소: {data.basicAddress}</div>
          </ContentWrapper>
        </Content>

        <Content>
          <ContentTitle>채용 부문</ContentTitle>
          <LinkToDetail href={data.wantedInfoUrl} target="_blank.">
            모집요강 상세보기
          </LinkToDetail>

          <ContentWrapper>
            <div>- 직무 분야: {data.title}</div>
            <div>- 경력: {data.career}</div>
            <div>- 학력: {data.minEdu}</div>
            <div>- 근무 형태: {data.workType}</div>
            <div>
              - 급여: {data.salaryType} {data.salary}
            </div>
          </ContentWrapper>
        </Content>

        <Content>
          <ContentTitle>모집 기간</ContentTitle>
          <ContentWrapper>
            <div>- 모집 시작일: {data.registrationDate} </div>
            <div>- 모집 마감일: {data.closeDate} </div>
          </ContentWrapper>
        </Content>

        <ButtonWrapper>
          <ButtonType
            variants="standard"
            title={"목록으로"}
            onClick={() => navigate(-1)}
          />
        </ButtonWrapper>
      </ContentWrapper>
      {/* <ScrapRound>
        <BookmarkBorder style={IconStyle} onClick={() => postScrap(data.id)} />
        <IconTxt>scrap</IconTxt>
      </ScrapRound> */}
    </JobPostingDetailWrapper>
  );
};

const JobPostingDetailWrapper = styled.div`
  background-color: #eaeaea;
  width: 100%;
  padding: 5vw;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const ContentWrapper = styled.div`
  width: 70%;
  margin: 1vw 0;
  padding: 3vw;
  background-color: white;
  border: 1px solid #eaeaea;
  border-radius: 10px;
`;
const Title = styled.h3`
  letter-spacing: 3px;
  font-weight: 600;
`;
const SubTitle = styled.span`
  font-size: 11pt;
  font-weight: lighter;
  margin: 1vw;
  opacity: 0.6;
`;
const DateStyle = styled.div`
  letter-spacing: 1px;
  margin: 1vw 0.5vw;
  font-size: 9pt;
`;
const ContentTitle = styled.div`
  width: 10%;
  text-align: left;
  font-weight: bold;
  font-size: 15pt;
  border-bottom: 2px solid darkblue;
`;
const Content = styled.div`
  margin: 2vw 0;
  line-height: 2vw;
`;
const LinkToDetail = styled.a`
  font-size: 10pt;
  text-decoration: none;
`;

const ButtonWrapper = styled.div`
  text-align: center;
`;
// const ScrapRound = styled.div`
//   position: fixed;
//   top: 400px;
//   right: 180px;
//   padding: 0.8vw;
//   border-radius: 50px;
//   background-color: white;
// `;
// const IconTxt = styled.div`
//   text-align: center;
//   font-size: 8pt;
//   font-weight: bold;
// `;
