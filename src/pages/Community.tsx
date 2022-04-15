import { useState } from "react";
import { useCommunity } from "hooks/api/community/index";
import { MenuTitle } from "components/Menutitle";
import { ButtonType } from "components/button/ButtonType";
import styled from "styled-components";
import { TextField } from "@material-ui/core";

interface ICommunityProps {
  title?: string;
  content?: string;
  category?: string;
}

export const Community = ({
  title = "",
  content = "",
  category = "",
}: ICommunityProps) => {
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

    console.log(form);

    if (window.confirm("글을 등록하시겠습니까?") === true) {
      postCommunity({
        title: titleForm,
        content: contentForm,
        category: categoryForm,
      });
    }
  };

  return (
    <CommunityWrapper>
      <Form onSubmit={handleSubmit}>
        <MenuTitle
          title="JOB담"
          info="취업 관련하여 꿀팁을 서로 공유해보세요!"
        />
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
            variant="filled"
            type="text"
            name="categoryForm"
            value={categoryForm}
            onChange={onChange}
            size="small"
            inputProps={{ style: { fontSize: 15, verticalAlign: "middle" } }}
          />
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
