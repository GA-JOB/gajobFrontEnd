import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useGetPieceStudy from "hooks/api/study/useGetPieceStudy";
import { Loading } from "components/loading";
import styled from "styled-components";
import { Visibility, ChatBubble, Edit } from "@mui/icons-material";
import useGetAuth from "hooks/api/auth/useGetAuth";
import { CommentForm } from "components/common/CommentForm";
import { ButtonType } from "components/button/ButtonType";
export const StudyDetails = () => {
  const { id } = useParams(); // id
  const { data } = useGetPieceStudy(Number(id));
  const user = useGetAuth();
  const nickname = user.data?.nickname;
  const [commentId, setCommentId] = useState<number>(0);
  const isEditComment = commentId > 0;
  const IconStyle = {
    fontSize: 15,
    margin: "5px",
    color: "black",
    opacity: "0.8",
  };
  console.log(user.data?.nickname);
  if (!data) return <Loading />;
  // const studyId = match.params.id
  return (
    <ViewDetailWrapper>
      <DetailContent>
        <Writer>
          {data.writer}{" "}
          <CreateDate>
            {data.createdDate === data.modifiedDate ? (
              <>{data.createdDate}</>
            ) : (
              <>{data.modifiedDate} 수정됨.</>
            )}
          </CreateDate>
        </Writer>
        <ContentContainer>
          <Title>{data.title}</Title>
          <PostContent>{data.content}</PostContent>

          {/* login uer === post writer일 경우 수정 or 삭제 */}
          {/* {data.writer === nickname ? (
            <ButtonTypeBox>
              <PostEdit
                id={id}
                title={data.title}
                content={data.content}
                postCategory={data.postCategory}
              />

              <PostDelete postId={id} />
            </ButtonTypeBox>
          ) : null} */}
        </ContentContainer>
        <IconWrapper>
          <IconContent>
            <Visibility style={IconStyle} />
            {data.view}
          </IconContent>
          <IconContent>
            <ChatBubble style={IconStyle} />
          </IconContent>
        </IconWrapper>
      </DetailContent>

      {/* 댓글 */}
      {data.comments?.map((comment: any, index: number) => (
        <CommentWrapper key={index}>
          <Writer>
            {comment.nickname}{" "}
            <CreateDate>
              {data.createdDate === data.modifiedDate ? (
                <>{data.createdDate}</>
              ) : (
                <>{data.modifiedDate} 수정됨.</>
              )}
            </CreateDate>
          </Writer>
          <PostContent>{comment.comment}</PostContent>

          {/* {comment.nickname === nickname ? (
            <ButtonTypeBox>
              <EditWrapper
                onClick={() => {
                  setCommentId(comment.id);

                  if (isEditComment) {
                    setCommentId(0);
                  }
                }}
              >
                수정
                <Edit style={IconStyle} />
              </EditWrapper>
              <PostDelete postId={id} commentId={comment.id} />

              {commentId === comment.id ? (
                <CommentForm
                  id={id}
                  comment={comment.comment}
                  commentId={comment.id}
                />
              ) : null}
            </ButtonTypeBox>
          ) : null} */}
        </CommentWrapper>
      ))}

      {/* 댓글 */}
      <CommentForm id={data.id} />

      <ButtonWrapper>
        <ButtonType title={"목록으로"} link="/study" buttonColor="black" />
      </ButtonWrapper>
    </ViewDetailWrapper>
  );
};

const ViewDetailWrapper = styled.div`
  width: 100%;
`;
const DetailContent = styled.div`
  padding: 2vw;
`;

const CommentWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 2vw;
  border-top: 1px solid #eaeaea;
`;
const Writer = styled.div`
  margin: 5px;
  font-size: 12pt;
  font-weight: bold;
`;
const ContentContainer = styled.div`
  margin: 3vw 0;
`;
const ButtonTypeBox = styled.div`
  padding: 1vw;
  text-align: right;
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
const CreateDate = styled.span`
  margin-left: 5px;
  font-size: 10pt;
  font-weight: lighter;
  color: gray;
`;

const IconWrapper = styled.div`
  font-size: 11pt;
  opacity: 0.8;
`;
const IconContent = styled.span`
  margin-right: 10px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 85%;
`;

const EditWrapper = styled.span`
  margin: 1vw;
  font-size: 10pt;
  opacity: 0.8;
  cursor: pointer;
`;
