import { useState } from "react";
import { useNavigate } from "react-router";
import { MenuTitle } from "components/Menutitle";
import { JobPostingList } from "pages/jobPosting/JobPostingList";
import { PostList } from "pages/community/PostList";
import { StudyList } from "pages/study/StudyList";
import { ButtonType } from "components/button/ButtonType";
import styled from "styled-components";
import useGetJobPostingScrap from "hooks/api/jobPosting/useGetJobPostingScrap";
import useGetCommunityScrap from "hooks/api/community/useGetCommunityScrap";
import useGetStudyScrap from "hooks/api/study/useGetStudyScrap";

export const MyScraps = () => {
  const navigate = useNavigate();
  const jobPosting = useGetJobPostingScrap();
  const community = useGetCommunityScrap();
  const study = useGetStudyScrap();

  const [scrapType, setScrapType] = useState<string>("채용공고");

  console.log(community.data);

  // 상태 표시 style
  const selectBtn = {
    backgroundColor: "#eaeaea",
    borderRadius: "10px",
  };
  const noSelectBtn = {};

  if (!(jobPosting?.data && community?.data)) return <></>;
  return (
    <MyScrapsWrapper>
      <MenuTitle
        title="MY SCRAP"
        info="스크랩한 게시물을 한눈에 보세요!"
      ></MenuTitle>

      <Container>
        <SideNavWrapper>
          <SideNav>
            <NavTitle>내 스크랩</NavTitle>
            <NavList
              style={scrapType === "채용공고" ? selectBtn : noSelectBtn}
              onClick={() => setScrapType("채용공고")}
            >
              🔥 채용공고
            </NavList>
            <NavList
              style={scrapType === "공모전" ? selectBtn : noSelectBtn}
              onClick={() => setScrapType("공모전")}
            >
              🪧 공모전
            </NavList>
            <NavList
              style={scrapType === "커뮤니티" ? selectBtn : noSelectBtn}
              onClick={() => setScrapType("커뮤니티")}
            >
              ⭐️ JOB담
            </NavList>
            <NavList
              style={scrapType === "스터디" ? selectBtn : noSelectBtn}
              onClick={() => setScrapType("스터디")}
            >
              📚 STUDY
            </NavList>

            <ButtonWrapper>
              <ButtonType
                variants="text"
                title={"목록으로"}
                onClick={() => navigate(-1)}
              ></ButtonType>
            </ButtonWrapper>
          </SideNav>
        </SideNavWrapper>

        <ContentWrapper>
          {scrapType === "채용공고" && (
            <JobPostingList data={jobPosting?.data} careerState={null} />
          )}
          {scrapType === "커뮤니티" && (
            <PostList
              data={community?.data}
              isMypage={true}
              postCategory={null}
            />
          )}
          {scrapType === "스터디" && (
            <StudyList data={study?.data} isMypage={true} />
          )}
        </ContentWrapper>
      </Container>
    </MyScrapsWrapper>
  );
};

const MyScrapsWrapper = styled.div`
  width: 100%;
  padding: 0 3vw 3vw 0;
  background-color: #eaeaea;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SideNavWrapper = styled.div`
  width: 25%;
  height: 100%;

  vertical-align: baseline;
`;
const SideNav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  width: 15%;
  margin-top: 17vw;
  margin-left: 6vw;
  padding: 1vw;
  border: 1px solid lightgray;
  background-color: white;
  border-radius: 5px;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
const ButtonWrapper = styled.div`
  text-align: center;
`;

const NavTitle = styled.div`
  font-weight: lighter;
  margin: 0.3vw 0.5vw;
`;
const NavList = styled.div`
  list-style: none;
  margin: 0.5vw;
  padding: 0.6vw 1vw;
  font-size: 12pt;
  letter-spacing: 1px;
  cursor: pointer;

  &:hover {
    background-color: #eaeaea;
    border-radius: 10px;
  }
`;

const ContentWrapper = styled.div`
  width: 80%;
  min-height: 45vw;
  padding: 2vw 1vw;
  background-color: white;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;
