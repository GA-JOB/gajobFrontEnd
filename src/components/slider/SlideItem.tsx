import { MenuTitle } from "components/Menutitle";
import { SlideBanner } from "./index";
import { IUpperSlideProps } from "components/UpperContent";
import styled from "styled-components";
import { Button } from "@mui/material";
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
  const ButtonStyle = {
    marginTop: "2vw",
    marginBottom: "5vw",
  };

  if ((title !== "" && !data) || (title === "" && !upper_data))
    return <div>loading...</div>;

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
                <NewsSlideImg src={list.imgUrl + ".jpg"} alt="ImageAlt" />
              </ImgContainer>

              <ContentsBox>
                <NewsTitle>{list.title}</NewsTitle>
                <NewsContents>{list.contents}</NewsContents>
                <Button
                  variant="contained"
                  href={"https://" + list.url}
                  style={ButtonStyle}
                >
                  바로가기
                </Button>
              </ContentsBox>
            </SliderItem>
          ))}
        </SlideBanner>
      </SlideBannerWrapper>
    );
  }
};

const SlideBannerWrapper = styled.div`
  margin: 2vw auto;
`;

const SliderItem = styled.div`
  width: 100%;
  min-height: 200px;
  z-index: 1;
`;

const ImgContainer = styled.div`
  float: left;
  width: 40%;
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
  height: 350px;
  object-fit: contain;
`;

const ContentsBox = styled.div`
  float: right;
  width: 60%;
  height: 250px;
  padding: 8vw 1vw;
`;

const NewsTitle = styled.h4`
  width: 100%;
`;
const NewsContents = styled.div`
  padding: 0 8vw;
`;
