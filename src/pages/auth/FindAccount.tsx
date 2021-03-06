import { useState } from "react";
import { MenuTitle } from "components/Menutitle";
import { ButtonType } from "components/button/ButtonType";
import styled from "styled-components";
import { TextField } from "@material-ui/core";
import { useAuth } from "hooks/api/auth/index";

interface IFindAccountProps {
  name?: string;
  email?: string;
}

export const FindAccount = ({ name = "", email = "" }: IFindAccountProps) => {
  const { findAccountId, findAccountPwd } = useAuth();
  const [isFindEmail, setIsFindEmail] = useState<boolean>(true);

  const [form, setForm] = useState({
    nameForm: name,
    emailForm: email,
  });
  const { nameForm, emailForm } = form;

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

    if (isFindEmail) {
      findAccountId({ name: nameForm, studentEmail: emailForm });
    } else {
      findAccountPwd({ email: emailForm });
    }
  };

  return (
    <FindAccountWrapper>
      <SignForm onSubmit={handleSubmit}>
        <MenuTitle
          title={isFindEmail ? "아이디 찾기" : "비밀번호 찾기"}
          info={
            (isFindEmail ? "아이디" : "비밀번호") +
            " 찾기를 위해 아래의 정보를 입력해주세요."
          }
        />

        <SelectBtn>
          <FindTypeBtn onClick={() => setIsFindEmail(true)}>
            아이디 찾기
          </FindTypeBtn>
          <FindTypeBtn onClick={() => setIsFindEmail(false)}>
            비밀번호 찾기
          </FindTypeBtn>
        </SelectBtn>

        <TypeInfo>
          {isFindEmail ? (
            <>
              회원가입 시 등록한 이름과 학교계정을 입력하시면 <br /> 해당
              학교계정으로 아이디 E-mail을 보내드립니다.
            </>
          ) : (
            <>
              사용중인 아이디 E-mail을 입력하시면 <br /> 해당 아이디 E-mail으로
              초기화된 비밀번호 보내드립니다.
            </>
          )}
        </TypeInfo>

        {isFindEmail ? (
          <InputLabel>
            <span>이름</span>
            <InputField
              label="반드시 실명을 입력하세요."
              variant="filled"
              type="text"
              name="nameForm"
              value={nameForm}
              onChange={onChange}
              size="small"
              inputProps={{
                style: { fontSize: 15, verticalAlign: "middle" },
              }}
            />
          </InputLabel>
        ) : null}

        <InputLabel>
          <span>{isFindEmail ? "학교계정" : "아이디"} E-mail</span>
          <InputField
            label={
              (isFindEmail ? "학교계정" : "아이디") + " E-mail을 입력하세요."
            }
            variant="filled"
            type="email"
            name="emailForm"
            value={emailForm}
            onChange={onChange}
            size="small"
            inputProps={{ style: { fontSize: 15, verticalAlign: "middle" } }}
          />
        </InputLabel>

        <ButtonType
          title={isFindEmail ? "아이디 찾기" : "비밀번호 찾기"}
          widthStyle={"100%"}
        />
      </SignForm>
    </FindAccountWrapper>
  );
};

const FindAccountWrapper = styled.div`
  width: 100%;
  margin-bottom: 3vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SelectBtn = styled.div`
  text-align: center;
`;
const FindTypeBtn = styled.span`
  margin: 1vw;
  padding: 1vw;

  font-size: 13pt;
  cursor: pointer;
`;
const TypeInfo = styled.div`
  width: 100%;
  margin-top: 1vw;
  font-size: 11pt;
  opacity: 0.6;
`;

const SignForm = styled.form`
  position: relative;
  z-index: 5;
  width: 25%;
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
