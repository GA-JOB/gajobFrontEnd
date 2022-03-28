import React from "react";
import { Link } from "react-router-dom";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import styled from "styled-components";

type Props = {
  title?: string | React.ReactNode;
  imgUrl?: string | undefined;
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
        parentRef.current.style.background = "white";
      } else {
        parentRef.current.style.height = `${childRef.current.clientHeight}px`;
        parentRef.current.style.background = "lightgray";
        parentRef.current.style.borderRadius = "5px";
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
      <img src={props.imgUrl} alt="ShortcutImg" width={"300px"} />
      <MenuWrapper
        onMouseEnter={MenuButtonHover}
        onMouseLeave={MenuButtonHover}
      >
        <MenuContainer>
          <LinkStyle to={props.path}> {props.title}</LinkStyle>
          <Button>{buttonIcon}</Button>
        </MenuContainer>
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
  height: 50%;
  padding: 1vw;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;

  border: 1px solid silver;
  border-radius: 20px;

  &:hover {
    background-color: #ffffff;
    margin: 0.2rem;
    transition: 1s;
  }
`;

const MenuContainer = styled.div`
  /* width: 10%; */
  display: flex;
  align-items: center;
  cursor: pointer;

  height: 32px;
  margin-left: 1vw;
`;

const LinkStyle = styled(Link)`
  padding-left: 2.3rem;
  text-decoration: none;
  color: black;

  &:hover {
    background-color: #ffffff;
    color: #000080;
    margin: 0.8rem;
    transition: 1s;
  }
`;

const Button = styled.div`
  right: 1vw;
  position: absolute;
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
