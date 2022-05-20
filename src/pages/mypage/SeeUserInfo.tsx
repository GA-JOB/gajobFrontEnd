import { useState } from "react";
import { ButtonType } from "components/button/ButtonType";
import { UserForm } from "components/common/UserForm";
import styled from "styled-components";
import useGetAuth from "hooks/api/auth/useGetAuth";
import { EditUserInfo } from "./EditUserInfo";

export const SeeUserInfo = () => {
  const { data } = useGetAuth();
  const [isEditInfo, setIsEditInfo] = useState<boolean>(false);

  return (
    <EditInfoWrapper>
      <ProfileWrapper>
        <Title>프로필</Title>
        <Contents>
          <Image>
            <DefaultImg
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0H3GENf6227cAk6PeE331-BJqovCV0RyNCg&usqp=CAU"
              width={"80%"}
            />
            <ButtonType
              variants="text"
              title="이미지 수정하기"
              link={`/personal-info/edit`}
            />
          </Image>

          <ProfileInfo>
            {data?.email}
            <br />
            <strong>{data?.name} 님</strong>{" "}
            {data?.authorities[0].authorityName === "ROLE_USER"
              ? "(개인 회원)"
              : "(관리자)"}
          </ProfileInfo>
        </Contents>
      </ProfileWrapper>

      <ProfileWrapper>
        <Title>
          회원 정보
          <ButtonWrapper>
            <ButtonType
              variants="text"
              title={isEditInfo ? "취소" : "수정"}
              link=""
              onClick={() => setIsEditInfo(!isEditInfo)}
            />
          </ButtonWrapper>
        </Title>
        {isEditInfo ? (
          <EditUserInfo
            title={"수정"}
            name={data?.name}
            nickname={data?.nickname}
            email={data?.email}
            studentId={data?.studentId}
            studentEmail={data?.studentEmail}
            department={data?.department}
            introduction={data?.introduction}
          />
        ) : (
          <UserForm
            isEdit={isEditInfo}
            name={data?.name}
            nickname={data?.nickname}
            email={data?.email}
            studentId={data?.studentId}
            studentEmail={data?.studentEmail}
            department={data?.department}
            introduction={data?.introduction}
          />
        )}
      </ProfileWrapper>

      <ProfileWrapper>
        <Title>계정 삭제</Title>
        <Contents>
          {data?.email}
          <ButtonType variants="text" title="삭제" link="/delete-account" />
        </Contents>
      </ProfileWrapper>
    </EditInfoWrapper>
  );
};

const EditInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5vw;
  background-color: #eaeaea;
`;
const ProfileWrapper = styled.div`
  width: 60%;
  margin: 1vw;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 5px;
`;
const Title = styled.div`
  padding: 1vw 3vw;
  border-bottom: 1px solid #eaeaea;
  font-weight: bold;
  font-size: 13pt;
`;
const ButtonWrapper = styled.span`
  float: right;
  margin-top: -5px;
`;
const Contents = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 1.5vw 3vw;
  font-weight: lighter;
  line-height: 2vw;
`;
const Image = styled.div`
  width: 20%;
  margin-right: 2vw;
  text-align: center;
`;
const DefaultImg = styled.img`
  border-radius: 100%;
  margin: 0.5vw 0;
`;
const ProfileInfo = styled.div`
  width: 60%;
`;

const InfoContents = styled.div`
  font-weight: lighter;
  line-height: 4vw;
  padding: 0.5vw;
  font-size: 11pt;
`;
const Infos = styled.div`
  width: 100%;
  padding: 0.1vw 3vw;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    border-radius: 10px;
    background-color: #eaeaea;
  }
`;
const InfoTitle = styled.div`
  width: 30%;
  font-weight: normal;
`;
const InfoContent = styled.div`
  width: 70%;
`;
const AlertTxt = styled.span`
  font-size: 10pt;
  font-weight: normal;
  color: red;
`;
