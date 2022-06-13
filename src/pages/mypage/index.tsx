import { useNavigate } from "react-router-dom";
import { UserProfile } from "./UserProfile";
import { UserInfoSettings } from "./UserInfoSettings";
import styled from "styled-components";
import storage from "hooks/store";

export const MyPage = () => {
  const navigate = useNavigate();
  const token = storage.get("user-token");

  const selectBtn = {
    color: "white",
    backgroundColor: "#F2BA49",
  };

  if (!token) {
    window.confirm("로그인 후 이용가능합니다.") === true
      ? window.location.replace("/login")
      : window.location.replace("/");
  }
  return (
    <MyPageWrapper>
      <InfoWrapper>
        <UserProfile />
      </InfoWrapper>

      <ContentContainer>
        <CategoryWrapper>
          <Categories style={selectBtn}>개인정보 설정</Categories>
          <Categories onClick={() => navigate("/mypage/posts")}>
            내 게시물
          </Categories>
          <Categories onClick={() => navigate("/mypage/scraps")}>
            스크랩
          </Categories>
          <Categories
            onClick={() => alert("포트폴리오 서비스 기능 준비 중입니다...")}
          >
            포트폴리오
          </Categories>
        </CategoryWrapper>

        <Containers>
          <UserInfoSettings></UserInfoSettings>
        </Containers>
      </ContentContainer>
    </MyPageWrapper>
  );
};

const MyPageWrapper = styled.div`
  width: 100%;
  padding: 2vw;
  min-height: 65vw;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #eaeaea;
`;

const InfoWrapper = styled.div`
  width: 30%;
  padding: 1vw;
  margin: 2vw;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 10px;
`;
const ContentContainer = styled.div`
  width: 60%;
  margin-top: 3vw;
`;
const CategoryWrapper = styled.div`
  text-align: center;
`;
const Categories = styled.span`
  margin: 0 2vw;
  padding: 0.6vw 1.5vw;
  border: none;
  background-color: none;
  border-radius: 20px;
  font-size: 11pt;
  cursor: pointer;
`;
const Containers = styled.div`
  width: 100%;
  min-height: 40vw;
  margin: 3vw 1vw;
`;
