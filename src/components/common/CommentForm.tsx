import { useState } from "react";
import { ButtonType } from "components/button/ButtonType";
import styled from "styled-components";
import { useCommunity } from "hooks/api/community/index";
import { useStudy } from "hooks/api/study/index";
interface ICommentProps {
  id: number;
  commentId?: number;
  commentStudyId?: number;
  comment?: string;
  isStudy: boolean;
}

//study랑 community랑 같은 form 쓰고싶어서 if문 넣어 봤더니 실패 저것만 해결 한다면 스터디 댓글 가능
export const CommentForm = ({
  id,
  commentId = 0,
  commentStudyId = 0,
  comment = "",
  isStudy,
}: ICommentProps) => {
  const { postComment, editComment } = useCommunity();
  const { postStudyComment, editStudyComment } = useStudy();
  const isEditComment = commentId > 0;
  const isEditStudyComment = commentStudyId > 0;

  const [form, setForm] = useState({
    commentForm: comment,
  });
  const { commentForm } = form;

  const onTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // commentForm 비어있을 경우 disabled 되도록.
    if (commentForm === "") return;
    if (
      window.confirm(
        `댓글을 ${isEditComment ? "수정" : "등록"}하시겠습니까?`
      ) === true
    ) {
      // 스터디 댓글
      if (isStudy) {
        if (!isEditStudyComment) {
          postStudyComment({
            id: id,
            comment: commentForm,
          });
        } else {
          editStudyComment({
            postId: id,
            commentId: commentStudyId,
            comment: commentForm,
          });
        }
      } else {
        // 커뮤니티 댓글
        if (!isStudy && !isEditComment) {
          postComment({
            id: id,
            comment: commentForm,
          });
        } else {
          editComment({
            postId: id,
            commentId: commentId,
            comment: commentForm,
          });
        }
      }

      setForm({ commentForm: "" });
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <InputStyle
          name="commentForm"
          value={commentForm}
          placeholder="댓글을 입력하세요."
          onChange={onTextAreaChange}
        ></InputStyle>
        <ButtonStyle>
          <ButtonType
            disabled={commentForm === "" ? true : false}
            title={isEditComment ? "수정" : "등록"}
            widthStyle={"50%"}
            paddingStyle="1vw"
          />
        </ButtonStyle>
      </Form>
    </>
  );
};

const Form = styled.form`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 1vw;
`;

const InputStyle = styled.textarea`
  width: 100%;
  height: 4vw;
  padding: 1vw;
  margin-left: 1vw;
  border: 1px solid lightgray;
  border-radius: 5px;

  font-size: 11pt;
`;

const ButtonStyle = styled.span`
  width: 20%;
  margin-left: 2vw;
`;
