import { useState } from "react";
import { CommunityForm } from "components/common/CommunityForm";
import { Edit } from "@mui/icons-material";

interface IEditProps {
  id?: number;
  title?: string | null;
  content?: string | null;
  postCategory?: string | null;
}

export const PostEdit = ({ id, title, content, postCategory }: IEditProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const IconStyle = {
    fontSize: 18,
    margin: "5px",
    color: "black",
  };

  return (
    <>
      수정
      <Edit
        style={IconStyle}
        onClick={() => setOpenModal((openModal) => !openModal)}
      />
      {openModal && (
        <CommunityForm
          isOpenModal={openModal}
          setIsOpenModal={setOpenModal}
          id={id}
          title={title}
          content={content}
          postCategory={postCategory}
        />
      )}
    </>
  );
};
