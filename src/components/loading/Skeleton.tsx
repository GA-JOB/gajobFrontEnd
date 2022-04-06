import styled from "styled-components";
import { Skeleton } from "@mui/material";

export const SkeletonLoading = () => {
  const boxs: any = [1, 2, 3, 4, 5];

  return (
    <LoadingWrapper>
      <ImgBox>
        <Skeleton
          variant="rectangular"
          animation="wave"
          width={400}
          height={200}
        />
      </ImgBox>
      <TxtBox>
        {boxs.map((box: any, index: number) => (
          <>
            <Skeleton
              variant="text"
              animation="wave"
              width={500}
              height={40}
              key={index}
            />
          </>
        ))}
      </TxtBox>
    </LoadingWrapper>
  );
};

const LoadingWrapper = styled.div`
  width: 100%;
  padding: 3vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImgBox = styled.div`
  width: 50%;
  margin: 0 auto;
`;
const TxtBox = styled.div`
  width: 50%;
`;
