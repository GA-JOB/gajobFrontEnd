import useGetAuth from "hooks/api/auth/useGetAuth";

export const EditUserInfo = () => {
  const { data } = useGetAuth();

  console.log(data);

  return <>프로필 등록. 선택, 수정 가능 정보와 필수, 수정 불가 정보 나누기.</>;
};
