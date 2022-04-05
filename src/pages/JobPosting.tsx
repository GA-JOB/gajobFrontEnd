import styled from "styled-components";
import { MenuTitle } from "components/Menutitle";
import "react-tabulator/lib/styles.css"; // default theme
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css"; // use Theme(s)
import { ReactTabulator } from "react-tabulator";
import { ColumnDefinition, ReactTabulatorOptions } from "react-tabulator";

export const JobPosting = () => {
  const columns: ColumnDefinition[] | any = [
    { formatter: "rownum", hozAlign: "center", width: 40 },
    { title: "회사이름", field: "name", width: 150 },
    { title: "Date Of Birth", field: "dob", sorter: "date" },
    { title: "Rating", field: "rating", hozAlign: "center", formatter: "star" },
    {
      title: "우대조건?",
      field: "우대조건",
      hozAlign: "center",
      formatter: "tickCross",
    },
    { title: "사원수", field: "사원수", hozAlign: "center" },
    { title: "최저연봉", field: "최저연봉", hozAlign: "center" },
    { title: "최고연봉", field: "최고연봉", hozAlign: "center" },
  ];
  const data = [
    {
      name: "성공회대 회사",
      color: "red",
      dob: "01/01/1980",
      rating: 5,
      최저연봉: 1000,
      최고연봉: 3000,
      우대조건: true,
      사업자등록번호: 123456,
      사원수: 10,
    },
    {
      name: "성공회대 회사",
      color: "red",
      dob: "01/01/1980",
      rating: 5,
      최저연봉: 1001,
      최고연봉: 3001,
      우대조건: true,
      사업자등록번호: 123456,
      사원수: 10,
    },
    {
      name: "성공회대 회사",
      color: "red",
      dob: "01/01/1980",
      rating: 5,
      최저연봉: 1030,
      최고연봉: 4000,
      우대조건: true,
      사업자등록번호: 123456,
      사원수: 10,
    },
    {
      name: "성공회대 회사",
      color: "red",
      dob: "01/01/1980",
      rating: 5,
      최저연봉: 1000,
      최고연봉: 3000,
      우대조건: true,
      사업자등록번호: 123456,
      사원수: 10,
    },
    {
      name: "성공회대 회사",
      color: "red",
      dob: "01/01/1980",
      rating: 5,
      최저연봉: 1000,
      최고연봉: 3000,
      우대조건: false,
      사업자등록번호: 123456,
      사원수: 10,
    },
    {
      name: "성공회대 회사",
      color: "red",
      dob: "01/01/1980",
      rating: 5,
      최저연봉: 1000,
      최고연봉: 3000,
      우대조건: true,
      사업자등록번호: 123456,
      사원수: 10,
    },
    {
      name: "성공회대 회사",
      color: "red",
      dob: "01/01/1980",
      rating: 5,
      최저연봉: 1000,
      최고연봉: 3000,
      우대조건: true,
      사업자등록번호: 123456,
      사원수: 10,
    },
    {
      name: "성공회대 회사",
      color: "red",
      dob: "01/01/1980",
      rating: 5,
      최저연봉: 1000,
      최고연봉: 3000,
      우대조건: true,
      사업자등록번호: 123456,
      사원수: 10,
    },
    {
      name: "성공회대 회사",
      color: "red",
      dob: "01/01/1980",
      rating: 5,
      최저연봉: 1000,
      최고연봉: 3000,
      우대조건: true,
      사업자등록번호: 123456,
      사원수: 10,
    },
    {
      name: "성공회대 회사",
      color: "red",
      dob: "01/01/1980",
      rating: 5,
      최저연봉: 1000,
      최고연봉: 3000,
      우대조건: true,
      사업자등록번호: 123456,
      사원수: 10,
    },
    {
      name: "성공회대 회사",
      color: "red",
      dob: "01/01/1980",
      rating: 5,
      최저연봉: 1000,
      최고연봉: 3000,
      우대조건: true,
      사업자등록번호: 123456,
      사원수: 10,
    },
    {
      name: "성공회대 회사",
      color: "red",
      dob: "01/01/1980",
      rating: 5,
      최저연봉: 1000,
      최고연봉: 3000,
      우대조건: true,
      사업자등록번호: 123456,
      사원수: 10,
    },
    {
      name: "성공회대 회사",
      color: "red",
      dob: "01/01/1980",
      rating: 5,
      최저연봉: 1000,
      최고연봉: 3000,
      우대조건: true,
      사업자등록번호: 123456,
      사원수: 10,
    },
    {
      name: "성공회대 회사",
      color: "red",
      dob: "01/01/1980",
      rating: 5,
      최저연봉: 1000,
      최고연봉: 3000,
      우대조건: true,
      사업자등록번호: 123456,
      사원수: 10,
    },
    {
      name: "성공회대 회사",
      color: "red",
      dob: "01/01/1980",
      rating: 5,
      최저연봉: 1000,
      최고연봉: 3000,
      우대조건: true,
      사업자등록번호: 123456,
      사원수: 10,
    },
    {
      name: "성공회대 회사",
      color: "red",
      dob: "01/01/1980",
      rating: 5,
      최저연봉: 1000,
      최고연봉: 3000,
      우대조건: true,
      사업자등록번호: 123456,
      사원수: 10,
    },
    {
      name: "성공회대 회사",
      color: "red",
      dob: "01/01/1980",
      rating: 5,
      최저연봉: 1000,
      최고연봉: 3000,
      우대조건: true,
      사업자등록번호: 123456,
      사원수: 10,
    },
    {
      name: "성공회대 회사",
      color: "red",
      dob: "01/01/1980",
      rating: 5,
      최저연봉: 1000,
      최고연봉: 3000,
      우대조건: true,
      사업자등록번호: 123456,
      사원수: 10,
    },
    {
      name: "성공회대 회사",
      color: "red",
      dob: "01/01/1980",
      rating: 5,
      최저연봉: 1000,
      최고연봉: 3000,
      우대조건: true,
      사업자등록번호: 123456,
      사원수: 10,
    },
    {
      name: "성공회대 회사",
      color: "red",
      dob: "01/01/1980",
      rating: 5,
      최저연봉: 1000,
      최고연봉: 3000,
      우대조건: true,
      사업자등록번호: 123456,
      사원수: 10,
    },
  ];
  const options: ReactTabulatorOptions = {
    height: "100%",
    layout: "fitColumns",
    pagination: true,
    paginationMode: "local",
    paginationSize: 10,
  };
  return (
    <JobPostingWrapper>
      <MenuTitle
        title="채용공고"
        info="카테고리 별 채용 공고 소식을 한눈에 확인하세요."
      />
      <ReactTabulator
        className="Table"
        columns={columns}
        data={data}
        options={options}
      />
    </JobPostingWrapper>
  );
};

const JobPostingWrapper = styled.div`
  height: 100%;
  width: 80%;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
