import styled from "styled-components";
import storage from "hooks/store";
import useGetAuth from "hooks/api/auth/useGetAuth";

const MyPageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  height: 70vh;
`;

export const MyPage = () => {
  const { data } = useGetAuth();

  const token = storage.get("user-token");

  if (!token) return <>접근 못함</>;
  return <MyPageWrapper>MyPage</MyPageWrapper>;
};
