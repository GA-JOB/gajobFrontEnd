import { useState } from "react";
import { PostList } from "pages/community/PostList";
import { StudyList } from "pages/study/StudyList";
import styled from "styled-components";
import useGetMyStudyPosts from "hooks/api/study/useGetMyStudyPosts";

export const MyPosts = () => {
  const { data } = useGetMyStudyPosts();
  const [postType, setPostType] = useState<string>("커뮤니티");

  // 상태 표시 style
  const selectBtn = {
    backgroundColor: "#eaeaea",
    borderRadius: "10px",
  };
  const noSelectBtn = {};

  return (
    <MyPostsWrapper>
      <SideNavWrapper>
        <SideNav>
          <NavTitle>내 게시물</NavTitle>
          <NavList
            style={postType === "커뮤니티" ? selectBtn : noSelectBtn}
            onClick={() => setPostType("커뮤니티")}
          >
            🔥 JOB담
          </NavList>
          <NavList
            style={postType === "스터디" ? selectBtn : noSelectBtn}
            onClick={() => setPostType("스터디")}
          >
            ⭐️ STUDY
          </NavList>
        </SideNav>
      </SideNavWrapper>

      <ContentWrapper>
        {postType === "커뮤니티" ? (
          // 커뮤니티
          <PostList isMypage={true} />
        ) : (
          // 스터디
          <StudyList data={data} isMypage={true} />
        )}
      </ContentWrapper>
    </MyPostsWrapper>
  );
};

const MyPostsWrapper = styled.div`
  width: 100%;
  padding: 5vw;
  background-color: #eaeaea;

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

  width: 16%;
  margin-top: 18vw;
  margin-left: 6vw;
  padding: 1vw;
  border: 1px solid lightgray;
  background-color: white;
  border-radius: 5px;

  @media screen and (max-width: 1000px) {
    display: none;
  }
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
  width: 90%;
  height: 45vw;
  padding: 2vw;
  background-color: white;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  overflow: scroll;
`;
