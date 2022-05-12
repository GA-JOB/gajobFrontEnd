import { useState } from "react";
import { UserInfo } from "./UserInfo";
import { UserInfoSettings } from "./UserInfoSettings";
import { PostList } from "pages/community/PostList";
import styled from "styled-components";
import storage from "hooks/store";

export const MyPage = () => {
  const token = storage.get("user-token");
  const [category, setCategory] = useState<string>("개인정보설정");

  const selectBtn = {
    color: "white",
    backgroundColor: "#F2BA49",
  };
  const noSelectBtn = {
    color: "black",
  };

  if (!token) return <>접근 못함</>;
  return (
    <MyPageWrapper>
      <InfoWrapper>
        <UserInfo />
      </InfoWrapper>

      <ContentContainer>
        <CategoryWrapper>
          <Categories
            style={category === "개인정보설정" ? selectBtn : noSelectBtn}
            onClick={() => setCategory("개인정보설정")}
          >
            개인정보 설정
          </Categories>
          <Categories
            style={category === "게시물" ? selectBtn : noSelectBtn}
            onClick={() => setCategory("게시물")}
          >
            내 게시물
          </Categories>
          <Categories
            style={category === "스크랩" ? selectBtn : noSelectBtn}
            onClick={() => setCategory("스크랩")}
          >
            스크랩
          </Categories>
        </CategoryWrapper>

        <Containers>
          {category === "개인정보설정" && <UserInfoSettings></UserInfoSettings>}
          {category === "게시물" && <PostList isMypage={true} />}
        </Containers>
      </ContentContainer>
    </MyPageWrapper>
  );
};

const MyPageWrapper = styled.div`
  width: 100%;
  padding: 3vw;
  min-height: 50vw;
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
  margin-top: 2vw;
`;
const CategoryWrapper = styled.div`
  text-align: center;
`;
const Categories = styled.span`
  margin: 0 1.5vw;
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
