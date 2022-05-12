import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { MenuTitle } from "components/Menutitle";
import { ButtonType } from "components/button/ButtonType";
import { useAuth } from "hooks/api/auth";
import styled from "styled-components";
import { TextField } from "@material-ui/core";
import { Done } from "@mui/icons-material";

interface ISignupProps {
  id?: number;
  name?: string;
  nickname?: string;
  email?: string;
  password?: string;
  studentId?: string;
  studentEmail?: string;
}

export const Signup = ({
  id = 0,
  name = "",
  nickname = "",
  email = "",
  password = "",
  studentId = "",
  studentEmail = "",
}: ISignupProps) => {
  const { postSignup } = useAuth();

  const [passwordCheck, setPasswordCheck] = useState<string>("");
  const [mismatchError, setMismatchError] = useState(false);

  const [form, setForm] = useState({
    nameForm: name,
    nicknameForm: nickname,
    emailForm: email,
    passwordForm: password,
    studentIdForm: studentId,
    studentEmailForm: studentEmail,
  });
  const {
    nameForm,
    nicknameForm,
    emailForm,
    passwordForm,
    studentIdForm,
    studentEmailForm,
  } = form;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  // password check
  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setMismatchError(e.target.value !== passwordForm);
    },
    [passwordForm]
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(form);

    if (
      window.confirm("회원가입을 하시겠습니까?") === true &&
      mismatchError === false
    ) {
      postSignup({
        name: nameForm,
        nickname: nicknameForm,
        email: emailForm,
        password: passwordForm,
        studentId: studentIdForm,
        studentEmail: studentEmailForm,
      });
    } else if (mismatchError === true) {
      window.confirm("회원 정보를 다시 확인해주시기 바랍니다.");
    } else return;
  };

  return (
    <>
      <SignForm onSubmit={handleSubmit}>
        <MenuTitle title="SIGN UP" info="" />
        <InputLabel>
          <span>이름</span>
          <InputField
            label="이름을 입력하세요."
            variant="filled"
            type="text"
            name="nameForm"
            value={nameForm}
            onChange={onChange}
            size="small"
            inputProps={{ style: { fontSize: 15, verticalAlign: "middle" } }}
          />
        </InputLabel>

        <InputLabel>
          <span>닉네임</span>
          <InputField
            label="닉네임을 입력하세요."
            variant="filled"
            type="text"
            name="nicknameForm"
            value={nicknameForm}
            onChange={onChange}
            size="small"
            inputProps={{ style: { fontSize: 15, verticalAlign: "middle" } }}
          />
        </InputLabel>
        <InputLabel>
          <span>학번</span>
          <InputField
            label="학번을 입력하세요."
            variant="filled"
            type="text"
            name="studentIdForm"
            value={studentIdForm}
            onChange={onChange}
            size="small"
            inputProps={{ style: { fontSize: 15, verticalAlign: "middle" } }}
          />
        </InputLabel>
        <InputLabel>
          <span>학교 계정</span>
          <InputField
            label="학교 계정을 입력하세요."
            variant="filled"
            type="email"
            name="studentEmailForm"
            value={studentEmailForm}
            onChange={onChange}
            size="small"
            inputProps={{ style: { fontSize: 15, verticalAlign: "middle" } }}
          />
        </InputLabel>
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
        <InputLabel>
          <span>비밀번호 확인</span>
          <InputField
            label="비밀번호를 확인하세요."
            variant="filled"
            type="password"
            name="passwordCheck"
            value={passwordCheck}
            onChange={onChangePasswordCheck}
            size="small"
            inputProps={{ style: { fontSize: 15, verticalAlign: "middle" } }}
          >
            <Done />
          </InputField>
          {mismatchError && <Alert>비밀번호가 일치하지 않습니다.</Alert>}
        </InputLabel>
        <ButtonType title={"가입하기"} widthStyle={"100%"} />

        <LinkToLogin>
          이미 회원이신가요?&nbsp;
          <LinkStyle to="/login">로그인 하러가기</LinkStyle>
        </LinkToLogin>
      </SignForm>
    </>
  );
};

const SignForm = styled.form`
  position: relative;
  z-index: 5;
  width: 25%;
  margin-bottom: 2vw;
`;

const InputLabel = styled.div`
  width: 100%;
  padding: 0.5vw 0;
  font-size: 10pt;
`;
const InputField = styled(TextField)`
  width: 100%;
  font-size: 10pt;
`;
const Alert = styled.span`
  color: red;
`;

const LinkToLogin = styled.div`
  padding: 1vw 0;
  text-align: center;
  font-size: 10pt;
`;
const LinkStyle = styled(Link)`
  text-decoration: none;
`;
