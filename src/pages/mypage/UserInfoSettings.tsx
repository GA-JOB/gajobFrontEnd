import { ButtonType } from "components/button/ButtonType";
import styled from "styled-components";

export const UserInfoSettings = () => {
  const list = [
    {
      id: 0,
      title: "개인정보 조회 및 수정",
      info: "이름, 이메일등 회원님의 개인정보를 조회 및 수정할 수 있습니다.",
      link: "/personal-info",
    },
    {
      id: 1,
      title: "비밀번호 변경",
      info: "보안을 위해 정기적으로 비밀번호를 변경해주세요. 안전한 사이트 이용을 위해 3개월마다 비밀번호 변경해 주실 것을 권장하고 있습니다.",
      link: "/change-pwd",
    },
    {
      id: 2,
      title: "계정 삭제",
      info: "계정을 삭제하실 경우 GA-JOB의 모든 서비스와 사용자의 데이터를 완전히 삭제할 수 있습니다.",
      link: "/delete-account",
    },
  ];

  return (
    <>
      {list.map((item, index) => {
        return (
          <ContentBox key={index}>
            <InfoWrapper>
              <InfoTitle>{item.title}</InfoTitle>
              <InfoBox>{item.info}</InfoBox>
            </InfoWrapper>

            <ButtonWrapper>
              <ButtonType
                variants="text"
                title={item.id !== 2 ? "수정" : "삭제"}
                link={item.link && item.link}
              />
            </ButtonWrapper>
          </ContentBox>
        );
      })}
    </>
  );
};

const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin: 3vw;
  padding: 3vw 0;
  border: 1px solid lightgray;
  border-radius: 15px;
  text-align: left;
`;
const InfoTitle = styled.h4`
  margin-bottom: 1vw;
`;
const InfoWrapper = styled.div`
  width: 70%;
  margin: 0 5vw;
`;
const InfoBox = styled.div`
  font-weight: lighter;
`;
const ButtonWrapper = styled.div`
  width: 20%;
`;
