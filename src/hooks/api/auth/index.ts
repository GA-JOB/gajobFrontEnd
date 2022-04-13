import { useSWRConfig } from "swr";
import { post, del } from "lib/api/client";
import { IAuthData } from "types";

interface IPostSignupRequest extends Omit<IAuthData, "id"> {}
interface IPostLoginRequest {
  email: string;
  password: string;
}

export const useAuth = () => {
  const postSignup = async ({
    name,
    nickname,
    email,
    password,
  }: IPostSignupRequest) => {
    const res = await post(`/signup`, {
      name,
      nickname,
      email,
      password,
    }).then((res: any) => {
      if (res.activated === true) {
        alert("환영합니다!\n회원가입이 정상적으로 처리되었습니다.");
      }
    });

    console.log(res);
    return { res };
  };

  const postLogin = async ({ email, password }: IPostLoginRequest) => {
    const res = await post(`/login`, { email, password }).then((res: any) => {
      if (res.token) {
        console.log("로그인 성공");
        console.log(res.token);

        // localStorage 에 access token 저장.
        localStorage.setItem("user-token", res.token);
      }
    });

    return { res };
  };

  const deleteAuth = async (id: number) => {
    await del(`/signup/${id}`);
  };

  return { postSignup, postLogin, deleteAuth };
};
