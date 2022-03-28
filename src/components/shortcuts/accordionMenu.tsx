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
        // parentRef.current.style.background = "white";
      } else {
        parentRef.current.style.height = `${childRef.current.clientHeight}px`;
        parentRef.current.style.background = "#c9ae00";
        parentRef.current.style.color = "black";
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
      <ImgStyle src={props.imgUrl} alt="ShortcutImg" />
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

const ImgStyle = styled.img`
  width: 250px;
  padding: 1vw;
`;
const MenuWrapper = styled.div`
  width: 20vw;
  height: 50%;
  padding: 1vw;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;

  border-radius: 20px;
  background-color: black;
  color: white;
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  cursor: pointer;

  height: 2.5vw;
  margin-left: 1.6vw;
`;

const LinkStyle = styled(Link)`
  padding-left: 0;
  text-decoration: none;
  color: white;

  &:hover {
    margin: 2.5rem;
    color: white;
    transition: 1.5s;
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
