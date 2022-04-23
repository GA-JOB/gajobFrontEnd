import { useState } from "react";
import { CommunityForm } from "components/common/CommunityForm";
import { CommentForm } from "components/common/CommentForm";
import styled from "styled-components";
import { Edit } from "@mui/icons-material";

interface IEditProps {
  id: number;
  commentId?: number;
  title?: string | null;
  content?: string | null;
  postCategory?: string | null;
  comment?: string;
}

export const PostEdit = ({
  id,
  commentId,
  title,
  content,
  postCategory,
  comment,
}: IEditProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const IconStyle = {
    fontSize: 15,
    margin: "5px",
    color: "black",
    opacity: "0.8",
  };

  return (
    <EditWrapper onClick={() => setOpenModal((openModal) => !openModal)}>
      수정
      <Edit style={IconStyle} />
      {comment && openModal && (
        <CommentForm id={id} comment={comment} commentId={commentId} />
      )}
      {!comment && openModal && (
        <CommunityForm
          isOpenModal={openModal}
          setIsOpenModal={setOpenModal}
          id={id}
          title={title}
          content={content}
          postCategory={postCategory}
        />
      )}
    </EditWrapper>
  );
};

const EditWrapper = styled.span`
  margin: 0 0.5vw;
  font-size: 10pt;
  opacity: 0.8;
  cursor: pointer;
`;
