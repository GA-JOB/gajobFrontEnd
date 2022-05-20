import { useState } from "react";
import { ButtonType } from "components/button/ButtonType";
import styled from "styled-components";
import { TextField, MenuItem } from "@material-ui/core";
import { useAuth } from "hooks/api/auth/index";

interface IUserInfoProps {
  isEdit?: boolean;
  name?: string;
  nickname?: string;
  email?: string;
  studentId?: string;
  studentEmail?: string;
  department?: string;
  introduction?: string;
}

export const UserForm = ({
  isEdit,
  name,
  nickname,
  email,
  studentId,
  studentEmail,
  department,
  introduction,
}: IUserInfoProps) => {
  const { editAccount } = useAuth();
  const [form, setForm] = useState({
    nicknameForm: nickname,
    departmentForm: department,
    introductionForm: introduction,
  });
  const { nicknameForm, departmentForm, introductionForm } = form;

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
    editAccount({
      nickname: nicknameForm,
      department: departmentForm,
      introduction: introductionForm,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <InfoContents>
        {/* 가입일 */}
        <Infos>
          <InfoTitle>이름</InfoTitle> <InfoContent>{name}</InfoContent>
        </Infos>
        <Infos>
          <InfoTitle>닉네임</InfoTitle>{" "}
          <InfoContent>
            {isEdit === true ? (
              <InputLabel>
                <InputField
                  label="변경할 닉네임을 입력하세요."
                  variant="standard"
                  type="text"
                  name="nicknameForm"
                  value={nicknameForm}
                  onChange={onChange}
                  size="small"
                  inputProps={{
                    style: { fontSize: 15, verticalAlign: "middle" },
                  }}
                />
              </InputLabel>
            ) : (
              <>{nickname}</>
            )}
          </InfoContent>
        </Infos>
        <Infos>
          <InfoTitle>ID / Email</InfoTitle>
          <InfoContent>{email}</InfoContent>
        </Infos>
        <Infos>
          <InfoTitle>학교 계정</InfoTitle>
          <InfoContent>{studentEmail}</InfoContent>
        </Infos>
        <Infos>
          <InfoTitle>학번</InfoTitle>
          <InfoContent>{studentId}</InfoContent>
        </Infos>
        <Infos>
          <InfoTitle>학부 / 학과</InfoTitle>
          <InfoContent>
            {isEdit === true ? (
              <InputLabel>
                <InputField
                  select
                  label="변경할 학부/학과를 선택하세요"
                  variant="standard"
                  name="departmentForm"
                  value={departmentForm}
                  onChange={onChange}
                  size="small"
                  inputProps={{ style: { fontSize: 15 } }}
                >
                  <MenuItem value="">---필수---</MenuItem>
                  <MenuItem value="IT융합자율학부">IT융합자율학부</MenuItem>
                  <MenuItem value="미디어컨텐츠융합자율학부">
                    미디어컨텐츠융합자율학부
                  </MenuItem>
                  <MenuItem value="인문융합자율학부">인문융합자율학부</MenuItem>
                  <MenuItem value="사회융합자율학부">사회융합자율학부</MenuItem>
                </InputField>
              </InputLabel>
            ) : (
              <>{department}</>
            )}
          </InfoContent>
        </Infos>
        <Infos>
          <InfoTitle>소개글</InfoTitle>
          <InfoContent>
            {isEdit === true ? (
              <InputLabel>
                <InputField
                  label="간단한 소개글로 본인을 소개하세요!"
                  variant="standard"
                  type="text"
                  name="introductionForm"
                  value={introductionForm}
                  onChange={onChange}
                  size="small"
                  inputProps={{
                    style: { fontSize: 15, verticalAlign: "middle" },
                  }}
                />
              </InputLabel>
            ) : (
              <>
                {" "}
                {introduction !== null
                  ? introduction
                  : "소개글을 작성해주세요!"}
              </>
            )}
          </InfoContent>
        </Infos>
      </InfoContents>

      <ButtonWrapper>
        {isEdit && <ButtonType title="제출" link="" />}
      </ButtonWrapper>
    </form>
  );
};

const InfoContents = styled.div`
  font-weight: lighter;
  line-height: 4vw;
  padding: 0.5vw;
  font-size: 11pt;
`;
const Infos = styled.div`
  width: 100%;
  padding: 0.1vw 3vw;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    border-radius: 10px;
    background-color: #eaeaea;
  }
`;
const InfoTitle = styled.div`
  width: 30%;
  font-weight: normal;
`;
const InfoContent = styled.div`
  width: 70%;
`;
const AlertTxt = styled.span`
  margin-left: 5px;
  font-size: 10pt;
  font-weight: normal;
  color: red;
`;

const InputLabel = styled.div`
  width: 100%;
  font-size: 9pt;
`;
const InputField = styled(TextField)`
  width: 100%;
  font-size: 9pt;
`;
const ButtonWrapper = styled.div`
  float: right;
  margin: 1.5vw 4vw;
`;
