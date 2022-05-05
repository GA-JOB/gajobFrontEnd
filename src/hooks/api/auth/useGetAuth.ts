import useSWR from "swr";
import { fetcher } from "lib/api/fetcher";
import { IUserData } from "types";

type IOmitUserId = Omit<IUserData, "id">;
interface IGetUserRequest extends IOmitUserId {
  activated: string;
  authorities: string;
}

function useGetAuth() {
  const { data, mutate } = useSWR<IGetUserRequest>("user", fetcher);

  return { data };
}
export default useGetAuth;
