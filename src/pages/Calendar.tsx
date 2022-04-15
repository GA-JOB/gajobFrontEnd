import storage from "hooks/store";

export const Calendar = () => {
  const token = storage.get("user-token");

  if (!token) return <>접근 못함</>;
  return <></>;
};
