import { ShortcutItem } from "./ShortcutItem";
import AccordionMenu from "./accordionMenu";
import styled from "styled-components";

export const Shortcuts = () => {
  return (
    <ShortcutWrapper>
      <ShortcutTitle>GA-JOB 에서는 이런 서비스를 제공해드려요 !</ShortcutTitle>
      {ShortcutItem.map((item, index) => {
        return (
          <ShortcutItems key={index}>
            <AccordionMenu
              title={item.title}
              imgUrl={item.imgUrl}
              path={item.path}
              contents={item.description}
            />
          </ShortcutItems>
        );
      })}
    </ShortcutWrapper>
  );
};

const ShortcutWrapper = styled.div`
  width: 100%;
  margin-top: 5vw;
  padding: 5vw 0 10vw 0;
  align-items: center;

  color: #fff;
  /* background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB); */
  background: linear-gradient(-45deg, #a2d5ff, #faf4c0, #e85d92, #23a6d5);
  background-size: 400% 400%;
  -webkit-animation: Gradient 15s ease infinite;
  -moz-animation: Gradient 15s ease infinite;
  animation: Gradient 15s ease infinite;

  @-webkit-keyframes Gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @-moz-keyframes Gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes Gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const ShortcutTitle = styled.div`
  font-size: 15pt;
  color: black;
`;

const ShortcutItems = styled.span`
  display: list-item;
  list-style: none;
  display: inline-block;
  margin: 1vw;
`;
