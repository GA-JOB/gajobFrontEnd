import { post, del } from "lib/api/client";
import { IUserData } from "types";

type ISignupType = "id";
type ILoginType = "id" | "name" | "nickname";

interface IPostSignupRequest extends Omit<IUserData, ISignupType> {}
interface IPostLoginRequest extends Omit<IUserData, ILoginType> {}

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
    }).then((data: any) => {
      if (data.activated === true) {
        alert("환영합니다!\n회원가입이 정상적으로 처리되었습니다.");
      }
    });

    return { res };
  };

  const postLogin = async ({ email, password }: IPostLoginRequest) => {
    let token = localStorage.getItem("user-token");
    const login = await post(
      `/login`,
      { email, password },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${token}`,
        },
      }
    ).then((data: any) => {
      if (data.token) {
        console.log("로그인 성공");

        // localStorage 에 access token 저장.
        localStorage.setItem("user-token", data.token);
        console.log(data.token);
      }
    });

    return { login };
  };

  const deleteAuth = async (id: number) => {
    await del(`/signup/${id}`);
  };

  return { postSignup, postLogin, deleteAuth };
};
