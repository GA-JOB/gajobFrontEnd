import { useState } from "react";
import { ButtonType } from "components/button/ButtonType";
import styled from "styled-components";
import { useCommunity } from "hooks/api/community/index";

interface ICommentProps {
  id: number;
  commentId?: number;
  comment?: string;
}

export const CommentForm = ({
  id,
  commentId = 0,
  comment = "",
}: ICommentProps) => {
  const { postComment, editComment } = useCommunity();
  const isComment = commentId > 0;

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
      window.confirm(`댓글을 ${isComment ? "수정" : "등록"}하시겠습니까?`) ===
      true
    ) {
      console.log(form);

      if (!isComment) {
        postComment({
          id: id,
          comment: commentForm,
        });

        setForm({ commentForm: "" });
      } else {
        editComment({
          postId: id,
          commentId: commentId,
          comment: commentForm,
        });

        setForm({ commentForm: "" });
      }
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
            title={isComment ? "수정" : "등록"}
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
`;

const InputStyle = styled.textarea`
  width: 100%;
  height: 4vw;
  margin: 2vw 0 0 2vw;
  padding: 1vw;
  border: 1px solid lightgray;
  border-radius: 5px;

  font-size: 11pt;
`;

const ButtonStyle = styled.span`
  width: 20%;
  margin-left: 1vw;
`;
