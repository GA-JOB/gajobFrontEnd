import { JobPostingList } from "pages/jobPosting/JobPostingList";
import styled from "styled-components";
import useGetJobPostingScrap from "hooks/api/jobPosting/useGetJobPostingScrap";

export const MyScraps = () => {
  const { data } = useGetJobPostingScrap();

  if (!data) return <></>;
  return (
    <MyScrapsWrapper>
      <ContentWrapper>
        <JobPostingList data={data} careerState={null} />
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
