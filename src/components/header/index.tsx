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
    color: "white",
    transition: "0.2s",
    cursor: "pointer",
  };
  const hoverLogoStyle = {
    fontSize: "20pt",
    fontWeight: "normal",
    color: "white",
    transition: "0.2s",
    cursor: "pointer",
  };
  const signFontStyle = {
    margin: "5px",
    color: "white",
    fontSize: "10pt",
  };

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
      <Navbar bg="black" expand="lg">
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
              href="/"
            >
              {logoName}
            </Navbar.Brand>
          </LogoTitle>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav>
            <Nav.Link href="/job-news">
              <NavTitle>News</NavTitle>
            </Nav.Link>
            <Nav.Link href="/job-posting">
              <NavTitle> 채용공고</NavTitle>
            </Nav.Link>
            <Nav.Link href="/jobdam">
              <NavTitle>JOB담</NavTitle>
            </Nav.Link>
            <Nav.Link href="/gajob-study">
              <NavTitle> Study</NavTitle>
            </Nav.Link>
            <Nav.Link href="/mypage">
              <NavTitle> MyPage</NavTitle>
            </Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link href="#" style={signFontStyle}>
              로그인
            </Nav.Link>
            <Nav.Link href="#" style={signFontStyle}>
              회원가입
            </Nav.Link>
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

const LogoTitle = styled.div``;
const NavTitle = styled.div`
  margin: 5px;
  color: white;

  &:after {
    display: block;
    content: "";
    border-bottom: solid 3px #c9ae00;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: 0% 50%;
  }
`;

const MenuIconOpen = styled(Link)`
  display: flex;
  justify-content: start;
  font-size: 2rem;
  margin-left: 3rem;
  margin-top: -0.2vw;
  color: #ffffff;
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
  width: 20vw;
  height: 100vh;
  background-color: #000000;
  position: fixed;
  top: 0;
  left: ${({ close }) => (close ? "0" : "-100%")};
  transition: 0.6s;
  overflow: scroll;
`;

const MenuItems = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 90px;
  padding: 1rem 0 1rem;
`;

const MenuItemLinks = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0 3rem;
  font-size: 20px;
  text-decoration: none;
  color: #ffffff;

  &:hover {
    width: 100%;
    height: 45px;
    margin: 0 2rem;
    padding: 2rem;
    border-radius: 10px;
    background-color: #c9ae00;

    color: #000000;
    text-align: center;
    transition: 0.5s;
  }
`;
