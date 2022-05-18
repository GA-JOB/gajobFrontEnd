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
  id?: number;
  title?: string;
  content?: string;
  studyCategory?: string;
  area?: string;
  minPeople?: number;
  maxPeople?: number | any;
  startDate?: Date;
  endDate?: string | Date | null;
  status?: string;
  openTalkUrl?: string | null;
}

export const StudyRegister = ({
  id = 0,
  title = "",
  content = "",
  studyCategory = "",
  area = "",
  minPeople = 0,
  maxPeople = "",
  startDate = new Date(),
  endDate = null,
  status = "모집중",
  setRegister,
  openTalkUrl = null,
}: IStudyProps | any) => {
  const { postStudy, editStudy } = useStudy();
  //id !== 0 수정
  const isEditStudy = id !== 0;
  const [form, setForm] = useState({
    titleForm: title,
    contentForm: content,
    studyCategoryForm: studyCategory,
    areaForm: area,
    minPeopleForm: minPeople,
    maxPeopleForm: maxPeople,
    startDateForm: startDate,
    endDateForm: endDate,
    statusForm: status,
    openTalkUrlForm: openTalkUrl,
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
    openTalkUrlForm,
    statusForm,
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

    if (
      window.confirm(`글을 ${isEditStudy ? "수정" : "등록"}하시겠습니까?`) ===
      true
    ) {
      if (!isEditStudy) {
        postStudy({
          title: titleForm,
          content: contentForm,
          studyCategory: studyCategoryForm,
          area: areaForm,
          minPeople: minPeopleForm,
          maxPeople: maxPeopleForm,
          startDate: startDateForm,
          endDate: endDateForm,
          openTalkUrl: openTalkUrlForm,
        });
      } else {
        editStudy({
          id: id,
          title: titleForm,
          content: contentForm,
          studyCategory: studyCategoryForm,
          area: areaForm,
          minPeople: minPeopleForm,
          maxPeople: maxPeopleForm,
          startDate: startDateForm,
          endDate: endDateForm,
          status: statusForm,
          openTalkUrl: openTalkUrlForm,
        });
      }
    }
    setRegister(false);
  };

  return (
    <StudyRegisterWrapper>
      <Form onSubmit={handleSubmit}>
        <SmallInput>
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
            <InputLabel>지역</InputLabel>
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
            label="최대 인원"
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
        </SmallInput>
        <MainInput>
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
            multiline
            name="contentForm"
            value={contentForm}
            onChange={onChange}
            rows={10}
            inputProps={{ style: { fontSize: 15, verticalAlign: "middle" } }}
          />
          <InputTextField
            label="오픈카톡 링크가 있다면 남겨주세요"
            variant="filled"
            type="text"
            name="openTalkUrlForm"
            value={openTalkUrlForm}
            onChange={onChange}
            inputProps={{ style: { fontSize: 15, verticalAlign: "middle" } }}
          />
        </MainInput>
        <ButtonType title={"등록하기"} widthStyle={"100%"} />
      </Form>
    </StudyRegisterWrapper>
  );
};

const StudyRegisterWrapper = styled.div`
  width: 100%;
  padding: 1vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  position: relative;
  z-index: 5;
  width: 100%;
  margin: 1vw;
`;
const InputTextField = styled(TextField)`
  width: 100%;
  font-size: 10pt;
`;

const InputSelectField = styled(FormControl)`
  width: 100%;
  font-size: 10pt;
`;

const SmallInput = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 12px;
  margin-bottom: 2vh;
`;
const MainInput = styled.div`
  display: grid;
  grid-gap: 1vh;
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
