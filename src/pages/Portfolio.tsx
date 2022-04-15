import styled from "styled-components";
import storage from "hooks/store";

const PortfolioWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  height: 70vh;
`;

export const Portfolio = () => {
  const token = storage.get("user-token");

  if (!token) return <>접근 못함</>;
  return <PortfolioWrapper>Portfolio</PortfolioWrapper>;
};
