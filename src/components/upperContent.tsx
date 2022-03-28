import styled from "styled-components";
import { Button } from "@mui/material";
import { SlideItem } from "./slider/SlideItem";

export const UpperContent = () => {
  const ButtonStyle = {
    marginTop: "1vw",
  };

  return (
    <ContentsWrapper>
      <Contents>
        <ContentsTitle>SKHU 취업 소식 알림 플랫폼</ContentsTitle>
        <Description>
          우리 다같이 Get A Job ! <br />
          실시간 취업 NEWS 및 직군별 채용 공고 소식 알림은 물론,
          <br />
          관심 분야에 맞는 STUDY 매칭까지 GA-JOB 에서 도와드립니다
        </Description>
        <Button variant="contained" href="#" style={ButtonStyle}>
          가입하기
        </Button>
        <Description>
          <SlideItemStyle />
        </Description>
      </Contents>
    </ContentsWrapper>
  );
};

const ContentsWrapper = styled.div`
  width: 100%;
  min-height: 15vw;
  text-align: left;
  background-color: black;
  color: white;
`;

const Contents = styled.div`
  padding: 2vw 0 5vw 10vw;
`;

const ContentsTitle = styled.div`
  position: relative;
  color: #c9ae00;
  font-size: 10pt;
`;

const Description = styled.div`
  line-height: 3vw;
`;

const SlideItemStyle = styled(SlideItem)`
  width: 50%;
`;
