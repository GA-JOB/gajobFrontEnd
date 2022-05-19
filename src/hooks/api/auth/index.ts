import { useSWRConfig } from "swr";
import { post, del, put } from "lib/api/client";
import storage from "hooks/store";
import { IUserData } from "types";

type ISignupType = "id" | "newPassword" | "introduction";
type IAuthType =
  | "id"
  | "name"
  | "nickname"
  | "password"
  | "newPassword"
  | "studentId"
  | "studentEmail"
  | "department"
  | "introduction";

interface IPostSignupRequest extends Omit<IUserData, ISignupType> {}
interface IPostLoginRequest extends Omit<IUserData, IAuthType> {
  password: string;
}
interface IEditAccountRequest extends Omit<IUserData, IAuthType> {
  nickname: string;
  department: string;
  introduction: string;
}
interface IDeleteAccountRequest {
  password: string;
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
  const editAccount = async ({
    email,
    nickname,
    department,
    introduction,
  }: IEditAccountRequest) => {
    await put(`/update-password`, {
      email,
      nickname,
      department,
      introduction,
    }).then((res: any) => {
      console.log(res);
    });
  };

  // 계정 삭제
  const deleteAuth = async ({ password }: IDeleteAccountRequest) => {
    await del(`/user`, { data: { password } }).then((res: any) => {
      console.log(JSON.stringify(res));
      if (res === "delete-user") {
        if (window.confirm("계정을 정말로 삭제하시겠습니까?") === true) {
          alert(
            "계정이 삭제되었습니다.\n 언제든 다시 돌아오세요. GA-JOB은 항상 열려있습니다!"
          );

          storage.remove("user-token");
          storage.remove("user-email");
          storage.remove("user-email");
          window.location.replace("/");
        } else return;
      }
    });

    mutate(`/user`);
  };

  // ID 찾기
  const findAccountId = async ({ name, email }: IPostFindIdRequest) => {
    await post(`/find-id`, { name, email }).then((res: any) => {});
  };
  // PW 찾기
  const findAccountPwd = async ({ email }: IPostFindPwdRequest) => {
    await post(`/find-password`, { email }).then((res: any) => {
      window.location.replace("/login");
    });
  };

  // PW 변경
  const editAccountPwd = async ({
    oldPassword,
    newPassword,
  }: IEditPwdRequest) => {
    await put(`/update-password`, { oldPassword, newPassword }).then(
      (res: any) => {
        console.log(res);
        if (res === "password-change-successful") {
          if (
            window.confirm("입력하신 비밀번호로 수정하시겠습니까?") === true
          ) {
            alert("비밀번호 수정이 정상적으로 완료되었습니다.");
            window.location.replace("/mypage");
          }
        } else return;
      }
    );
  };

  return {
    postSignup,
    postLogin,
    editAccount,
    deleteAuth,
    findAccountId,
    findAccountPwd,
    editAccountPwd,
  };
};
