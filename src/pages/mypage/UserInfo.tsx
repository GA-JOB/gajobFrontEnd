import styled from "styled-components";
import { Button } from "@material-ui/core";
import useGetAuth from "hooks/api/auth/useGetAuth";

export const UserInfo = () => {
  const { data } = useGetAuth();

  if (!data) return <></>;
  return (
    <>
      <InfoTitle>
        <TitleWrapper>내 소개</TitleWrapper>
        <ButtonWrapper>
          <Button variant="text" href="#">
            수정
          </Button>
        </ButtonWrapper>
      </InfoTitle>

      <InfoWrapper>
        <Title>이름</Title> {data.name}
      </InfoWrapper>
      <InfoWrapper>
        <Title>닉네임</Title> {data.nickname}
      </InfoWrapper>
      <InfoWrapper>
        <Title>이메일</Title> {data.email}
      </InfoWrapper>
      <InfoWrapper>
        <Title>소개글</Title> 준비중...
      </InfoWrapper>
      <InfoWrapper>
        <Title>학교</Title> 준비중 ...
      </InfoWrapper>
      <InfoWrapper>
        <Title>학번</Title> 준비중...
      </InfoWrapper>
      <InfoWrapper>
        <Title>학과/학부</Title> 준비중...
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
  padding: 1vw;
`;
const TitleWrapper = styled.span`
  width: 80%;
`;
const ButtonWrapper = styled.span`
  width: 20%;
  color: blue;
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
const Title = styled.div`
  font-weight: bold;
  font-size: 11pt;
`;
