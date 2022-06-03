import { useState } from "react";
import { useLocation } from "react-router";
import { useParams } from "react-router-dom";
import { MenuTitle } from "components/Menutitle";
import { ButtonType } from "components/button/ButtonType";
import styled from "styled-components";
import { TextField } from "@mui/material";
import useGetAuth from "hooks/api/auth/useGetAuth";
import { useStudy } from "hooks/api/study/index";

interface StudyRecruitProps {
  introduction?: string;
  title?: string;
  content?: string;
}
export const StudyRecruitForm = ({ introduction = "" }: StudyRecruitProps) => {
  const { id } = useParams();
  const { state: data }: any = useLocation();
  const user = useGetAuth();
  const { recruitStudy } = useStudy();
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
          작성자: {data.writer} <br />
          제목: {data.title} <br />
          내용: {data.content} <br />
          지역: {data.area} <br />
          모집 마감일: {data.endDate} <br />
          경쟁률 현황: {competeRate} : 1 (신청인원 : 8 / 모집 최대인원:{" "}
          {data.maxPeople} ) <br />
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
              required
            />
          </InputLabel>
          <ButtonWrapper>
            <ButtonType title={"신청하기"} widthStyle={"100%"} />
          </ButtonWrapper>
        </SignForm>
      </StudyRecruitWrapper>
    </Box>
  );
};
const Box = styled.div`
  width: 100%;
  padding: 1vw 10vw;
  display: column;
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
  margin-top: 1vw;
`;
