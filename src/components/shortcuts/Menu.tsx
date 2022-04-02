import { ShortcutItem } from "./ShortcutItem";
import AccordionMenu from "./accordionMenu";
import styled from "styled-components";

export const Menu = () => {
  return (
    <>
      <ShortcutWrapper>
        {ShortcutItem.map((item, index) => {
          return (
            <ShortcutItems key={index}>
              <AccordionMenu
                title={item.title}
                icon={item.icon}
                path={item.path}
                contents={item.description}
              />
            </ShortcutItems>
          );
        })}
      </ShortcutWrapper>
    </>
  );
};

const ShortcutWrapper = styled.div`
  width: 100%;
`;

const ShortcutItems = styled.span`
  margin-bottom: 2vw;
  display: inline-block;
`;
