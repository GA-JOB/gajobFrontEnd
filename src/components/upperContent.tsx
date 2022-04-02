import { SlideItem } from "components/slider/SlideItem";
import styled from "styled-components";
import { Button } from "@mui/material";

export interface IUpperSlideProps {
  item: string;
  name: string;
}

const items: IUpperSlideProps[] = [
  {
    item: "https://img.freepik.com/free-vector/team-of-business-people-putting-hands-up-together_74855-19906.jpg?t=st=1648431164~exp=1648431764~hmac=6327b5c7a9bad4b614806c0178140c1338034da7e078686181fa11403dd3c315&w=1480",
    name: "이미지01",
  },
  {
    item: "https://img.freepik.com/free-vector/people-search-concept-illustration_114360-2656.jpg?t=st=1648431164~exp=1648431764~hmac=04fceb264aa27a720531bf7fefcab36bb68be8263f2bfdb972fcb2fc36cc286d&w=1480",
    name: "이미지02",
  },
  {
    item: "https://img.freepik.com/free-vector/team-leader-and-teamwork-concept_74855-6671.jpg?t=st=1648431164~exp=1648431764~hmac=e26542d96b662d322103cfafb7443ffd3a3556ee0f8da0b1dee268d60cb3f4b8&w=1480",
    name: "이미지03",
  },
  {
    item: "https://img.freepik.com/free-vector/happy-family-with-kid-sitting-on-sofa-and-watching-news-isolated-flat-illustration_74855-14049.jpg?t=st=1648520283~exp=1648520883~hmac=56dcf4c9b9111ec244643b4b395baf87dcacff9bf2d76d785b75c3e2d55c8dfa&w=1480",
    name: "이미지04",
  },
];

export const UpperContent = () => {
  const ButtonStyle = {
    marginTop: "2vw",
    marginBottom: "5vw",
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
          <SlideItem title="" info="" upper_data={items} />
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
