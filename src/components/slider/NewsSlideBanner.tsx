import styled from "styled-components";
import { MenuTitle } from "components/Menutitle";
import { SlideBanner } from "./index";

interface ISlideItemsProps {
  item: string;
  name: string;
}

const items: ISlideItemsProps[] = [
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

export const NewsSlideBanner = () => {
  return (
    <NewsBannerWrapper>
      <MenuTitle
        title="JOB NEWS"
        info="실시간으로 제공되는 최신 취업 소식을 확인해보세요."
      />
      <SlideBanner>
        {items.map((item, index) => (
          <SliderItem key={index}>
            <SlideImg src={item.item} alt={item.name} />
          </SliderItem>
        ))}
      </SlideBanner>
    </NewsBannerWrapper>
  );
};

const NewsBannerWrapper = styled.div`
  margin: 5vw;
`;

const SliderItem = styled.div`
  width: 100%;
  z-index: 1;
`;

const SlideImg = styled.img`
  width: 100%;
  margin: auto;
  text-align: center;
  border-radius: 10px;
`;
