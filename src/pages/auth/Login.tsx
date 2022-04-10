import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MenuTitle } from "components/Menutitle";
import { ButtonType } from "components/button/ButtonType";
import styled from "styled-components";
import { TextField } from "@material-ui/core";
import { useAuth } from "hooks/api/auth";

interface ILoginProps {
  id?: number;
  name?: string;
  nickname?: string;
  email?: string;
  password?: string;
}

export const Login = ({ email = "", password = "" }: ILoginProps) => {
  let navigate = useNavigate();
  const { postLogin } = useAuth();

  const [form, setForm] = useState({
    emailForm: email,
    passwordForm: password,
  });
  const { emailForm, passwordForm } = form;

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

    postLogin({
      email: emailForm,
      password: passwordForm,
    });

    navigate("/login");
  };

  return (
    <>
      <SignForm onSubmit={handleSubmit}>
        <MenuTitle title="LOG IN" info="" />
        <InputLabel>
          <span>E-mail</span>
          <InputField
            label="E-mail을 입력하세요."
            variant="filled"
            type="email"
            name="emailForm"
            value={emailForm}
            onChange={onChange}
            size="small"
            inputProps={{ style: { fontSize: 15, verticalAlign: "middle" } }}
          />
        </InputLabel>
        <InputLabel>
          <span>비밀번호</span>
          <InputField
            label="비밀번호를 입력하세요."
            variant="filled"
            type="password"
            name="passwordForm"
            value={passwordForm}
            onChange={onChange}
            size="small"
            inputProps={{ style: { fontSize: 15, verticalAlign: "middle" } }}
          />
        </InputLabel>
        <ButtonType title={"로그인"} widthStyle={"100%"} />

        <LinkToLogin>
          회원이 아니신가요?&nbsp;
          <LinkStyle to="/signup">회원가입 하러가기</LinkStyle>
        </LinkToLogin>
      </SignForm>
    </>
  );
};

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
const InputField = styled(TextField)({
  width: "100%",
  fontSize: "10pt",
  marginBottom: "1vw",
});

const LinkToLogin = styled.div`
  padding: 1vw 0;
  text-align: center;
  font-size: 10pt;
`;
const LinkStyle = styled(Link)`
  text-decoration: none;
`;
