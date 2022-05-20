import useSWR from "swr";
import { fetcher } from "lib/api/fetcher";
import { IUserData } from "types";

type IOmitUserId = Omit<IUserData, "id">;
type authority = {
  authorityName: string;
};
interface IGetUserRequest extends IOmitUserId {
  activated: string;
  authorities: authority[];
}

function useGetAuth() {
  const { data } = useSWR<IGetUserRequest>("user", fetcher);

  return { data };
}
export default useGetAuth;
