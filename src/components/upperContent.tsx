import styled from "styled-components";
import { Button } from "@mui/material";

export const UpperContent = () => {
  return (
    <Contents>
      <span>
        <ContentsTitle>SKHU 취업 소식 알림 플랫폼</ContentsTitle>
        <Description>
          우리 다같이 Get A Job ! <br />
          카테고리 별 채용 공고를 한눈에
        </Description>
        <ButtonStyle variant="contained" href="#">
          가입하기
        </ButtonStyle>
      </span>
      <span>
        <img src=""></img>
      </span>
    </Contents>
  );
};

const Contents = styled.div`
  width: 100%;
  height: 15vw;
  background-color: black;
  color: white;
`;

const ContentsTitle = styled.div`
  color: #c9ae00;
  font-size: 10pt;
`;

const Description = styled.div``;

const ButtonStyle = styled(Button)`
  background-color: yellow;
`;
