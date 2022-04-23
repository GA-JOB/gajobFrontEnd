import { useState } from "react";
import { PostDetails } from "./PostDetails";
import { PostEdit } from "./PostEdit";
import { PostDelete } from "./PostDelete";
import { PostCommunity } from "./PostCommunity";
import styled from "styled-components";
import { Visibility, ChatBubble } from "@mui/icons-material";
import useGetCommunity from "hooks/api/community/useGetCommunity";

interface IPostListProps {
  postCategory: string | null;
  nickname?: string;
}

export const PostList = ({ postCategory, nickname }: IPostListProps) => {
  const { data } = useGetCommunity();

  const [viewId, setViewId] = useState<number | null>(null);
  const IconStyle = {
    fontSize: 15,
    margin: "5px",
    color: "black",
  };

  return (
    <>
      {viewId === null ? (
        <>
          <JobdamPick></JobdamPick>
          <PostCommunity />

          {data?.map((list: any, index: number) => (
            <div key={index}>
              {(postCategory === null ||
                (postCategory !== null &&
                  postCategory === list.postCategory)) && (
                <div>
                  <PostWrapper
                    onClick={() => {
                      setViewId(list.id);
                    }}
                  >
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
                      </IconContent>
                    </IconWrapper>
                  </PostWrapper>
                </div>
              )}
            </div>
          ))}
        </>
      ) : (
        <>
          <PostDetails id={viewId} nickname={nickname} />
        </>
      )}
    </>
  );
};

const JobdamPick = styled.div``;

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
