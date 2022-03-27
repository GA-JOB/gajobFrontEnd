import { ShortcutItem } from "./ShortcutItem";
import AccordionMenu from "./accordionMenu";
import styled from "styled-components";

export const Shortcuts = () => {
  return (
    <ShortcutWrapper>
      <div> * GA JOB 에서는 이런 서비스를 제공해드려요 !</div>
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
  align-items: center;
`;

const ShortcutItems = styled.span`
  display: list-item;
  list-style: none;
  display: inline-block;
`;
