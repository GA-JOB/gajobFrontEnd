import { Dispatch, SetStateAction, useState } from "react";
import { ButtonType } from "components/button/ButtonType";
import { Modal } from "components/common/Modal";
import { ModalContent } from "components/common/Modal/ModalContent";
import styled from "styled-components";
import { TextField, MenuItem } from "@material-ui/core";
import { useCommunity } from "hooks/api/community/index";

interface ICommunityProps {
  id?: number;
  title?: string | null;
  content?: string | null;
  postCategory?: string | null;
  jobCategory?: string | null;
  isOpenModal: boolean;
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
}

export const CommunityForm = ({
  id = 0,
  title = "",
  content = "",
  postCategory = "",
  jobCategory = "",
  isOpenModal,
  setIsOpenModal,
}: ICommunityProps) => {
  const { postPost, editPost } = useCommunity();

  // post ? 등록 : 수정
  const isPostCommunity = id === 0;

  const [form, setForm] = useState({
    titleForm: title,
    contentForm: content,
    postCategoryForm: postCategory,
    postJobCategoryForm: jobCategory,
  });
  const { titleForm, contentForm, postCategoryForm, postJobCategoryForm } =
    form;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      window.confirm(
        `글을 ${isPostCommunity ? "등록" : "수정"}하시겠습니까?`
      ) === true
    ) {
      console.log(form);

      if (isPostCommunity) {
        postPost({
          title: titleForm,
          content: contentForm,
          postCategory: postCategoryForm,
          jobCategory: postJobCategoryForm,
        });
      } else if (!isPostCommunity) {
        editPost({
          id: id,
          title: titleForm,
          content: contentForm,
          postCategory: postCategoryForm,
          jobCategory: postJobCategoryForm,
        });
      }
    }
  };

  const onCloseModal = () => {
    setIsOpenModal((prev) => !prev);
  };

  return (
    <>
      <Modal show={isOpenModal} onClose={onCloseModal}>
        <ModalContent
          title={"게시글 " + (isPostCommunity ? "등록" : "수정")}
          kind={isPostCommunity ? "post" : "edit"}
          onClose={onCloseModal}
        >
          <CommunityWrapper>
            <Form onSubmit={handleSubmit}>
              <InputLabel>
                <span>제목</span>
                <InputField
                  label="제목을 입력하세요."
                  variant="filled"
                  type="text"
                  name="titleForm"
                  value={titleForm}
                  onChange={onChange}
                  size="small"
                  inputProps={{
                    style: { fontSize: 15, verticalAlign: "middle" },
                  }}
                  required
                />
              </InputLabel>

              <InputLabel>
                <span>카테고리</span>
                <InputField
                  select
                  variant="standard"
                  name="postCategoryForm"
                  value={postCategoryForm}
                  onChange={onChange}
                  size="small"
                  required
                >
                  <MenuItem value="" selected>
                    ---선택---
                  </MenuItem>
                  <MenuItem value="취뽀">🥳 취뽀</MenuItem>
                  <MenuItem value="취업고민">💼 취업고민</MenuItem>
                  <MenuItem value="꿀팁">🍯 꿀팁</MenuItem>
                  <MenuItem value="일상">🌸 일상</MenuItem>
                </InputField>
              </InputLabel>

              <InputLabel>
                <span>직업군 카테고리</span>
                <InputField
                  select
                  variant="standard"
                  name="postJobCategoryForm"
                  value={postJobCategoryForm}
                  onChange={onChange}
                  size="small"
                  required
                >
                  <MenuItem value="" selected>
                    ---선택---
                  </MenuItem>
                  <MenuItem value="IT">👩🏻‍💻 IT / Programming</MenuItem>
                  <MenuItem value="인문">👩🏻‍💼 인문 / 사회</MenuItem>
                  <MenuItem value="마케팅">💁🏻‍♀️ 마케팅</MenuItem>
                </InputField>
              </InputLabel>

              <InputLabel>
                <span>내용</span>
                <InputField
                  label="내용을 입력하세요."
                  variant="filled"
                  type="text"
                  name="contentForm"
                  value={contentForm}
                  onChange={onChange}
                  size="small"
                  inputProps={{
                    style: { fontSize: 15, verticalAlign: "middle" },
                  }}
                  multiline
                  rows={5}
                  required
                />
              </InputLabel>

              <ButtonType
                title={isPostCommunity ? "등록하기" : "수정하기"}
                widthStyle={"100%"}
                buttonColor="black"
              />
            </Form>
          </CommunityWrapper>
        </ModalContent>
      </Modal>
    </>
  );
};

const CommunityWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
`;

const Form = styled.form`
  position: relative;
  z-index: 5;
  width: 100%;
`;

const InputLabel = styled.div`
  width: 100%;
  padding: 0.8vw 0;
  font-size: 10pt;
`;
const InputField = styled(TextField)`
  width: 100%;
  font-size: 10pt;
  margin-bottom: 1vw;
`;
