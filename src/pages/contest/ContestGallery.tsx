import { ButtonType } from "components/button/ButtonType";
import styled from "styled-components";
// import { IContestCrawling } from "types";

interface IContestProps {
  data: any;
}

export const ContestGallery = ({ data }: IContestProps) => {
  return (
    <GalleryWrapper>
      {data.map((box: any, index: number) => (
        <ContentsBox key={index}>
          <Img src={box.imgUrl} alt="imgAlt" />
          <InfoBox>
            <TextTitle>
              <strong>{box.title}</strong>
            </TextTitle>
            <Text>주최기관: {box.organization}</Text>
            <Text>모집상태: {box.state}</Text>
            <Text>카테고리: {box.category}</Text>
            <ButtonType link={box.url} title={"바로가기"} />
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
`;

const ContentsBox = styled.div`
  display: inline-block;
  width: 18%;
  height: 100%;
  margin: 1%;

  border: 1px solid black;
`;
const Img = styled.img`
  width: 100%;
`;
const InfoBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 0.5vw;
`;
const TextTitle = styled.h5``;
const Text = styled.div`
  width: 100%;
  font-size: 11pt;
`;
