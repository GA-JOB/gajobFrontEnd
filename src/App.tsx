import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "components/header";
import { Footer } from "components/footer";
// menu
import { Issues } from "pages/Issues";
import { JobPosting } from "pages/JobPosting";
import { Community } from "pages/Community";
import { Study } from "pages/Study";
import { Portfolio } from "pages/Portfolio";
import { MyPage } from "pages/MyPage";
// import { SlideItem } from "components/main/slider/SlideItem";

import { NoEmail } from "components/footer/NoEmail";
import { PersonalRule } from "components/footer/PersonalRules";
import { Sitemap } from "components/footer/Sitemap";
// import { AlertDismissible } from "components/alert";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/job-news" element={<Issues />} />
        <Route path="/job-posting" element={<JobPosting />} />
        <Route path="/jobdam" element={<Community />} />
        <Route path="/gajob-study" element={<Study />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/mypage" element={<MyPage />} />

        {/* footer link */}
        <Route path="/noEmail" element={<NoEmail />}></Route>
        <Route path="/personalRule" element={<PersonalRule />}></Route>
        <Route path="/sitemap" element={<Sitemap />}></Route>
      </Routes>
    </Router>
  );
}

const Main = () => {
  return (
    <>
      <Header />
      <MainContainer>
        {/* <NewsBanner>
          <SlideItem />
        </NewsBanner> */}
        {/* <AlertDismissible /> */}
      </MainContainer>
      <Footer />
    </>
  );
};

const MainContainer = styled.div`
  z-index: 1;
  width: 100%;
  height: 500px;
`;

const NewsBanner = styled.div`
  width: 100%;
  text-align: center;
  /* margin: auto; */
`;
