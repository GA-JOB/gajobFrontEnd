import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { MenuTitle } from "components/Menutitle";
import { ButtonType } from "components/button/ButtonType";
import styled from "styled-components";
import { TextField, MenuItem, InputAdornment, Checkbox } from "@mui/material";
import { Done, Forward, ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import storage from "hooks/store";
import { useAuth } from "hooks/api/auth";

interface IAccountProps {
  title: string;
  info: string;
  id?: number;
  name?: string;
  nickname?: string;
  email?: string;
  password?: string;
  newPassword?: string;
  studentId?: string;
  studentEmail?: string;
  verifyCode?: string;
  department?: string;
}

export const AccountForm = ({
  title,
  info,
  id = 0,
  name = "",
  nickname = "",
  email = "",
  password = "",
  newPassword = "",
  studentId = "",
  studentEmail = "",
  verifyCode = "",
  department = "",
}: IAccountProps) => {
  const userEmail = storage.get("user-email");
  const EmailVerify = storage.get("code-verify");

  console.log(EmailVerify);
  const {
    postSignup,
    postLogin,
    postCertifyStudentEmail,
    postVertifyStudentEmail,
    editAccountPwd,
    deleteAuth,
  } = useAuth();

  const isSignup = title === "회원가입" ? true : false;
  const isEdit = title === "비밀번호 변경" ? true : false;
  const isDeleteAccount = title === "계정 삭제" ? true : false;

  const [isEmailCodeVerify, setIsEmailCodeVerify] = useState<boolean>(false);
  const [passwordCheck, setPasswordCheck] = useState<string>("");
  const [mismatchError, setMismatchError] = useState(false);

  // 개인정보 수집 및 이용 동의 여부
  const [checked, setChecked] = useState<boolean>(false);
  const [isOpenAgreeContent, setIsOpenAgreeContent] = useState<boolean>(false);

  const [form, setForm] = useState({
    nameForm: name,
    nicknameForm: nickname,
    emailForm: email,
    passwordForm: password,
    newPasswordForm: newPassword,
    studentIdForm: studentId,
    studentEmailForm: studentEmail,
    verifyCodeForm: verifyCode,
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
    verifyCodeForm,
    departmentForm,
  } = form;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
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
        verifyCodeForm !== "" &&
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
      } else if (verifyCodeForm === "") {
        window.confirm("인증코드를 다시 확인해주시기 바랍니다.");
      }
    } else if (!isSignup && !isEdit && !isDeleteAccount) {
      postLogin({
        email: emailForm,
        password: passwordForm,
      });
    } else if (isEdit) {
      editAccountPwd({
        oldPassword: passwordForm,
        newPassword: newPasswordForm,
      });
    } else if (isDeleteAccount) {
      if (window.confirm("계정을 삭제하시겠습니까?") === true) {
        deleteAuth({ password: passwordForm });
      }
    }
  };

  return (
    <>
      <SignForm onSubmit={handleSubmit}>
        <MenuTitle title={title} info={info} />
        {(isDeleteAccount || isEdit) && (
          <>
            <AccountInfo>계정 {userEmail}</AccountInfo>
            <div>계속하려면 먼저 본인임을 인증하세요.</div>
          </>
        )}
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
                required
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
                required
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
                required
              >
                <MenuItem value="">---필수---</MenuItem>
                <MenuItem value="IT융합자율학부">IT융합자율학부</MenuItem>
                <MenuItem value="미디어콘텐츠융합자율학부">
                  미디어콘텐츠융합자율학부
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
                required
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
                InputProps={{
                  endAdornment: (
                    <IconSubmit
                      position="end"
                      onClick={() =>
                        postCertifyStudentEmail({ email: studentEmailForm })
                      }
                    >
                      <Forward />
                    </IconSubmit>
                  ),
                }}
                required
              />
            </InputLabel>

            <InputLabel>
              <span>인증 코드</span>
              <InputField
                label="인증코드를 입력하세요."
                variant="filled"
                type="text"
                name="verifyCodeForm"
                value={verifyCodeForm}
                onChange={onChange}
                size="small"
                inputProps={{
                  style: { fontSize: 15, verticalAlign: "middle" },
                }}
                InputProps={{
                  endAdornment: (
                    <IconSubmit
                      position="end"
                      onClick={() => {
                        postVertifyStudentEmail({ code: verifyCodeForm });
                        if (EmailVerify) {
                          if (EmailVerify === "authentication-success") {
                            setIsEmailCodeVerify(true);
                          } else {
                            setIsEmailCodeVerify(false);
                          }
                        }
                      }}
                    >
                      {isEmailCodeVerify ? <Done /> : <Forward />}
                    </IconSubmit>
                  ),
                }}
                required
              />
            </InputLabel>
          </>
        ) : null}
        {!isEdit && !isDeleteAccount ? (
          <InputLabel>
            <span>E-mail</span>
            <InputField
              label="E-mail을 입력"
              variant="filled"
              type="email"
              name="emailForm"
              value={emailForm}
              onChange={onChange}
              size="small"
              inputProps={{ style: { fontSize: 15, verticalAlign: "middle" } }}
              required
            />
          </InputLabel>
        ) : null}
        <InputLabel>
          {!isDeleteAccount ? <span>비밀번호</span> : null}
          <InputField
            label="비밀번호 입력"
            variant={isDeleteAccount ? "standard" : "filled"}
            type="password"
            name="passwordForm"
            value={passwordForm}
            onChange={onChange}
            size="small"
            inputProps={{ style: { fontSize: 15, verticalAlign: "middle" } }}
            required
          />
        </InputLabel>
        {isEdit || isSignup ? (
          <>
            <InputLabel>
              <span>비밀번호 확인</span>
              <InputField
                label="비밀번호를 확인"
                variant="filled"
                type="password"
                name="passwordCheck"
                value={passwordCheck}
                onChange={onChangePasswordCheck}
                size="small"
                inputProps={{
                  style: { fontSize: 15, verticalAlign: "middle" },
                }}
                required
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
                  required
                />
              </InputLabel>
            ) : null}
          </>
        ) : null}

        {isSignup && (
          <InputLabel>
            <Checkbox
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
            <span>
              개인정보 수집 및 이용 동의{" "}
              {!isOpenAgreeContent ? (
                <ArrowDropDown
                  onClick={() => {
                    setIsOpenAgreeContent((prev) => !prev);
                  }}
                />
              ) : (
                <>
                  <ArrowDropUp
                    onClick={() => {
                      setIsOpenAgreeContent((prev) => !prev);
                    }}
                  />
                  <ul>
                    <li>
                      개인정보 수집 및 이용 목적: 본인 확인과 서비스 제공을
                      위함.
                    </li>
                    <li>
                      수집 개인정보 항목: 이름, 학교계정, 학부, 학번, 이메일
                    </li>
                    <li>개인정보 보유 및 이용기간: 회원 탈퇴시 까지</li>
                  </ul>
                </>
              )}
            </span>
          </InputLabel>
        )}

        <ButtonWrapper>
          <ButtonType
            disabled={
              (isSignup &&
                storage.get("code-verify") === "authentication-success" &&
                checked === true) ||
              !isSignup
                ? false
                : true
            }
            title={title}
            widthStyle={"100%"}
          />
        </ButtonWrapper>
        <LinkToLogin>
          {!isEdit && !isDeleteAccount ? (
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
          ) : (
            <LinkStyle to="/find-account">비밀번호를 잊으셨나요?</LinkStyle>
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

const AccountInfo = styled.div`
  margin-bottom: 2vw;
  padding: 0.5vw 0;
  border: 1px solid lightgray;
  border-radius: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  font-size: 14pt;
  font-weight: lighter;
  text-align: center;
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
const IconSubmit = styled(InputAdornment)`
  cursor: pointer;
`;
const Alert = styled.span`
  color: red;
`;
const ButtonWrapper = styled.div`
  margin-top: 1vw;
`;
const LinkToLogin = styled.div`
  padding: 1vw 0;
  text-align: center;
  font-size: 10pt;
`;
const LinkStyle = styled(Link)`
  text-decoration: none;
`;
