import { Loading } from "components/loading";
import { PostCommunity } from "pages/community/PostCommunity";
import styled from "styled-components";
import { Visibility, ChatBubble } from "@mui/icons-material";
import useGetCommunity from "hooks/api/community/useGetCommunity";
import { Link } from "react-router-dom";

interface IPostListProps {
  postCategory: string | null;
}

export const PostList = ({ postCategory }: IPostListProps) => {
  const { data } = useGetCommunity();

  const IconStyle = {
    fontSize: 15,
    margin: "5px",
    color: "black",
  };

  if (!data) return <Loading />;
  return (
    <>
      <JobdamPick></JobdamPick>
      <PostCommunity />

      {data?.map((list: any, index: number) => (
        <div key={index}>
          {/* 클릭헤 해당하는 카테고리 별 리스트 출력 */}
          {(postCategory === null ||
            (postCategory !== null && postCategory === list.postCategory)) && (
            // viewId를 params로 넘기며 details url로 이동.
            <LinkStyle to={`${list.id}`}>
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
          )}
        </div>
      ))}
    </>
  );
};

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
