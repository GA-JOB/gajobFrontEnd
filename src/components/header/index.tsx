import React, { useState, MouseEvent } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import styled from "styled-components";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Menu, MenuOpen } from "@mui/icons-material";

export const Header = () => {
  const [close, setClose] = useState(false);
  const showSidebar = () => setClose(!close);

  const [logoName, setLogoName] = useState<String>("GA-JOB");
  const defaultLogoStyle = {
    fontSize: "18pt",
    fontWeight: "lighter",
    transition: "0.2s",
    cursor: "pointer",
  };
  const hoverLogoStyle = {
    fontSize: "20pt",
    fontWeight: "normal",
    transition: "0.2s",
    cursor: "pointer",
  };
  // 변수 지정하기

  // MouseHover 이벤트에 의한 logo 상태 변화.
  const onHoverLogo = (e: MouseEvent<HTMLDivElement>) => {
    const { target } = e;
    if ((target as HTMLElement).id !== "logo-name") return;

    if (logoName === "GA-JOB") {
      setLogoName("Get A JOB !");
    } else {
      setLogoName("GA-JOB");
    }
    // history.push("/") 추가
  };

  return (
    <header>
      <Navbar bg="light" expand="lg">
        <MenuIconOpen to="#" onClick={showSidebar}>
          <Menu />
        </MenuIconOpen>

        <Container>
          <LogoTitle>
            <Navbar.Brand
              id="logo-name"
              onMouseEnter={onHoverLogo}
              onMouseLeave={onHoverLogo}
              style={logoName === "GA-JOB" ? defaultLogoStyle : hoverLogoStyle}
            >
              {logoName}
            </Navbar.Brand>
          </LogoTitle>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/job-posting">채용공고</Nav.Link>
            <Nav.Link href="/jobdam">Job담</Nav.Link>
            <Nav.Link href="/gajob-study">Study</Nav.Link>
            <Nav.Link href="/mypage">MyPage</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <SidebarMenu close={close}>
        <MenuIconClose to="#" onClick={showSidebar}>
          <MenuOpen />
        </MenuIconClose>

        {SidebarData.map((item, index) => {
          return (
            <MenuItems key={index}>
              <MenuItemLinks to={item.path}>
                {item.icon}
                <span style={{ marginLeft: "16px" }}>{item.title}</span>
              </MenuItemLinks>
            </MenuItems>
          );
        })}
      </SidebarMenu>
    </header>
  );
};

const LogoTitle = styled.div`
  /* font-weight: bold; */
`;

const MenuIconOpen = styled(Link)`
  display: flex;
  justify-content: start;
  font-size: 2rem;
  margin-left: 3.5rem;
  margin-top: -0.2vw;
  color: black;
`;

const MenuIconClose = styled(Link)`
  display: flex;
  justify-content: end;
  font-size: 2rem;
  margin-top: 0.75rem;
  margin-right: 1rem;
  color: #ffffff;
`;

const SidebarMenu = styled.div<{ close: boolean }>`
  width: 250px;
  height: 100vh;
  background-color: #000010;
  position: fixed;
  top: 0;
  left: ${({ close }) => (close ? "0" : "-100%")};
  transition: 0.6s;
`;

const MenuItems = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 90px;
  padding: 1rem 0 1.25rem;
`;

const MenuItemLinks = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0 2rem;
  font-size: 20px;
  text-decoration: none;
  color: #ffffff;

  &:hover {
    background-color: #ffffff;
    color: #000010;
    width: 100%;
    height: 45px;
    text-align: center;
    border-radius: 5px;
    margin: 0 2rem;
  }
`;
