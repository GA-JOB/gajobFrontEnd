import { useMemo } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

interface sliderProps {
  children: React.ReactNode;
  className?: string;
  autoplay?: boolean | number;
  speed?: number;
  loop?: boolean;
}

export const SlideBanner = ({
  children,
  className,
  autoplay = true,
  speed = 500,
  loop = true,
}: sliderProps) => {
  const settings = useMemo<Settings>(
    () => ({
      dots: true,
      infinite: loop,
      speed: speed,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: Boolean(autoplay),
      autoplaySpeed: typeof autoplay === "boolean" ? 2500 : autoplay,
    }),
    [autoplay, loop, speed]
  );

  const multipleSettings = useMemo<Settings>(
    () => ({
      dots: true,
      infinite: loop,
      speed: speed,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: Boolean(autoplay),
      autoplaySpeed: typeof autoplay === "boolean" ? 2500 : autoplay,
    }),
    [autoplay, loop, speed]
  );

  return (
    <>
      <SlideWrapper className={className}>
        <StyledSlider {...settings}>{children}</StyledSlider>
      </SlideWrapper>
      {/* <SlideWrapper className={className}>
        <StyledSlider {...multipleSettings}>{children}</StyledSlider>
      </SlideWrapper> */}
    </>
  );
};

const SlideWrapper = styled.section`
  /* position: relative; */
  width: 60%;
  height: 10%;
  margin: auto;
  text-align: center;
`;

// slick-slider css
const StyledSlider = styled(Slider)`
  ul.slick-dots {
    width: 100%;
    text-align: center;
  }
  /* button.slick-arrow.slick-next {
    background-color: black;
  } */
`;
