import { PostList } from "pages/community/PostList";
import styled from "styled-components";

export const MyScraps = () => {
  return (
    <MyScrapsWrapper>
      <ContentWrapper>
        <PostList isMypage={true} />
      </ContentWrapper>
    </MyScrapsWrapper>
  );
};

const MyScrapsWrapper = styled.div`
  width: 100%;
  padding: 2vw;
  background-color: #eaeaea;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const ContentWrapper = styled.div`
  margin: 3vw 1vw;
  width: 50%;
  height: 48vw;
  padding: 2vw;
  background-color: white;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  overflow: scroll;
`;
