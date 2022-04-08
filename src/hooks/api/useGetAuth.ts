import useSWR from "swr";
import { fetcher } from "lib/api/fetcher";
import { IAuthData } from "types";

function useGetAuth() {
  const { data } = useSWR<IAuthData[]>("user", fetcher);

  return { data };
}

export default useGetAuth;
