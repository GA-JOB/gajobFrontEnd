import useSWR, { useSWRConfig } from "swr";
import { fetcher } from "lib/api/fetcher";
import { post, del } from "lib/api/client";
import { IAuthData } from "types";

interface IPostSignupRequest extends Omit<IAuthData, "id"> {}
interface IPostLoginRequest {
  email: string;
  password: string;
}

export const useAuth = () => {
  // 데이터 최신화
  const { mutate } = useSWRConfig();

  const postSignup = async ({
    name,
    nickname,
    email,
    password,
  }: IPostSignupRequest) => {
    await post(`/signup`, { name, nickname, email, password });

    mutate("/signup");
  };

  const postLogin = async ({ email, password }: IPostLoginRequest) => {
    await post(`/login`, { email, password });

    mutate("/login");
  };

  const useGetAuth = async (id: number) => {
    const { data } = useSWR<IAuthData[]>("news", fetcher);
    return { data };
  };

  const deleteAuth = async (id: number) => {
    await del(`/signup/${id}`);

    mutate("/signup");
  };

  return { postSignup, postLogin, useGetAuth, deleteAuth };
};
