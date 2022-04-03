import React from "react";
import { Link } from "react-router-dom";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import styled from "styled-components";

type Props = {
  title?: string | React.ReactNode;
  icon?: React.ReactNode;
  path: string;
  contents?: string | React.ReactNode;
  // onClick: () => void;
};

function AccordionMenu(props: Props) {
  const parentRef = React.useRef<HTMLDivElement>(null);
  const childRef = React.useRef<HTMLDivElement>(null);
  const [isCollapse, setIsCollapse] = React.useState(false);

  const MenuButtonHover = React.useCallback(
    (e) => {
      e.stopPropagation();
      if (parentRef.current === null || childRef.current === null) {
        return;
      }
      if (parentRef.current.clientHeight > 0) {
        parentRef.current.style.height = "0";
      } else {
        parentRef.current.style.height = `${childRef.current.clientHeight}px`;
        parentRef.current.style.width = `15vw`;
        parentRef.current.style.background = "black";
        parentRef.current.style.color = "white";
        parentRef.current.style.borderRadius = "20px";
      }
      setIsCollapse(!isCollapse);
    },
    [isCollapse]
  );

  const parentRefHeight = parentRef.current?.style.height ?? "0px";
  const buttonIcon =
    parentRefHeight === "0px" ? <ArrowDropDown /> : <ArrowDropUp />;

  return (
    <>
      <LinkWrapper>
        <LinkStyle to={props.path}> {props.icon}</LinkStyle>
      </LinkWrapper>
      <MenuWrapper onClick={MenuButtonHover}>
        <Button>
          {props.title} {buttonIcon}
        </Button>
        <ContentsWrapper ref={parentRef}>
          <Contents ref={childRef}>{props.contents}</Contents>
        </ContentsWrapper>
      </MenuWrapper>
    </>
  );
}

export default React.memo(AccordionMenu);

const LinkWrapper = styled.div`
  width: 100%;
  margin: 1vw 0.5vw;
  text-align: left;
`;
const LinkStyle = styled(Link)`
  text-decoration: none;
  color: black;

  &:hover {
    margin: 0 1rem;
    transition: 1s;
  }
`;

const MenuWrapper = styled.div`
  /* display: flex; */
  min-width: 15vw;
  margin: 1vw 0.5vw;
  position: relative;
  flex-direction: column;
  opacity: 0.6;

  color: black;
`;

const Button = styled.div`
  /* display: flex; */
  width: 15vw;
  text-align: left;
  letter-spacing: 1px;
  cursor: pointer;
  position: relative;
`;

const ContentsWrapper = styled.div`
  height: 0;
  overflow: hidden;
  transition: height 0.35s ease, background 0.35s ease;
  cursor: pointer;
`;

const Contents = styled.div`
  padding: 1vw;
  font-size: 10pt;
  text-align: center;
`;
