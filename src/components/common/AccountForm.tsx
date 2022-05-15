import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { MenuTitle } from "components/Menutitle";
import { ButtonType } from "components/button/ButtonType";
import { useAuth } from "hooks/api/auth";
import styled from "styled-components";
import { TextField, MenuItem } from "@material-ui/core";
import { Done } from "@mui/icons-material";

interface IAccountProps {
  title: string;
  id?: number;
  name?: string;
  nickname?: string;
  email?: string;
  password?: string;
  newPassword?: string;
  studentId?: string;
  studentEmail?: string;
  department?: string;
}

export const AccountForm = ({
  title,
  id = 0,
  name = "",
  nickname = "",
  email = "",
  password = "",
  newPassword = "",
  studentId = "",
  studentEmail = "",
  department = "",
}: IAccountProps) => {
  const { postSignup, postLogin, EditAccountPwd } = useAuth();

  const isSignup = title === "회원가입" ? true : false;
  const isEdit = title === "비밀번호 변경" ? true : false;

  const [passwordCheck, setPasswordCheck] = useState<string>("");
  const [mismatchError, setMismatchError] = useState(false);

  const [form, setForm] = useState({
    nameForm: name,
    nicknameForm: nickname,
    emailForm: email,
    passwordForm: password,
    newPasswordForm: newPassword,
    studentIdForm: studentId,
    studentEmailForm: studentEmail,
    departmentForm: department,
  });
  const {
    nameForm,
    nicknameForm,
    emailForm,
    passwordForm,
    newPasswordForm,
    studentIdForm,
    studentEmailForm,
    departmentForm,
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
    if (isSignup) {
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
          department: departmentForm,
        });
      } else if (mismatchError === true) {
        window.confirm("회원 정보를 다시 확인해주시기 바랍니다.");
      } else return;
    } else if (!isSignup && !isEdit) {
      postLogin({
        email: emailForm,
        password: passwordForm,
      });
    } else if (isEdit) {
      EditAccountPwd({
        oldPassword: passwordForm,
        newPassword: newPasswordForm,
      });
    }
  };

  return (
    <>
      <SignForm onSubmit={handleSubmit}>
        <MenuTitle title={title} info="" />
        {isSignup ? (
          <>
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
                inputProps={{
                  style: { fontSize: 15, verticalAlign: "middle" },
                }}
              />
            </InputLabel>
            {/* 학번과 학교 계정은 추후 수정이 불가합니다. 제대로 입력해주세요. */}
            <InputLabel>
              <span>학부/학과</span>
              <InputField
                select
                label="학부/학과를 선택하세요"
                variant="filled"
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
            <InputLabel>
              <span>학번</span>
              <InputField
                label="본인 학번을 입력하세요."
                variant="filled"
                type="text"
                name="studentIdForm"
                value={studentIdForm}
                onChange={onChange}
                size="small"
                inputProps={{
                  style: { fontSize: 15, verticalAlign: "middle" },
                }}
              />
            </InputLabel>
            <InputLabel>
              <span>학교 계정</span>
              <InputField
                label="본인 학교 계정을 입력하세요."
                variant="filled"
                type="email"
                name="studentEmailForm"
                value={studentEmailForm}
                onChange={onChange}
                size="small"
                inputProps={{
                  style: { fontSize: 15, verticalAlign: "middle" },
                }}
              />
            </InputLabel>
          </>
        ) : null}

        {!isEdit ? (
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
        ) : null}

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

        {isEdit || isSignup ? (
          <>
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
                inputProps={{
                  style: { fontSize: 15, verticalAlign: "middle" },
                }}
              >
                <Done />
              </InputField>
              {mismatchError && <Alert>비밀번호가 일치하지 않습니다.</Alert>}
            </InputLabel>

            {isEdit ? (
              <InputLabel>
                <span>새 비밀번호</span>
                <InputField
                  label="새 비밀번호를 입력하세요."
                  variant="filled"
                  type="password"
                  name="newPasswordForm"
                  value={newPasswordForm}
                  onChange={onChange}
                  size="small"
                  inputProps={{
                    style: { fontSize: 15, verticalAlign: "middle" },
                  }}
                />
              </InputLabel>
            ) : null}
          </>
        ) : null}

        <ButtonType title={title} widthStyle={"100%"} />

        <LinkToLogin>
          {!isEdit && (
            <>
              {isSignup ? (
                <>
                  이미 회원이신가요?&nbsp;
                  <LinkStyle to="/login">로그인 하러가기</LinkStyle>
                </>
              ) : (
                <>
                  회원이 아니신가요?&nbsp;
                  <LinkStyle to="/signup">회원가입 하러가기</LinkStyle>
                  <br />
                  계정을 잊으셨나요?&nbsp;
                  <LinkStyle to="/find-account">ID · 비밀번호 찾기</LinkStyle>
                </>
              )}
            </>
          )}
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