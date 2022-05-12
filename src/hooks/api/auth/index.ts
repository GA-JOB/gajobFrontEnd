import { useSWRConfig } from "swr";
import { post, del } from "lib/api/client";
import storage from "hooks/store";
import { IUserData } from "types";

type ISignupType = "id";
type ILoginType = "id" | "name" | "nickname" | "studentId" | "studentEmail";

interface IPostSignupRequest extends Omit<IUserData, ISignupType> {}
interface IPostLoginRequest extends Omit<IUserData, ILoginType> {}

export const useAuth = () => {
  const { mutate } = useSWRConfig();

  const postSignup = async ({
    name,
    nickname,
    email,
    password,
    studentId,
    studentEmail,
  }: IPostSignupRequest) => {
    const res = await post(`/signup`, {
      name,
      nickname,
      email,
      password,
      studentId,
      studentEmail,
    }).then((res: any) => {
      if (res.activated === true) {
        alert("환영합니다!\n회원가입이 정상적으로 처리되었습니다.");
        window.location.replace("/login");
      }
    });

    return { res };
  };

  const postLogin = async ({ email, password }: IPostLoginRequest) => {
    const login = await post(`/login`, { email, password }).then((res: any) => {
      if (res.token) {
        console.log("로그인 성공");

        // localStorage 에 access token 저장.
        storage.set("user-token", res.token);
        storage.set("user-nickname", res.nickname);
        storage.set("user-email", res.email);

        if (storage.get("user-token")) {
          window.location.replace("/");
        }
      }
    });

    return { login };
  };

  const deleteAuth = async (email: string) => {
    await del(`/user/${email}`).then((res: any) => {
      window.confirm("계정이 삭제되었습니다.");

      storage.remove("user-token");
      storage.remove("user-email");
      storage.remove("user-email");
      window.location.replace("/");
    });

    mutate(`/user/${email}`);
  };

  return { postSignup, postLogin, deleteAuth };
};
