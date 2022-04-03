import { MenuTitle } from "components/Menutitle";
import { SlideBanner } from "./index";
import { ButtonLink } from "components/button/ButtonLink";
import { IUpperSlideProps } from "components/UpperContent";
import styled from "styled-components";
import { INewsCrawling } from "types";

interface ISlideTitlerops {
  title: string;
  info: string;
  data?: INewsCrawling[]; // news banner slide item
  upper_data?: IUpperSlideProps[]; // upper content slide item
}

export const SlideItem = ({
  title,
  info,
  data,
  upper_data,
}: ISlideTitlerops) => {
  const SlideWidth = title === "" ? { width: "60%" } : { width: "80%" };

  if ((title !== "" && !data) || (title === "" && !upper_data))
    return <SlideBannerWrapper>loading...</SlideBannerWrapper>;

  if (title === "") {
    // upper banner
    return (
      <SlideBannerWrapper style={SlideWidth}>
        <SlideBanner>
          {upper_data?.map((list, id) => (
            <SliderItem key={id}>
              <UpperSlideImg src={list.imgUrl} alt={list.name} />
            </SliderItem>
          ))}
        </SlideBanner>
      </SlideBannerWrapper>
    );
  } else {
    // news banner
    return (
      <SlideBannerWrapper style={SlideWidth}>
        <MenuTitle title={title} info={info} />
        <SlideBanner>
          {data?.map((list) => (
            <SliderItem key={list.id}>
              <ImgContainer>
                <NewsSlideImg src={list.imgUrl} alt="ImageAlt" />
              </ImgContainer>

              <ContentsBox>
                <NewsTitle>{list.title}</NewsTitle>
                <NewsContents>{list.contents}</NewsContents>
                <ButtonLink title={"바로가기"} link={"https://" + list.url} />
              </ContentsBox>
            </SliderItem>
          ))}
        </SlideBanner>
      </SlideBannerWrapper>
    );
  }
};

const SlideBannerWrapper = styled.div`
  margin: 1vw auto;
`;

const SliderItem = styled.div`
  width: 90%;
  min-height: 200px;
  z-index: 1;
`;

const ImgContainer = styled.div`
  float: left;
  margin-left: 5vw;
  width: 30%;
`;
const UpperSlideImg = styled.img`
  margin: auto;
  padding: 0.8vw;
  border-radius: 20px;
  width: 100%;
`;
const NewsSlideImg = styled.img`
  margin: auto;
  width: 100%;
  height: 300px;
  object-fit: contain;
`;

const ContentsBox = styled.div`
  float: right;
  margin-right: 3vw;
  width: 55%;
  height: 250px;
  padding: 5vw 1vw;
`;

const NewsTitle = styled.h4`
  width: 100%;
`;
const NewsContents = styled.div`
  padding: 0 8vw;
  text-align: left;
`;
