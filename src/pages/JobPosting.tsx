import React from "react";
import styled from "styled-components";
import MultiValueFormatter from "react-tabulator/lib/formatters/MultiValueFormatter";
import "react-tabulator/lib/styles.css"; // default theme
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css"; // use Theme(s)

import { ReactTabulator, reactFormatter } from "react-tabulator";
import { ColumnDefinition, ReactTabulatorOptions } from "react-tabulator";
// import ReactTabulator, {
//   ReactTabulatorOptions,
//   ColumnDefinition,
// } from "../components/tabulator/ReactTabulator";

const JobPostingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  height: 70vh;
`;

export const JobPosting = () => {
  const columns: ColumnDefinition[] | any = [
    { formatter: "rownum", hozAlign: "center", width: 40 },

    { title: "회사이름", field: "name", width: 150 },
    // { title: "Age", field: "age", hozAlign: "left", formatter: "progress" },
    // { title: "Favourite Color", field: "color" },
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
    // {
    //   formatter: "rowSelection",
    //   titleFormatter: "rowSelection",
    //   hozAlign: "center",
    //   width: 20,
    //   headerSort: false,
    //   // cellClick: (e, cell) => cell.getRow().toggleSelect(),
    // },
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
    height: 300,
    layout: "fitColumns",

    pagination: true,
    paginationMode: "remote",
    paginationSize: 5,
    // paginationInitialPage: 2,

    // rowFormatter: function (row) {
    //   if (row.getData().col === "blue") {
    //     row.getElement().style.backgroundColor = "#1e3b20";
    //   }
    // },
  };
  return (
    <JobPostingWrapper>
      <ReactTabulator
        className="Table"
        columns={columns}
        data={data}
        options={options}
        // data={[]}
      />
    </JobPostingWrapper>
  );
};
