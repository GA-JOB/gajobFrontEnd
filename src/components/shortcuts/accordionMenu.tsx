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
        parentRef.current.style.background = "black";
        parentRef.current.style.color = "white";
        parentRef.current.style.opacity = "0.6";
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
      <LinkStyle to={props.path}> {props.icon}</LinkStyle>
      <MenuWrapper onClick={MenuButtonHover}>
        <ButtonStyle>
          <Button>
            {props.title}
            {buttonIcon}
          </Button>
        </ButtonStyle>
        <ContentsWrapper ref={parentRef}>
          <Contents ref={childRef}>{props.contents}</Contents>
        </ContentsWrapper>
      </MenuWrapper>
    </>
  );
}

export default React.memo(AccordionMenu);

const MenuWrapper = styled.div`
  width: 20vw;
  height: 20%;
  margin: 2vw 0 2vw 0;
  position: relative;
  flex-direction: column;
  justify-content: center;

  color: black;
`;

const LinkStyle = styled(Link)`
  padding: 0rem;
  margin: 1vw;
  text-align: center;
  text-decoration: none;
  color: black;
`;

const Button = styled.div`
  width: 100%;
  height: 8vw;
  align-items: center;
  text-align: center;
  letter-spacing: 2px;
  cursor: pointer;
  position: absolute;
`;

const ButtonStyle = styled.div`
  width: 100%;
  height: 3vw;
`;

const ContentsWrapper = styled.div`
  height: 0;
  overflow: hidden;
  transition: height 0.35s ease, background 0.35s ease;
`;

const Contents = styled.div`
  padding: 1vw;
  font-size: 11pt;
`;
