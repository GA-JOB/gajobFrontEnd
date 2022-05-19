import { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import styled from "styled-components";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Menu, MenuOpen } from "@mui/icons-material";
import storage from "hooks/store";

export const Header = () => {
  const token = storage.get("user-token");
  const nickname = storage.get("user-nickname");

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
    fontSize: 13,
  };

  // MouseHover 이벤트에 의한 logo 상태 변화.
  const onHoverLogo = (e: any) => {
    const { target } = e;
    if ((target as HTMLElement).id !== "logo-name") return;

    if (logoName === "GA-JOB") {
      setLogoName("Get A JOB !");
    } else {
      setLogoName("GA-JOB");
    }
  };

  return (
    <header>
      <Navbar bg="black" expand="lg">
        <MenuIconOpen to="#" onClick={showSidebar}>
          <Menu />
        </MenuIconOpen>

        <ContainerStyle>
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
            <Nav.Link href="/contest">
              <NavTitle>공모전</NavTitle>
            </Nav.Link>
            <Nav.Link href="/job-posting">
              <NavTitle> 채용공고</NavTitle>
            </Nav.Link>
            <Nav.Link href="/jobdam">
              <NavTitle>JOB담</NavTitle>
            </Nav.Link>
            <Nav.Link href="/study">
              <NavTitle>Study</NavTitle>
            </Nav.Link>
          </Nav>

          <Nav>
            {token ? (
              <>
                <Nav.Link style={signFontStyle}>
                  <strong>{nickname} 님</strong>
                </Nav.Link>

                <Nav.Link href="/mypage" style={signFontStyle}>
                  마이페이지
                </Nav.Link>
                <Nav.Link
                  href="/"
                  style={signFontStyle}
                  onClick={() => storage.remove("user-token")}
                >
                  로그아웃
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href="/login" style={signFontStyle}>
                  로그인
                </Nav.Link>
                <Nav.Link href="/signup" style={signFontStyle}>
                  회원가입
                </Nav.Link>
              </>
            )}
          </Nav>
        </ContainerStyle>
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
                <MenuTitle style={{ marginLeft: "16px" }}>
                  {item.title}
                </MenuTitle>
              </MenuItemLinks>
            </MenuItems>
          );
        })}
      </SidebarMenu>
    </header>
  );
};

const ContainerStyle = styled(Container)`
  z-index: 10;
  @media screen and (max-width: 1000px) {
    height: 5vw;
  }
`;
const LogoTitle = styled.div`
  @media screen and (max-width: 1000px) {
    width: 100%;
    margin-top: -3vw;
    text-align: center;
  }
`;
const NavTitle = styled.div`
  margin-left: 10px;
  color: white;

  &:after {
    display: block;
    content: "";
    border-bottom: solid 3px var(--brand-color);
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: 0% 50%;
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const MenuIconOpen = styled(Link)`
  display: flex;
  justify-content: start;
  font-size: 2rem;
  margin-left: 3rem;
  margin-top: -0.3vw;
  color: #ffffff;

  @media screen and (max-width: 900px) {
    margin-top: 2vw;
    margin-bottom: -2vw;
  }
`;

const MenuIconClose = styled(Link)`
  display: flex;
  justify-content: end;
  font-size: 2rem;
  margin-top: 0.75rem;
  margin-right: 1rem;
  color: #ffffff;

  @media screen and (max-width: 900px) {
    margin-top: 2vw;
    margin-bottom: -2vw;
  }
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
  font-size: 1.5vw;
  text-decoration: none;
  color: #ffffff;

  &:hover {
    width: 100%;
    height: 45px;
    margin: 0 2rem;
    padding: 2rem;
    border-radius: 10px;
    background-color: var(--brand-color);

    color: #000000;
    text-align: center;
    transition: 0.5s;
  }

  @media screen and (max-width: 900px) {
    padding: 0 2rem;
    &:hover {
      margin: 0 1rem;
      padding: 1rem;
      border-radius: 100%;
      background-color: var(--brand-color);

      color: #000000;
      text-align: center;
      transition: 0.5s;
    }
  }
`;
const MenuTitle = styled.span`
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
