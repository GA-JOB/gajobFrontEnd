import useSWR from "swr";
import { fetcher } from "lib/api/fetcher";
import { IAuthData } from "types";

function useGetAuth() {
  // localStorage 에 저장된 access token 접근
  let token = localStorage.getItem("user-token") || "";

  console.log(token);

  const { data } = useSWR<IAuthData[]>("user", fetcher);

  return { data };
}

export default useGetAuth;
