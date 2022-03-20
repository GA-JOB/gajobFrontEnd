import { useState, MouseEvent } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import styled from "styled-components";

interface IHeaderProps {
  MenuClickRes: boolean;
  onClickMenuRes: () => void;
}

export const Header = ({ MenuClickRes, onClickMenuRes }: IHeaderProps) => {
  const [logoName, setLogoName] = useState<String>("GA-JOB");
  const defaultLogoStyle = {
    fontSize: "18pt",
    fontWeight: "lighter",
    transition: "0.2s",
  };
  const hoverLogoStyle = {
    fontSize: "20pt",
    fontWeight: "bolder",
    transition: "0.2s",
  };
  // 변수 지정하기

  // MouseHover 이벤트에 의한 logo 상태 변화.
  const onHoverLogo = (e: MouseEvent<HTMLDivElement>) => {
    const { target } = e;
    if ((target as HTMLElement).id !== "logo-name") return;

    if (logoName === "GA-JOB") {
      setLogoName("Get A Job !");
    } else {
      setLogoName("GA-JOB");
    }
  };

  return (
    <header>
      <Navbar bg="light" expand="lg">
        <MenuIconWrap onClick={onClickMenuRes}>
          {MenuClickRes === true ? (
            <MenuOpenIcon fontSize="large" />
          ) : (
            <MenuIcon fontSize="large" />
          )}
        </MenuIconWrap>

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
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>JOB담</Nav.Link>
            <Nav.Link>Matching</Nav.Link>
            <Nav.Link>MyPage</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

const LogoTitle = styled.div`
  font-weight: bold;
`;

const MenuIconWrap = styled.span`
  margin-left: 3vw;
  cursor: pointer;
`;
