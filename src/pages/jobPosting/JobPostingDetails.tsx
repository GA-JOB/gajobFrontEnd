import React from "react";
import { Loading } from "components/loading";
import styled from "styled-components";
import { useLocation } from "react-router";
import { ButtonType } from "components/button/ButtonType";
export const JobPostingDetails = () => {
  const { state: data }: any = useLocation();
  // console.log("detailpage", state);
  if (!data) return <Loading />;
  return (
    <div>
      <ContentContainer>
        <Title>{data.title}</Title>
        <p>
          {data.basicAddress} | {data.company}
        </p>
        <p>지역:{data.region}</p>
        경력: {data.career}
        마감일:{data.closeDate}
        <p>
          급여:{data.salaryType}({data.salary})
        </p>
        <PostContent>{data.content}</PostContent>
        <div>
          <a href={data.wantedInfoUrl} target="_blank.">
            링크로 확인하기
          </a>
          {/* <a href={data.wantedMobileInfoUrl} target="_blank.">
            모바일 링크로 확인하기
          </a> */}
        </div>
      </ContentContainer>
      <ButtonWrapper>
        <ButtonType
          title={"목록으로"}
          link="/job-posting"
          buttonColor="black"
        />
      </ButtonWrapper>
    </div>
  );
};

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 85%;
`;
const ContentContainer = styled.div`
  margin: 3vw 0;
`;
const Title = styled.h4`
  color: #333;
  letter-spacing: 1px;
`;
const PostContent = styled.div`
  font-size: 12pt;
  padding-top: 1vw;
  font-weight: lighter;
`;
// authNum: "K151152205130096"
// basicAddress: "경기도 화성시 팔탄면 터넉골로 202-7"
// career: "경력"
// closeDate: "채용시까지  22-06-30"
// company: "(주)코싸인"
// employTypeCode: 10
// id: 1
// infoSource: "VALIDATION"
// jobCode: null
// lastModifyDate: 202205131430
// maxSalary: 0
// minEdu: "학력무관"
// minSalary: 3000000
// prefCode: ""
// region: "경기 화성시"
// registrationDate: "22-05-13"
// salary: "300만원"
// salaryType: "월급"
// streetNameAddress: 415903210109
// title: "[코싸인] 용접공 및 도장공 모집합니다."
// wantedInfoUrl: "http://www.work.go.kr/empDetailRedirect.do?wantedAuthNo=K151152205130096"
// wantedMobileInfoUrl: "https://m.work.go.kr/regionJobsWorknet/jobDetailView2.do?srchInfotypeNm=VALIDATION&srchWantedAuthNo=K151152205130096"
// workType: "주5일근무"
