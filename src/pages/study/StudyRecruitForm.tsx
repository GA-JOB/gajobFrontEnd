import { useState } from "react";
import { useLocation } from "react-router";
import { useParams, useNavigate } from "react-router-dom";
import { MenuTitle } from "components/Menutitle";
import { ButtonType } from "components/button/ButtonType";
import styled from "styled-components";
import { TextField, Checkbox } from "@mui/material";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import useGetAuth from "hooks/api/auth/useGetAuth";
import { useStudy } from "hooks/api/study/index";

interface StudyRecruitProps {
  introduction?: string;
  title?: string;
  content?: string;
}
export const StudyRecruitForm = ({ introduction = "" }: StudyRecruitProps) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state: data }: any = useLocation();
  const user = useGetAuth();
  const { recruitStudy } = useStudy();
  const [checked, setChecked] = useState<boolean>(false);
  const [isOpenAgreeContent, setIsOpenAgreeContent] = useState<boolean>(false);
  const competeRate = 8 / data.maxPeople;

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
    <Box>
      <MenuTitle
        title={"STUDY 신청"}
        info={"STUDY 신청을 위한 정보들을 작성해주세요!"}
      />
      <StudyRecruitWrapper>
        <StudyInfoWrapper>
          <InfoTitle>스터디 정보</InfoTitle>
          <div>작성자</div> {data.writer} <br />
          <div>카테고리</div> {data.studyCategory} <br />
          <div>제목</div> {data.title} <br />
          <div>내용</div> {data.content} <br />
          <div>지역</div> {data.area} <br />
          <div>모집 마감일</div> {data.endDate} <br />
          <div>경쟁률 현황</div> {competeRate} : 1 (신청인원 : 8 / 모집
          최대인원: {data.maxPeople} ) <br />
        </StudyInfoWrapper>

        <SignForm onSubmit={handleSubmit}>
          <InfoTitle>작성자 정보</InfoTitle>
          <InputLabel>
            <span>이름</span>
            <InputField
              variant="standard"
              type="text"
              name="nameForm"
              value={user.data?.name || ""}
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
              value={user.data?.nickname || ""}
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
              value={user.data?.department || ""}
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
              value={user.data?.studentId || ""}
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
              value={user.data?.email || ""}
              size="small"
              inputProps={{ style: { fontSize: 15, verticalAlign: "middle" } }}
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
            />
          </InputLabel>{" "}
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
            {console.log(checked)}
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
        </SignForm>
      </StudyRecruitWrapper>

      <ButtonWrapper>
        <ButtonType
          title="상세 페이지로"
          variants="text"
          onClick={() => navigate(-1)}
        />
      </ButtonWrapper>
    </Box>
  );
};
const Box = styled.div`
  width: 100%;
  padding: 1vw 10vw;
  display: column;
  align-items: center;
  justify-content: center;
`;
const StudyRecruitWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const StudyInfoWrapper = styled.div`
  width: 40%;
  margin: 1vw;
`;
const InfoTitle = styled.h4`
  margin: 1vw 0;
  text-align: center;
  font-weight: lighter;
`;
const SignForm = styled.form`
  width: 40%;
  margin: 1vw;
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
const ButtonWrapper = styled.div`
  text-align: center;
  margin: 1vw 0;
`;
