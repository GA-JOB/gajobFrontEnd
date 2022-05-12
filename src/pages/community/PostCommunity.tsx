import { useState } from "react";
import { CommunityForm } from "components/common/CommunityForm";
import { CommentForm } from "components/common/CommentForm";
import { styled } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

interface IPostCommunity {
  id?: number;
}
export const PostCommunity = ({ id }: IPostCommunity) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
      {!id ? (
        <>
          <GoToPostStyle
            onClick={() => setOpenModal((openModal) => !openModal)}
          >
            취업 고민이나 나만의 취업 꿀팁 or 경험담을 공유하러 가보아요 !
          </GoToPostStyle>

          {openModal && (
            <CommunityForm
              isOpenModal={openModal}
              setIsOpenModal={setOpenModal}
            />
          )}
        </>
      ) : (
        <CommentForm id={id}></CommentForm>
      )}
    </>
  );
};

const GoToPostStyle = styled(Button)({
  display: "flex",
  width: "100%",
  marginBottom: "2vw",
  padding: "1vw 2vw",
  textDecoration: "none",
  fontWeight: "lighter",
  fontSize: "13pt",
  color: "black",

  border: "1px solid #eaeaea",
  borderRadius: "5px",
  cursor: "pointer",
});
