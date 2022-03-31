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
  const columns: ColumnDefinition[] = [
    { title: "Name", field: "name", width: 150 },
    { title: "Age", field: "age", hozAlign: "left", formatter: "progress" },
    { title: "Favourite Color", field: "color" },
    { title: "Date Of Birth", field: "dob", sorter: "date" },
    { title: "Rating", field: "rating", hozAlign: "center", formatter: "star" },
    {
      title: "Passed?",
      field: "passed",
      hozAlign: "center",
      formatter: "tickCross",
    },
  ];
  const data = [
    {
      id: 1,
      name: "Oli Bob",
      age: "12",
      color: "red",
      dob: "01/01/1980",
      rating: 5,
      passed: true,
      pets: ["cat", "dog"],
    },
    {
      id: 2,
      name: "Mary May",
      age: "1",
      color: "green",
      dob: "12/05/1989",
      rating: 4,
      passed: true,
      pets: ["cat"],
    },
    {
      id: 3,
      name: "Christine Lobowski",
      age: "42",
      color: "green",
      dob: "10/05/1985",
      rating: 4,
      passed: false,
    },
    {
      id: 4,
      name: "Brendon Philips",
      age: "125",
      color: "red",
      dob: "01/08/1980",
      rating: 4.5,
      passed: true,
    },
    {
      id: 5,
      name: "Margret Marmajuke",
      age: "16",
      color: "yellow",
      dob: "07/01/1999",
      rating: 4,
      passed: false,
    },
    {
      id: 6,
      name: "Van Ng",
      age: "37",
      color: "green",
      dob: "06/10/1982",
      rating: 4,
      passed: true,
      pets: ["dog", "fish"],
    },
    {
      id: 7,
      name: "Duc Ng",
      age: "37",
      color: "yellow",
      dob: "10/10/1982",
      rating: 4,
      passed: true,
      pets: ["dog"],
    },
  ];
  const options: ReactTabulatorOptions = {
    height: 150,
    movableRows: true,
    movableColumns: true,
  };
  return (
    <JobPostingWrapper>
      <ReactTabulator
        columns={columns}
        data={data}
        options={options}
        // data={[]}
      />
    </JobPostingWrapper>
  );
};
