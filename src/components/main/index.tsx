import { UpperContent } from "components/UpperContent";
import { SlideItem } from "components/slider/SlideItem";
import { ShortcutMenu } from "components/shortcuts";
import styled from "styled-components";
import useGetNews from "hooks/api/useGetNews";

export const Home = () => {
  const { data } = useGetNews();

  return (
    <>
      <MainContainer>
        <UpperContentStyle />
        <SliderStyle
          title="JOB NEWS"
          info="실시간으로 제공되는 최신 취업 소식을 확인해보세요."
          data={data}
        />
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

const UpperContentStyle = styled(UpperContent)`
  margin: 2vw;
`;

const SliderStyle = styled(SlideItem)`
  width: 100%;
  text-align: center;
`;
