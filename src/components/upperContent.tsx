import styled from "styled-components";
import { Button } from "@mui/material";
import { UpperSlideBanner } from "./slider/UpperSlideBanner";

export const UpperContent = () => {
  const ButtonStyle = {
    marginTop: "2vw",
    marginBottom: "2vw",
  };

  return (
    <ContentsWrapper>
      <Contents>
        <Description>
          <ContentsTitle>SKHU 취업 소식 알림 플랫폼</ContentsTitle>
          우리 다같이 Get A Job ! <br />
          취업 NEWS 및 직군별 채용 공고 소식 알림은 물론,
          <br />
          관심 분야 STUDY 매칭까지 <Highlight>GA-JOB</Highlight> 에서
          도와드립니다. <br />
          <Button variant="contained" href="#" style={ButtonStyle}>
            가입하기
          </Button>
        </Description>

        <SlideItemStyle>
          <UpperSlideBanner />
        </SlideItemStyle>
      </Contents>
    </ContentsWrapper>
  );
};

const ContentsWrapper = styled.div`
  width: 100%;
  min-height: 20vw;
  text-align: left;
  background-color: black;
  color: white;
`;

const Contents = styled.div`
  padding: 2vw 0 6vw 10vw;
`;

const ContentsTitle = styled.div`
  margin-bottom: 1vw;
  color: #c9ae00;
  font-size: 11pt;
`;

const Description = styled.span`
  width: 30%;
  font-size: 13pt;
  line-height: 3vw;
  display: inline-block;
`;
const Highlight = styled.strong`
  color: #c9ae00;

  &:hover {
    font-size: 12;
    cursor: pointer;
  }
`;

const SlideItemStyle = styled.span`
  width: 70%;
  display: inline-block;
`;
