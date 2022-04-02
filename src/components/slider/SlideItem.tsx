import styled from "styled-components";
import { MenuTitle } from "components/Menutitle";
import { SlideBanner } from "./index";
import { INewsCrawling } from "types";
import { IUpperSlideProps } from "components/UpperContent";

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
  if ((title === "JOB NEWS" && !data) || (title === "" && !upper_data))
    return <div>loading...</div>;

  if (title === "JOB NEWS") {
    return (
      <SlideBannerWrapper>
        <MenuTitle title={title} info={info} />
        <SlideBanner>
          {data?.map((list) => (
            <SliderItem key={list.id}>
              <NewsContentWrapper>
                <SlideImg
                  src={list.imgUrl + ".jpg"}
                  alt="newsImg"
                  width="100px"
                />
              </NewsContentWrapper>
              <NewsContentWrapper>
                <NewsTitle>{list.title}</NewsTitle>
                <NewsContents>{list.contents}</NewsContents>
              </NewsContentWrapper>
            </SliderItem>
          ))}
        </SlideBanner>
      </SlideBannerWrapper>
    );
  }
  return (
    <SlideBannerWrapper>
      <SlideBanner>
        {upper_data?.map((upper_data, index) => (
          <SliderItem key={index}>
            <NewsContentWrapper>
              <SlideImg src={upper_data.item} alt="newsImg" width="100px" />
            </NewsContentWrapper>
          </SliderItem>
        ))}
      </SlideBanner>
    </SlideBannerWrapper>
  );
};

const SlideBannerWrapper = styled.div`
  margin: 2vw auto;
  justify-content: center;
`;

const SliderItem = styled.div`
  width: 100%;
  min-height: 200px;
  z-index: 1;
`;

const SlideImg = styled.img`
  margin: auto;
  padding: 0.3vw;
  text-align: center;
  border-radius: 15px;
  width: 100%;
  height: 300px;
  object-fit: contain;
`;

const NewsContentWrapper = styled.span`
  display: inline-block;
`;
const NewsTitle = styled.h2``;
const NewsContents = styled.div``;
