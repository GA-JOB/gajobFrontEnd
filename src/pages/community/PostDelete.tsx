import { useState } from "react";
import { ButtonType } from "components/button/ButtonType";
import { Modal } from "components/common/Modal";
import { ModalContent } from "components/common/Modal/ModalContent";
import { Delete } from "@mui/icons-material";
import { useCommunity } from "hooks/api/community";

interface IDeleteProps {
  id: number;
}

export const PostDelete = ({ id }: IDeleteProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const IconStyle = {
    fontSize: 18,
    margin: "5px",
    color: "black",
  };

  // 해당 id delete
  const { deletePost } = useCommunity();
  const onClickDeleteBtn = () => {
    deletePost(id);

    setOpenModal(false);
    window.location.replace("/jobdam");
  };

  return (
    <>
      삭제
      <Delete
        style={IconStyle}
        onClick={() => setOpenModal((openModal) => !openModal)}
      />
      <Modal
        show={openModal}
        onClose={() => setOpenModal((openModal) => !openModal)}
      >
        <ModalContent
          title=""
          onClose={() => setOpenModal((openModal) => !openModal)}
        >
          <div>
            정말로 삭제하시겠습니까?
            <br />
            삭제된 이후 되돌릴 수 없습니다.
          </div>
          <ButtonType title="삭제" onClick={onClickDeleteBtn} />
        </ModalContent>
      </Modal>
    </>
  );
};
