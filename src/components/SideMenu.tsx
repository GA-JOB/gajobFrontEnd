import { useState } from "react";
import styled from "styled-components";

export const SideMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const onOptionClicked = (value: any) => () => {
    setIsOpen(!isOpen);
    setSelectedOption(value);
    console.log(selectedOption);
  };

  const options = [
    {
      id: 0,
      title: "개인정보 관리",
      path: "/job-news",
      description: ["개인정보 조회", "학생정보 등록", "계정 삭제"],
    },
    {
      id: 1,
      title: "게시물 관리",
      path: "/job-news",
      description: ["내가 쓴 글", "스크랩 조회", "좋아요 조회"],
    },
  ];

  return (
    <>
      <SideNavWrapper>
        <SideNav>
          <NavTitle>category</NavTitle>
          {options.map((option: any, index: number) => (
            <NavWrapper key={index}>
              <NavList>
                <div onClick={onOptionClicked(option.title)}>
                  {option.title}
                </div>
              </NavList>

              <DropDownContainer>
                {selectedOption === option.title && (
                  <>
                    {isOpen && (
                      <DropDownList>
                        {option?.description.map((nav: any, index: number) => (
                          <ListItem key={index}>{nav}</ListItem>
                        ))}
                      </DropDownList>
                    )}
                  </>
                )}
              </DropDownContainer>
            </NavWrapper>
          ))}
        </SideNav>
      </SideNavWrapper>
    </>
  );
};

const SideNavWrapper = styled.div`
  width: 30%;
  height: 100%;

  vertical-align: baseline;
`;
const SideNav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  width: 15%;
  height: 35%;
  overflow: scroll;
  margin-top: 18vw;
  margin-left: 10vw;
  padding: 1vw;
  border: 1px solid lightgray;
  background-color: white;
  border-radius: 5px;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
const NavTitle = styled.div`
  font-weight: lighter;
  margin: 0.3vw 0.5vw;
`;
const NavWrapper = styled.div`
  margin: 1vw;
`;
const NavList = styled.div`
  list-style: none;
  padding: 0.3vw;
  font-size: 11pt;
  letter-spacing: 1px;
  cursor: pointer;

  &:hover {
    padding: 0.3vw 1vw;
    background-color: #eaeaea;
    border-radius: 5px;
    transition: 0.5s;
  }
`;

const DropDownContainer = styled.div`
  margin-left: 1vw;
  font-size: 10pt;
`;
const DropDownList = styled.ul`
  padding-left: 1em;
  cursor: pointer;

  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled.li`
  list-style: none;
  margin-bottom: 0.8em;
`;
