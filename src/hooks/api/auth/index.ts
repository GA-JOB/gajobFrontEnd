import { useSWRConfig } from "swr";
import { post, del, put } from "lib/api/client";
import storage from "hooks/store";
import { IUserData } from "types";

type ISignupType = "id";
type IAuthType =
  | "id"
  | "name"
  | "nickname"
  | "password"
  | "newPassword"
  | "studentId"
  | "studentEmail"
  | "department";

interface IPostSignupRequest extends Omit<IUserData, ISignupType> {}
interface IPostLoginRequest extends Omit<IUserData, IAuthType> {
  password: string;
}
interface IEditAccountRequest extends Omit<IUserData, IAuthType> {
  name: string;
  nickname: string;
  department: string;
}
interface IPostFindIdRequest extends Omit<IUserData, IAuthType> {
  name: string;
}
interface IPostFindPwdRequest extends Omit<IUserData, IAuthType> {}
interface IEditPwdRequest extends Omit<IUserData, IAuthType> {
  oldPassword: string;
  newPassword: string;
}

export const useAuth = () => {
  const { mutate } = useSWRConfig();

  // 회원가입
  const postSignup = async ({
    name,
    nickname,
    email,
    password,
    studentId,
    studentEmail,
    department,
  }: IPostSignupRequest) => {
    const res = await post(`/signup`, {
      name,
      nickname,
      email,
      password,
      studentId,
      studentEmail,
      department,
    }).then((res: any) => {
      if (res.activated === true) {
        alert("환영합니다!\n회원가입이 정상적으로 처리되었습니다.");
        window.location.replace("/login");
      }
    });

    return { res };
  };

  // 로그인
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

  // 회원 정보 수정
  const EditAccount = async ({
    email,
    name,
    nickname,
    department,
  }: IEditAccountRequest) => {
    await put(`/update-password`, { email, name, nickname, department }).then(
      (res: any) => {}
    );
  };

  // 계정 삭제
  const deleteAuth = async () => {
    await del(`/user`).then((_res: any) => {
      window.confirm("계정이 삭제되었습니다.");

      storage.remove("user-token");
      storage.remove("user-email");
      storage.remove("user-email");
      window.location.replace("/");
    });

    mutate(`/user`);
  };

  // ID 찾기
  const findAccountId = async ({ name, email }: IPostFindIdRequest) => {
    await post(`/find-id`, { name, email }).then((res: any) => {});
  };
  //PW 찾기
  const findAccountPwd = async ({ email }: IPostFindPwdRequest) => {
    await post(`/find-password`, { email }).then((res: any) => {
      window.location.replace("/login");
    });
  };

  // PW 변경
  const EditAccountPwd = async ({
    oldPassword,
    newPassword,
  }: IEditPwdRequest) => {
    await put(`/update-password`, { oldPassword, newPassword }).then(
      (res: any) => {}
    );
  };

  return {
    postSignup,
    postLogin,
    EditAccount,
    deleteAuth,
    findAccountId,
    findAccountPwd,
    EditAccountPwd,
  };
};
