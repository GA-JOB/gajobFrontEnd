import { Link } from "react-router-dom";
import { Loading } from "components/loading";
import { PostCommunity } from "pages/community/PostCommunity";
import styled from "styled-components";
import { Visibility, ChatBubble } from "@mui/icons-material";
import useGetCommunity from "hooks/api/community/useGetCommunity";
import storage from "hooks/store";

interface IPostListProps {
  isMypage: boolean;
  postCategory?: string | null;
}

export const PostList = ({ isMypage, postCategory }: IPostListProps) => {
  const nickname = storage.get("user-nickname");
  const { data } = useGetCommunity();

  const IconStyle = {
    fontSize: 15,
    margin: "5px",
    color: "black",
  };

  if (!data) return <Loading />;
  return (
    <PostListWrapper>
      {!isMypage ? (
        <JobdamPick></JobdamPick>
      ) : (
        <BlankTxt>⭐ 내 게시물 ⭐</BlankTxt>
      )}
      <PostCommunity />

      <PostListContents>
        {data?.length === 0 ? (
          <>
            <BlankTxt>
              {isMypage ? "회원님이 작성한" : "전체"} 게시글이 존재하지
              않습니다.
            </BlankTxt>
          </>
        ) : (
          <>
            {data?.map((list: any, index: number) => (
              <div key={index}>
                {/* 클릭헤 해당하는 카테고리 별 리스트 출력 */}
                {(isMypage === true && nickname === list.writer) ||
                (isMypage === false &&
                  (postCategory === null ||
                    (postCategory !== null &&
                      postCategory === list.postCategory))) ? (
                  // viewId를 params로 넘기며 details url로 이동.
                  <LinkStyle to={`/jobdam/${list.id}`} state={list.likeList}>
                    <PostWrapper>
                      <Writer>
                        {list.writer}{" "}
                        <CreateDate>
                          {list.createdDate === list.modifiedDate ? (
                            <>{list.createdDate}</>
                          ) : (
                            <>{list.modifiedDate} 수정됨.</>
                          )}
                        </CreateDate>
                      </Writer>
                      <ContentContainer>
                        <Title>{list.title}</Title>
                        <PostContent>{list.content}</PostContent>
                      </ContentContainer>
                      <IconWrapper>
                        <IconContent>
                          <Visibility style={IconStyle} />
                          {list.view}
                        </IconContent>
                        <IconContent>
                          <ChatBubble style={IconStyle} />
                          {list.commentsCnt}
                        </IconContent>
                      </IconWrapper>
                    </PostWrapper>
                  </LinkStyle>
                ) : null}
              </div>
            ))}
          </>
        )}
      </PostListContents>
    </PostListWrapper>
  );
};

const PostListWrapper = styled.div`
  background-color: white;
  border-radius: 5px;
`;
const PostListContents = styled.div`
  height: 100%;
`;
const BlankTxt = styled.div`
  text-align: center;
  font-weight: lighter;
  font-size: 13pt;
  padding-bottom: 1vw;
`;
const JobdamPick = styled.div``;
const LinkStyle = styled(Link)`
  text-decoration: none;
  color: black;

  &:hover {
    color: black;
  }
`;
const PostWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 2vw;
  border-top: 1px solid #eaeaea;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }
`;
const Writer = styled.div`
  margin: 5px;
  font-size: 12pt;
  font-weight: bold;
`;
const ContentContainer = styled.div`
  margin: 5px;
`;
const Title = styled.h5`
  color: #333;
  letter-spacing: 1px;
`;
const PostContent = styled.div`
  font-size: 11pt;
  font-weight: lighter;
`;
const CreateDate = styled.span`
  margin-left: 5px;
  font-size: 10pt;
  font-weight: lighter;
  color: gray;
`;

const IconWrapper = styled.div`
  font-size: 10pt;
  opacity: 0.6;
`;
const IconContent = styled.span`
  margin-right: 10px;
`;
