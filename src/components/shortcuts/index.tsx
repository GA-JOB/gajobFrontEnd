import { ShortcutItem } from "./ShortcutItem";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Shortcuts = () => {
  // MouseHover 이벤트에 의한 shortcut 상태 변화
  //  const onShortcutChange = (e: MouseEvent<HTMLDivElement>) => {
  //   const { target } = e;
  //   if ((target as HTMLElement).id !== "logo-name") return;

  //   if (logoName === "GA-JOB") {
  //     setLogoName("Get A JOB !");
  //   } else {
  //     setLogoName("GA-JOB");
  //   }
  //   // history.push("/") 추가
  // };

  return (
    <>
      <ShortcutWrapper>
        {ShortcutItem.map((item, index) => {
          return (
            <ShortcutBox>
              <ShortcutItems key={index}>
                <ShortcutLinks to={item.path}>
                  {item.icon}
                  <span style={{ marginLeft: "16px" }}>{item.title}</span>
                </ShortcutLinks>
              </ShortcutItems>
            </ShortcutBox>
          );
        })}
      </ShortcutWrapper>
    </>
  );
};

const ShortcutWrapper = styled.div`
  width: 100%;
  margin-top: 12vw;
  text-align: center;
`;

const ShortcutBox = styled.span`
  width: 10%;
  border: 2px solid black;
  border-radius: 10px;
  margin: 1vw;
  padding: 6vw;
`;

const ShortcutItems = styled.span`
  width: 20%;
  height: 20%;
  padding: 1rem 0 1.25rem;
`;

const ShortcutLinks = styled(Link)`
  padding: 0 2rem;
  font-size: 20px;
  text-decoration: none;
  color: black;

  &:hover {
    background-color: #ffffff;
    color: #000080;
    margin: 0 1rem;
    border-radius: 5px;
    text-align: center;
    transition: 1s;
  }
`;
