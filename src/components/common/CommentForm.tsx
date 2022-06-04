import { useState } from "react";
import { ButtonType } from "components/button/ButtonType";
import styled from "styled-components";
import { Checkbox } from "@mui/material";
import { Lock, LockOpen } from "@mui/icons-material";
import { useCommunity } from "hooks/api/community/index";
import { useStudy } from "hooks/api/study/index";
interface ICommentProps {
  id: number;
  commentId?: number;
  commentStudyId?: number;
  comment?: string;
  isSecret: boolean;
  isStudy: boolean;
}

export const CommentForm = ({
  id,
  commentId = 0,
  commentStudyId = 0,
  comment = "",
  isSecret,
  isStudy,
}: ICommentProps) => {
  const { postComment, editComment } = useCommunity();
  const { postStudyComment, editStudyComment } = useStudy();

  const isEditComment = commentId > 0;
  const isEditStudyComment = commentStudyId > 0;

  const [checked, setChecked] = useState<boolean>(isSecret);

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
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
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
            isSecret: checked,
          });
        } else {
          editStudyComment({
            postId: id,
            commentId: commentStudyId,
            comment: commentForm,
            isSecret: checked,
          });
        }
      } else {
        // 커뮤니티 댓글
        if (!isStudy && !isEditComment) {
          postComment({
            id: id,
            comment: commentForm,
            isSecret: checked,
          });
        } else {
          editComment({
            postId: id,
            commentId: commentId,
            comment: commentForm,
            isSecret: checked,
          });
        }
      }

      setForm({ commentForm: "" });
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <InputWrapper>
          <Checkbox
            checked={checked}
            onChange={handleChange}
            size="small"
            inputProps={{ "aria-label": "controlled" }}
            sx={{
              color: "gray",
              "&.Mui-checked": {
                color: "#EDD200",
              },
            }}
            icon={<LockOpen />}
            checkedIcon={<Lock />}
          />
          <CheckLabel>비밀 댓글 {checked === true ? "ON" : "OFF"}</CheckLabel>
          <InputStyle
            name="commentForm"
            value={commentForm}
            placeholder="댓글을 입력하세요."
            onChange={onTextAreaChange}
          ></InputStyle>
        </InputWrapper>

        <ButtonWrapper>
          <ButtonType
            disabled={commentForm === "" ? true : false}
            title={isEditComment ? "수정" : "등록"}
            widthStyle={"50%"}
            paddingStyle="1vw"
          />
        </ButtonWrapper>
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
const InputWrapper = styled.div`
  width: 100%;
`;
const CheckLabel = styled.span`
  font-size: 11pt;
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

const ButtonWrapper = styled.div`
  width: 20%;
  margin: 2vw 0 0 2vw;
`;
