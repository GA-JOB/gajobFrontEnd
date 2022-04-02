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
      // dots: true,
      infinite: loop,
      speed: speed,
      slidesToShow: 1,
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
    </>
  );
};

const SlideWrapper = styled.section`
  width: 50%;
  margin: auto;
  text-align: center;
`;

// slick-slider css
const StyledSlider = styled(Slider)`
  .slick-dots li button:before {
    font-family: "slick";
    font-size: 6px;
    line-height: 20px;
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    content: "•";
    text-align: center;
    opacity: 0.25;
    color: white;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .slick-dots li.slick-active button:before {
    opacity: 0.75;
    color: white;
  }
`;
