import { useState } from "react";
import { CommunityForm } from "components/common/CommunityForm";
import styled from "styled-components";
import { Edit } from "@mui/icons-material";

interface IEditProps {
  id: number;
  title?: string | null;
  content?: string | null;
  postCategory?: string | null;
  jobCategory?: string | null;
}

export const PostEdit = ({
  id,
  title,
  content,
  postCategory,
  jobCategory,
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
      {openModal && (
        <CommunityForm
          isOpenModal={openModal}
          setIsOpenModal={setOpenModal}
          id={id}
          title={title}
          content={content}
          postCategory={postCategory}
          jobCategory={jobCategory}
        />
      )}
    </EditWrapper>
  );
};

const EditWrapper = styled.span`
  margin: 0 0.5vw;
  font-size: 9pt;
  opacity: 0.8;
  cursor: pointer;
`;
