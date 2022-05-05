import { useState } from "react";
import { CommentForm } from "components/common/CommentForm";
import { PostDelete } from "pages/community/PostDelete";
import styled from "styled-components";
import { Edit } from "@mui/icons-material";
import storage from "hooks/store";
import useGetComment from "hooks/api/community/useGetComment";

interface ICommentProps {
  postId: number;
  postWriter: string | undefined;
}
export const CommentList = ({ postId, postWriter }: ICommentProps) => {
  const nickname = storage.get("user-nickname");

  const { data } = useGetComment(postId);
  const [commentId, setCommentId] = useState<number>(0);
  const isEditComment = commentId > 0;

  const IconStyle = {
    fontSize: 15,
    margin: "5px",
    color: "black",
    opacity: "0.8",
  };

  if (!data) return <></>;
  return (
    <>
      {data?.map((comment: any, index: number) => (
        <CommentWrapper key={index}>
          <Writer>
            {postWriter === comment.nickname
              ? "작성자"
              : comment.nickname + " "}
            <CreateDate>
              {comment.createdDate === comment.modifiedDate ? (
                <>{comment.createdDate}</>
              ) : (
                <>{comment.modifiedDate} 수정됨.</>
              )}
            </CreateDate>
          </Writer>
          <PostContent>{comment.comment}</PostContent>

          {comment.nickname === nickname ? (
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
              <PostDelete postId={postId} commentId={comment.id} />

              {commentId === comment.id ? (
                <CommentForm
                  id={postId}
                  comment={comment.comment}
                  commentId={comment.id}
                />
              ) : null}
            </ButtonTypeBox>
          ) : null}
        </CommentWrapper>
      ))}
    </>
  );
};

const CommentWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 3vw;
  border-top: 1px solid #eaeaea;
`;

const Writer = styled.div`
  margin: 5px;
  font-size: 12pt;
  font-weight: bold;
`;
const CreateDate = styled.span`
  margin-left: 5px;
  font-size: 10pt;
  font-weight: lighter;
  color: gray;
`;

const PostContent = styled.div`
  font-size: 12pt;
  padding-top: 1vw;
  font-weight: lighter;
`;

const ButtonTypeBox = styled.div`
  padding: 1vw;
  text-align: right;
`;
const EditWrapper = styled.span`
  margin: 1vw;
  font-size: 10pt;
  opacity: 0.8;
  cursor: pointer;
`;
