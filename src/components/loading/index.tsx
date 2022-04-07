import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const boxs: any = [1, 2, 3];
export const Loading = () => {
  return (
    <LoadingWrapper>
      <Text>loading ...</Text>
      <Container>
        {boxs.map((box: any, index: number) => (
          <>
            <LoadingIcon key={index} />
          </>
        ))}
      </Container>
    </LoadingWrapper>
  );
};

const bounce = keyframes`
  0% {transform: translateY(0);}
  50% {transform: translateY(-15px);}
  100% {transform: translateY(0);}
`;

const LoadingWrapper = styled.div`
  position: relative;
  padding: 5vw;
`;
const Text = styled.div`
  width: 100%;
  margin: 0 auto;
  animation: ${bounce} 3s ease infinite;
  font-size: 12pt;
  text-align: center;
  color: gray;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const LoadingIcon = styled.div`
  width: 20px;
  height: 20px;
  margin: 0.3vw;
  border-radius: 100%;
  background-color: gray;
  animation: ${bounce} 3s ease infinite;
`;
