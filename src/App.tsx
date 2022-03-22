import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "components/header";
import { Sidebar } from "components/main/sidebar";
// menu
import { Chats } from "components/main/menu/Chats";
import { Analytics } from "components/main/menu/Analytics";
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
        {/* <Route path="/team" element={<Team />} />
        <Route path="/tasks" element={<Tasks />} /> */}
        <Route path="/chats" element={<Chats />} />
        <Route path="/analytics" element={<Analytics />} />

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
      <MainContainer>
        <Sidebar />
        {/* <SidebarWrapper>
          <Sidebar />
        </SidebarWrapper> */}
        <NewsBanner>
          <SlideItem />
        </NewsBanner>
        {/* <AlertDismissible /> */}
      </MainContainer>
      <Footer />
    </>
  );
};

const MainContainer = styled.div`
  width: 100%;
  height: 500px;
`;

// const SidebarWrapper = styled.span`
//   width: 15%;
// `;

const NewsBanner = styled.div`
  width: 85%;
  text-align: center;
  /* margin: auto; */
`;
