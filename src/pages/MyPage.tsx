import styled from "styled-components";
import storage from "hooks/store";

const MyPageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  height: 70vh;
`;

export const MyPage = () => {
  const token = storage.get("user-token");

  if (!token) return <>접근 못함</>;
  return <MyPageWrapper>MyPage</MyPageWrapper>;
};
