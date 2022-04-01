import { UpperContent } from "components/upperContent";
import { NewsSlideBanner } from "components/slider/NewsSlideBanner";
import { ShortcutMenu } from "components/shortcuts";
import styled from "styled-components";

export const Home = () => {
  return (
    <>
      <MainContainer>
        <UpperContent />
        <SliderStyle />
        <ShortcutMenu />
      </MainContainer>
    </>
  );
};

const MainContainer = styled.div`
  position: relative;
  z-index: 0;
  width: 100%;
  margin-top: -6vw;
  margin-bottom: -10vw;

  text-align: center;
  font-weight: 20pt;
`;

const SliderStyle = styled(NewsSlideBanner)`
  width: 100%;
  text-align: center;
`;