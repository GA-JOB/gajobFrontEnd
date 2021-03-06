import { useState } from "react";
import { CommentForm } from "components/common/CommentForm";
import { StudyDelete } from "./StudyDetele";
import styled from "styled-components";
import { Edit, Lock } from "@mui/icons-material";
import storage from "hooks/store";

interface ICommentProps {
  studyId: number;
  postWriter: string;
  commentList: string[];
}
export const CommentList = ({
  studyId,
  postWriter,
  commentList,
}: ICommentProps) => {
  const nickname = storage.get("user-nickname");

  const [commentId, setCommentId] = useState<number>(0);
  const isEditComment = commentId > 0;

  const IconStyle = {
    fontSize: 15,
    margin: "5px",
    color: "black",
    opacity: "0.8",
  };

  return (
    <>
      {commentList.length !== 0 ? (
        <>
          {commentList?.map((comment: any, index: number) => (
            <CommentWrapper key={index}>
              <Writer>
                {comment.isSecret ? (
                  <Lock fontSize="small" style={IconStyle} />
                ) : null}
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
                      {!isEditComment ? "수정" : "닫기"}
                      <Edit style={IconStyle} />
                    </EditWrapper>
                    <StudyDelete studyId={studyId} commentId={comment.id} />
                  </ButtonTypeBox>
                ) : null}
              </Writer>

              {/* 비밀댓글 로직 구현 -> 비밀댓글일 경우, 게시글 작성자 및 댓글 작성자 본인만 조회 가능. */}
              {comment.isSecret === false ||
              (comment.isSecret === true &&
                (comment.nickname === nickname || postWriter === nickname)) ? (
                <>
                  {commentId === comment.id ? (
                    <CommentForm
                      id={studyId}
                      comment={comment.comment}
                      commentStudyId={comment.id}
                      isStudy={true}
                      isSecret={comment.isSecret}
                    />
                  ) : (
                    <PostContent>{comment.comment}</PostContent>
                  )}
                </>
              ) : (
                <PostContent> 비밀 댓글입니다.</PostContent>
              )}
            </CommentWrapper>
          ))}
        </>
      ) : (
        <BlankInfo>
          <ImgStyle
            src="https://png.pngtree.com/png-vector/20191024/ourlarge/pngtree-comment-icon-isolated-on-background-png-image_1861070.jpg"
            width={"6%"}
          />
          첫 댓글을 남겨주세요 !
        </BlankInfo>
      )}
    </>
  );
};

const CommentWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 3vw;
  border-top: 1px solid #eaeaea;
  white-space: pre-line;
`;
const BlankInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column; /*수평 정렬*/
  align-items: center;
  justify-content: center;

  border-top: 1px solid #eaeaea;
  padding: 2vw;
  font-size: 11pt;
  font-weight: lighter;
`;
const ImgStyle = styled.img`
  vertical-align: middle;
  margin: 1vw;
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
  padding-left: 1vw;
  font-weight: lighter;
`;

const ButtonTypeBox = styled.span`
  margin-left: 1vw;
  font-weight: lighter;
`;
const EditWrapper = styled.span`
  margin: 0.3vw;
  font-size: 9pt;
  opacity: 0.8;
  cursor: pointer;
`;
