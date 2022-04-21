import { useState } from "react";
import { useStudy } from "hooks/api/study";
import styled from "styled-components";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { ButtonType } from "components/button/ButtonType";
// import { TextField } from "@material-ui/core";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";

interface IStudyProps {
  title?: string;
  content?: string;
  studyCategory?: string;
  area?: string;
  minPeople?: number;
  maxPeople?: number | any;
  startDate?: Date;
  endDate?: string | Date | null;
}

export const StudyRegister = ({
  title = "",
  content = "",
  studyCategory = "",
  area = "",
  minPeople = 0,
  maxPeople = "",
  startDate = new Date(),
  endDate = null,
  setRegister,
}: IStudyProps | any) => {
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

  const studyCategoryValue = [
    "어학",
    "취업",
    "공무원",
    "취미",
    "프로그래밍",
    "자율",
    "기타",
  ];

  const areaValue = [
    "경기",
    "강원",
    "충청",
    "전라",
    "경상",
    "대구",
    "대전",
    "광주",
    "인천",
    "부산",
    "울산",
    "서울",
    "세종",
    "제주",
  ];

  const [value, setValue] = useState<Date | null>(null);

  const onChange = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent
  ) => {
    const { name, value } = e.target;
    console.log(name, value);
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | any) => {
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
    setRegister(false);
  };

  return (
    <StudyRegisterWrapper>
      <Form onSubmit={handleSubmit}>
        <InputTextField
          label="제목을 입력하세요."
          variant="filled"
          type="text"
          name="titleForm"
          value={titleForm}
          onChange={onChange}
          inputProps={{ style: { fontSize: 15, verticalAlign: "middle" } }}
        />
        <InputTextField
          label="내용을 입력하세요."
          variant="filled"
          type="text"
          name="contentForm"
          value={contentForm}
          onChange={onChange}
          inputProps={{ style: { fontSize: 15, verticalAlign: "middle" } }}
        />

        <InputSelectField variant="filled" sx={{ m: 0, minWidth: "100%" }}>
          <InputLabel>카테고리</InputLabel>
          <Select
            id="demo-simple-select-filled"
            name="studyCategoryForm"
            value={studyCategoryForm}
            onChange={onChange}
          >
            {studyCategoryValue.map((studyCategory) => (
              <MenuItem value={studyCategory}>{studyCategory}</MenuItem>
            ))}
          </Select>
        </InputSelectField>
        <InputSelectField variant="filled" sx={{ m: 0, minWidth: "100%" }}>
          <InputLabel>지역을 고르세요</InputLabel>
          <Select
            id="demo-simple-select-filled"
            name="areaForm"
            value={areaForm}
            onChange={onChange}
          >
            {areaValue.map((area) => (
              <MenuItem value={area}>{area}</MenuItem>
            ))}
          </Select>
        </InputSelectField>
        <InputTextField
          label="최대 인원을 입력하세요."
          variant="filled"
          type="number"
          name="maxPeopleForm"
          value={maxPeopleForm}
          onChange={onChange}
          // inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="모집 마감일"
            value={endDateForm}
            onChange={(newValue) => {
              console.log(newValue);
              setForm({ ...form, endDateForm: newValue });
              console.log(form);
            }}
            renderInput={(params) => (
              <TextField {...params} variant="filled" fullWidth></TextField>
            )}
          />
        </LocalizationProvider>
        <ButtonType title={"등록하기"} widthStyle={"100%"} />
      </Form>
    </StudyRegisterWrapper>
  );
};

const StudyRegisterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  position: relative;
  z-index: 5;
  width: 100%;
`;
const InputTextField = styled(TextField)`
  width: 100%;
  font-size: 10pt;
  margin-bottom: 1vw;
`;
//
const InputSelectField = styled(FormControl)`
  width: 100%;
  font-size: 10pt;
  margin: 0 0 1vw 0;
`;
// max-width: 100%;
// title?: string;
//   content?: string;
//   studyCategory?: string;
//   area?: string;
//   minPeople?: number;
//   maxPeople?: number;
//   startDate?: string | Date;
//   endDate?: string | Date;
