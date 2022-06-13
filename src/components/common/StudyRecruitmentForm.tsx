import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { useParams } from "react-router-dom";
import { ButtonType } from "components/button/ButtonType";
import styled from "styled-components";
import { TextField, Checkbox } from "@mui/material";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import useGetAuth from "hooks/api/auth/useGetAuth";
import { useStudy } from "hooks/api/study/index";

interface StudyRecruitProps {
  introduction?: string;
  isResult: boolean;
}

export const StudyRecruitmentForm = ({
  introduction = "",
  isResult,
}: StudyRecruitProps) => {
  const { id } = useParams();
  const { state: data }: any = useLocation();
  const user = useGetAuth();
  const { recruitStudy } = useStudy();
  const [checked, setChecked] = useState<boolean>(false);
  const [isOpenAgreeContent, setIsOpenAgreeContent] = useState<boolean>(false);

  const [form, setForm] = useState({
    introductionForm: introduction,
  });
  const { introductionForm } = form;

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(form);
    recruitStudy({ postId: Number(id), content: introductionForm });
  };

  if (!data && !user) return <></>;
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <InfoTitle>작성자 정보</InfoTitle>
        <InputLabel>
          <span>이름</span>
          <InputField
            variant="standard"
            type="text"
            name="nameForm"
            value={!isResult ? user.data?.name || "" : data.name || ""}
            size="small"
            inputProps={{
              style: { fontSize: 15, verticalAlign: "middle" },
            }}
            disabled
          />
        </InputLabel>
        <InputLabel>
          <span>닉네임</span>
          <InputField
            variant="standard"
            type="text"
            name="nicknameForm"
            value={!isResult ? user.data?.nickname || "" : data.writer || ""}
            size="small"
            inputProps={{
              style: { fontSize: 15, verticalAlign: "middle" },
            }}
            disabled
          />
        </InputLabel>
        <InputLabel>
          <span>학부</span>
          <InputField
            type="text"
            variant="standard"
            name="departmentForm"
            value={
              !isResult ? user.data?.department || "" : data.department || ""
            }
            size="small"
            inputProps={{ style: { fontSize: 15 } }}
            disabled
          ></InputField>
        </InputLabel>
        <InputLabel>
          <span>학번</span>
          <InputField
            variant="standard"
            type="text"
            name="studentIdForm"
            value={
              !isResult ? user.data?.studentId || "" : data.studentId || ""
            }
            size="small"
            inputProps={{
              style: { fontSize: 15, verticalAlign: "middle" },
            }}
            disabled
          />
        </InputLabel>
        <InputLabel>
          <span>E-mail</span>
          <InputField
            variant="standard"
            type="email"
            name="emailForm"
            value={!isResult ? user.data?.email || "" : data.studentEmail || ""}
            size="small"
            inputProps={{
              style: { fontSize: 15, verticalAlign: "middle" },
            }}
            disabled
          />
        </InputLabel>
        <InputLabel>
          <span>신청 목적 및 포부</span>
          <InputField
            label="해당 스터디를 신청하게된 각오나 목적을 적어주세요 !"
            variant="standard"
            type="text"
            name="introductionForm"
            value={introductionForm}
            onChange={onChange}
            size="small"
            inputProps={{
              style: { fontSize: 15, verticalAlign: "middle" },
            }}
            multiline
            rows={5}
            disabled={isResult ? true : false}
          />
        </InputLabel>{" "}
        {!isResult && (
          <>
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
                        수집 개인정보 항목: 이름, 닉네임, 학부, 학번, 이메일
                      </li>
                      <li>개인정보 보유 및 이용기간: 회원 탈퇴시 까지</li>
                    </ul>
                  </>
                )}
              </span>
            </InputLabel>
            <ButtonWrapper>
              <ButtonType
                disabled={
                  introductionForm === "" || checked === false ? true : false
                }
                title={"신청하기"}
                widthStyle={"100%"}
              />
            </ButtonWrapper>
          </>
        )}
      </Form>
    </>
  );
};

const Form = styled.form`
  width: 100%;
  margin: 1vw;
`;
const InfoTitle = styled.h4`
  margin: 1vw 0;
  text-align: center;
  font-weight: lighter;
`;
const InputLabel = styled.div`
  width: 100%;
  padding: 0.5vw 0;
  font-size: 10pt;
`;
const InputField = styled(TextField)`
  width: 100%;
  font-size: 10pt;
  white-space: pre-line;
`;
const ButtonWrapper = styled.div`
  text-align: center;
  margin: 1vw 0;
`;
