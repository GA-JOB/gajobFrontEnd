import styled from "styled-components";
import { SlideBanner } from "./index";

interface itemsProps {
  item: string;
  name: string;
}

const items: itemsProps[] = [
  {
    item: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv382Pv78RFpHghWoGUgsQdmEBEgtZvqIR8g2CHyQykOqakEKbbcRpkDsCPGgY3LWf27Y&usqp=CAU",
    name: "이미지01",
  },
  {
    item: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgzWo1VXq_sT0DwtXt1v7MBnxq0z8mLbSvL_SLEixTbuDIJa7zUPVFGRzdAz40iGY8_Fo&usqp=CAU",
    name: "이미지02",
  },
  {
    item: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPWZjtRwwqVa-qNYgV6-LRW239zS23piqinIl7wSK1s9yYNsRJfEL24pTCgmg7NBAjA-g&usqp=CAU",
    name: "이미지03",
  },
];

export const SlideItem = () => {
  return (
    <SlideBanner>
      {items.map((item, index) => (
        <SliderItem key={index}>
          <SlideImg src={item.item} alt={item.name} />
        </SliderItem>
      ))}
    </SlideBanner>
  );
};

const SliderItem = styled.div`
  width: 100%;
`;

const SlideImg = styled.img`
  width: 40%;
  height: auto;
  margin: auto;
  margin-top: 2vw;
  text-align: center;
  border-radius: 10px;
`;
