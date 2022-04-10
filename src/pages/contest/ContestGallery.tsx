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
      {data.map((box: any, index: number) => (
        <ContentsBox key={index}>
          <ImgBox>
            <Img src={box.imgUrl} alt="imgAlt" />
          </ImgBox>
          <InfoBox>
            <TextTitle>
              <strong>{box.title}</strong>
            </TextTitle>
            <Text>주최기관 {box.organization}</Text>
            <Text>
              모집상태: {box.state} ({box.todayState})
            </Text>
            {/* <Text>카테고리: {box.category}</Text> */}
            <ButtonType link={"http://" + box.url} title={"바로가기"} />
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
  width: 17%;
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
