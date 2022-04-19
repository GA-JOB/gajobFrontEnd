import { useState } from "react";
import { ButtonType } from "components/button/ButtonType";
import styled from "styled-components";
import { TextField, MenuItem } from "@material-ui/core";
import { useCommunity } from "hooks/api/community/index";
import storage from "hooks/store";

interface ICommunityProps {
  title?: string;
  content?: string;
  category?: string;
}

export const PostCommunity = ({
  title = "",
  content = "",
  category = "",
}: ICommunityProps) => {
  const token = storage.get("user-token");

  const { postCommunity } = useCommunity();
  const [form, setForm] = useState({
    titleForm: title,
    contentForm: content,
    categoryForm: category,
  });
  const { titleForm, contentForm, categoryForm } = form;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (window.confirm("글을 등록하시겠습니까?") === true) {
      console.log(form);

      postCommunity({
        title: titleForm,
        content: contentForm,
        category: categoryForm,
      });
    }
  };

  if (!token) return <>접근 못함</>;

  return (
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
            inputProps={{ style: { fontSize: 15, verticalAlign: "middle" } }}
          />
        </InputLabel>

        <InputLabel>
          <span>카테고리</span>
          <InputField
            select
            variant="standard"
            name="categoryForm"
            value={categoryForm}
            onChange={onChange}
            size="small"
            // inputProps={{ style: { fontSize: 15 } }}
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
          <span>내용</span>
          <InputField
            label="내용을 입력하세요."
            variant="filled"
            type="text"
            name="contentForm"
            value={contentForm}
            onChange={onChange}
            size="small"
            inputProps={{ style: { fontSize: 15, verticalAlign: "middle" } }}
          />
        </InputLabel>

        <ButtonType title={"등록하기"} widthStyle={"100%"} />
      </Form>
    </CommunityWrapper>
  );
};

const CommunityWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  height: 70vh;
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
