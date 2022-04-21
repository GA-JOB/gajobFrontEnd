import { useState } from "react";
import { ButtonType } from "components/button/ButtonType";
import { Modal } from "components/common/Modal";
import { ModalContent } from "components/common/Modal/ModalContent";
import styled from "styled-components";
import { Delete } from "@mui/icons-material";
import { useCommunity } from "hooks/api/community";

interface IDeleteProps {
  postId: number;
  commentId?: number;
}

export const PostDelete = ({ postId, commentId }: IDeleteProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const IconStyle = {
    fontSize: 15,
    margin: "5px",
    color: "black",
    opacity: "0.8",
  };

  // 해당 id delete
  const { deletePost, deleteComment } = useCommunity();
  const onClickDeleteBtn = () => {
    if (!commentId) {
      deletePost(postId);
    } else {
      deleteComment(postId, commentId);
    }

    setOpenModal(false);
  };

  return (
    <DeleteWrapper onClick={() => setOpenModal((openModal) => !openModal)}>
      삭제
      <Delete style={IconStyle} />
      <Modal
        show={openModal}
        onClose={() => setOpenModal((openModal) => !openModal)}
      >
        <ModalContent
          title=""
          onClose={() => setOpenModal((openModal) => !openModal)}
        >
          <ModalTxt>
            {commentId ? "댓글" : "게시글"}을 정말로 삭제하시겠습니까?
            <br />
            삭제된 이후 되돌릴 수 없습니다.
          </ModalTxt>
          <ButtonType
            title="삭제"
            onClick={onClickDeleteBtn}
            buttonColor="black"
            widthStyle="100%"
          />
        </ModalContent>
      </Modal>
    </DeleteWrapper>
  );
};

const DeleteWrapper = styled.span`
  margin: 0 0.5vw;
  font-size: 10pt;
  opacity: 0.8;
  cursor: pointer;
`;
const ModalTxt = styled.div`
  text-align: center;
`;
