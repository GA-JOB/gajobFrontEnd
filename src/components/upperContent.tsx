import { SlideItem } from "components/slider/SlideItem";
import { ButtonLink } from "./button/ButtonLink";
import styled from "styled-components";

export interface IUpperSlideProps {
  imgUrl: string;
  name: string;
}

const items: IUpperSlideProps[] = [
  {
    imgUrl:
      "https://img.freepik.com/free-vector/team-of-business-people-putting-hands-up-together_74855-19906.jpg?t=st=1648431164~exp=1648431764~hmac=6327b5c7a9bad4b614806c0178140c1338034da7e078686181fa11403dd3c315&w=1480",
    name: "이미지01",
  },
  {
    imgUrl:
      "https://img.freepik.com/free-vector/people-search-concept-illustration_114360-2656.jpg?t=st=1648431164~exp=1648431764~hmac=04fceb264aa27a720531bf7fefcab36bb68be8263f2bfdb972fcb2fc36cc286d&w=1480",
    name: "이미지02",
  },
  {
    imgUrl:
      "https://img.freepik.com/free-vector/team-leader-and-teamwork-concept_74855-6671.jpg?t=st=1648431164~exp=1648431764~hmac=e26542d96b662d322103cfafb7443ffd3a3556ee0f8da0b1dee268d60cb3f4b8&w=1480",
    name: "이미지03",
  },
  {
    imgUrl:
      "https://img.freepik.com/free-vector/happy-family-with-kid-sitting-on-sofa-and-watching-news-isolated-flat-illustration_74855-14049.jpg?t=st=1648520283~exp=1648520883~hmac=56dcf4c9b9111ec244643b4b395baf87dcacff9bf2d76d785b75c3e2d55c8dfa&w=1480",
    name: "이미지04",
  },
];

export const UpperContent = () => {
  return (
    <ContentsWrapper>
      <Contents>
        <Description>
          <ContentsTitle>SKHU 취업 소식 알림 플랫폼</ContentsTitle>
          <SubTitle>
            취업할 땐, <br />
            정보가 가장 중요하니까
          </SubTitle>
          우리 다같이 Get A Job ! <br />
          취업 NEWS 및 직군별 채용 공고 소식 알림은 물론,
          <br />
          관심 분야 STUDY 매칭까지 <Highlight>GA-JOB</Highlight> 에서
          체험하세요. <br />
          <ButtonLink title={"가입하기"} link={"/signup"} />
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
  height: 40vw;
  text-align: left;
  background-color: black;
  color: white;
`;

const Contents = styled.div`
  width: 100%;
  padding: 10vw 4vw;
`;

const ContentsTitle = styled.div`
  margin-bottom: 1vw;
  color: var(--brand-color);
  font-size: 11pt;
`;
const SubTitle = styled.h2`
  margin: 1vw 0;
`;

const Description = styled.div`
  float: left;
  width: 30%;
  margin: 1vw 0vw 0vw 8vw;
  font-size: 1.2vw;
  line-height: 2.5vw;
`;
const Highlight = styled.strong`
  color: var(--brand-color);

  &:hover {
    font-size: 12;
  }
`;

const SlideItemStyle = styled.div`
  float: right;
  width: 60%;
`;
