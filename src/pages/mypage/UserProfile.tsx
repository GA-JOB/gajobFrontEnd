import styled from "styled-components";
import useGetAuth from "hooks/api/auth/useGetAuth";
import { ButtonType } from "components/button/ButtonType";

export const UserProfile = () => {
  const { data } = useGetAuth();
  const studentID = data?.studentId?.substring(2, 4);

  if (!data) return <></>;
  return (
    <>
      <InfoTitle>
        <TitleWrapper>{data.name} 님</TitleWrapper>
        <ButtonWrapper>
          <ButtonType variants="text" title="수정" link="/personal-info" />
        </ButtonWrapper>
      </InfoTitle>
      <InfoWrapper>
        <ProfileImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0H3GENf6227cAk6PeE331-BJqovCV0RyNCg&usqp=CAU" />
        <Title>소개글</Title>
        {data.introduction
          ? data.introduction
          : "본인의 관심 분야나 전공을 소개해주세요 !"}
      </InfoWrapper>
      <InfoWrapper>
        <Title>학교 / 학번</Title> 성공회대학교 {studentID}학번
      </InfoWrapper>
      <InfoWrapper>
        <Title>학교 계정</Title>
        {data.studentEmail}
      </InfoWrapper>
      <InfoWrapper>
        <Title>학과/학부</Title> {data.department}
      </InfoWrapper>
    </>
  );
};

const InfoTitle = styled.h4`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: bold;
  padding: 1vw 0;
`;
const TitleWrapper = styled.span`
  width: 75%;
`;
const ButtonWrapper = styled.span`
  width: 15%;
`;
const InfoWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 2vw;
  border-top: 1px solid #eaeaea;
  font-weight: lighter;
  font-size: 11pt;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }
`;
const ProfileImg = styled.img`
  width: 50%;
  margin: 2vw 5vw;
  border-radius: 100%;
`;
const Title = styled.div`
  font-weight: bold;
  font-size: 11pt;
`;
