import React, { useState } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Header } from "components/header";
import { Sidebar } from "components/main/sidebar";
import { SlideItem } from "components/main/slider/SlideItem";
import { Footer } from "components/footer";
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

        {/* footer link */}
        <Route path="/noEmail" element={<NoEmail />}></Route>
        <Route path="/personalRule" element={<PersonalRule />}></Route>
        <Route path="/sitemap" element={<Sitemap />}></Route>
      </Routes>
    </Router>
  );
}

const Main = () => {
  // default sidebar open 상태 (menuClick === false)
  const [MenuClick, setMenuClick] = useState<boolean>(false);
  const [closeSideBar, setCloseSideBar] = useState<boolean>(false);

  // Menu Icon Click Event
  const onClickMenu = () => {
    // menuClick 상태 변경
    setMenuClick(!MenuClick);

    if (MenuClick === false) {
      setCloseSideBar(false);
      console.log("메뉴 열림");
    } else {
      setCloseSideBar(true);
      console.log("메뉴 닫힘");
    }
  };

  return (
    <>
      <Header MenuClickRes={MenuClick} onClickMenuRes={onClickMenu} />
      <MainWrapper>
        <Sidebar closeSideBarRes={closeSideBar} />
        <SlideItem />
        {/* <AlertDismissible /> */}
      </MainWrapper>
      <Footer />
    </>
  );
};

const MainWrapper = styled.div`
  width: 100%;
  height: 500px;
  /* border-top: 1px solid black; */
  /* box-shadow: 0px 0px 3px 3px inset; */
`;
