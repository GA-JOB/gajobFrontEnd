import useSWR, { useSWRConfig } from "swr";
import { fetcher } from "lib/api/fetcher";
import { post, del } from "lib/api/client";
import { IAuthData } from "types";

interface IPostAuthRequest extends Omit<IAuthData, "id"> {}

// interface IUpdateAuthRequest extends IAuthData {}

export const useAuth = () => {
  // 데이터 최신화
  const { mutate } = useSWRConfig();

  const postAuth = async ({
    name,
    nickname,
    email,
    password,
  }: IPostAuthRequest) => {
    await post(`/auth`, { name, nickname, email, password });

    mutate("/signup");
  };

  const useGetAuth = async (id: number) => {
    const { data } = useSWR<IAuthData[]>("news", fetcher);
    return { data };
  };

  const deleteAuth = async (id: number) => {
    await del(`/signup/${id}`);

    mutate("/signup");
  };

  return { postAuth, useGetAuth, deleteAuth };
};
