import { Loading } from "components/loading";
import { ButtonType } from "components/button/ButtonType";
import styled from "styled-components";
import { IContestCrawling } from "types";

interface IContestProps {
  data?: IContestCrawling[];
}

export const ContestGallery = ({ data }: IContestProps) => {
  if (!data) return <Loading />;
  return (
    <GalleryWrapper>
      {data.map((gallery: any, index: number) => (
        <ContentsBox key={index}>
          <ImgBox>
            <Img src={gallery.imgUrl} alt="imgAlt" />
          </ImgBox>
          <InfoBox>
            <TextTitle>
              <strong>{gallery.title}</strong>
            </TextTitle>
            <Text>주최기관 {gallery.organization}</Text>
            <Text>
              모집상태: {gallery.state} ({gallery.todayState})
            </Text>
            <HashBox> # {gallery.category}</HashBox>
            <ButtonType link={"http://" + gallery.url} title={"바로가기"} />
          </InfoBox>
        </ContentsBox>
      ))}
    </GalleryWrapper>
  );
};

const GalleryWrapper = styled.div`
  width: 100%;
  position: relative;
  z-index: 5;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const ContentsBox = styled.div`
  display: inline-block;
  width: 25%;
  height: 100%;
  margin: 1vw;

  border: 1px solid black;
`;
const ImgBox = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
`;
const Img = styled.img`
  width: 100%;
  max-height: initial;
  margin-bottom: -30%;
`;
const InfoBox = styled.div`
  width: 100%;
  padding: 0.5vw;
`;
const TextTitle = styled.div`
  font-size: 9pt;
`;
const Text = styled.div`
  font-size: 11pt;
`;
const HashBox = styled.div`
  padding: 5px;
  margin: 5px;
  background-color: #ffd8d8;
  border-radius: 10px;
  font-size: 10pt;
`;
