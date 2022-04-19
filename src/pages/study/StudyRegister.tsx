import { useState } from "react";
import { useStudy } from "hooks/api/study";
import { ButtonType } from "components/button/ButtonType";
import styled from "styled-components";
import { TextField } from "@material-ui/core";

interface IStudyProps {
  title?: string;
  content?: string;
  studyCategory?: string;
  area?: string;
  minPeople?: number;
  maxPeople?: number;
  startDate?: string | Date;
  endDate?: string | Date;
}

export const StudyRegister = ({
  title = "안녕",
  content = "내용",
  studyCategory = "프로그래밍",
  area = "서울",
  minPeople = 1,
  maxPeople = 2,
  startDate = "2022-05-11",
  endDate = "2022-06-11",
}: IStudyProps) => {
  const { postStudy } = useStudy();

  const [form, setForm] = useState({
    titleForm: title,
    contentForm: content,
    studyCategoryForm: studyCategory,
    areaForm: area,
    minPeopleForm: minPeople,
    maxPeopleForm: maxPeople,
    startDateForm: startDate,
    endDateForm: endDate,
  });

  const {
    titleForm,
    contentForm,
    studyCategoryForm,
    areaForm,
    minPeopleForm,
    maxPeopleForm,
    startDateForm,
    endDateForm,
  } = form;

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
      postStudy({
        title: titleForm,
        content: contentForm,
        studyCategory: studyCategoryForm,
        area: areaForm,
        minPeople: minPeopleForm,
        maxPeople: maxPeopleForm,
        startDate: startDateForm,
        endDate: endDateForm,
      });
    }
  };
  return (
    <StudyRegisterWrapper>
      <Form onSubmit={handleSubmit}>
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

        <ButtonType title={"등록하기"} widthStyle={"100%"} />
      </Form>
    </StudyRegisterWrapper>
  );
};
// 스터디 카테고리 라벨링하기
// public enum StudyCategory {
//   어학, 취업, 공무원, 취미, 프로그래밍, 자율, 기타
// }
// area 라벨링
// 경기, 강원, 충청, 전라, 경상, 대구, 대전, 광주, 인천, 부산, 울산, 서울, 세종, 제주
const StudyRegisterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
