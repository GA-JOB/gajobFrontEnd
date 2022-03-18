import { useState, MouseEvent } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import DensitySmallIcon from "@mui/icons-material/DensitySmall";
import styled from "styled-components";

export const Header = () => {
  const [logoName, setLogoName] = useState<String>("GA-JOB");

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
        <Container>
          <LogoTitle>
            <Navbar.Brand
              id="logo-name"
              onMouseEnter={onHoverLogo}
              onMouseLeave={onHoverLogo}
            >
              {" "}
              <DensitySmallIcon />
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
