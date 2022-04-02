import styled from "styled-components";

interface IMenuTitleProps {
  title: string;
  info: string;
}

export const MenuTitle = ({ title, info }: IMenuTitleProps) => {
  return (
    <TitleWrapper>
      <Title>{title}</Title>
      <Info>{info}</Info>
      <HrLine />
    </TitleWrapper>
  );
};

const TitleWrapper = styled.div`
  margin-top: 5vw;
`;
const Title = styled.div`
  font-size: 25pt;
  font-weight: bold;
`;
const Info = styled.div`
  font-size: 10pt;
  opacity: 0.6;
`;
const HrLine = styled.hr`
  width: 10%;

  margin: 2vw auto;
`;
