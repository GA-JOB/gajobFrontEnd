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
interface IPostCerifyEmailRequest {
  email: string;
}
interface IPostVerifyEmailRequest {
  code: string;
}
interface IPostProfileImgRequest {
  image: File;
}
interface IEditAccountRequest {
  nickname?: string;
  department?: string;
  introduction?: string;
}
interface IDeleteAccountRequest {
  password: string;
}
interface IPostFindIdRequest {
  name: string;
  studentEmail: string;
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

  // 교내 인증 코드 발송
  const postCertifyStudentEmail = async ({
    email,
  }: IPostCerifyEmailRequest) => {
    await post(`/student-email`, { email }).then((res: any) => {
      if (res === "send-mail-successful") {
        alert(
          "학교 메일으로 인증번호를 발송했습니다. \n 메일 확인 후 인증코드를 입력해주세요 !"
        );
      }
    });
  };

  // 교내 인증 코드 확인
  const postVertifyStudentEmail = async ({ code }: IPostVerifyEmailRequest) => {
    await post(`/studen-email-verify`, { code }).then((res: any) => {
      console.log(res);
      storage.set("code-verify", res);
      if (res === "authentication-success") {
        alert("메일 인증이 완료되었습니다.");
      } else {
        alert("인증에 실패하였습니다.\n인증번호를 다시 확인해주시기 바랍니다.");
      }
    });
  };

  // 회원 프로필 이미지 등록
  const postProfileImg = async ({ image }: IPostProfileImgRequest) => {
    const formData = new FormData();
    formData.append("file", image);

    await post(`/profile`, formData).then((res: any) => {
      console.log(res);
    });

    mutate(`/profile`);
  };

  // 회원 정보 수정
  const editAccount = async ({
    nickname,
    department,
    introduction,
  }: IEditAccountRequest) => {
    await put(`/user`, {
      nickname,
      department,
      introduction,
    }).then((res: any) => {
      console.log(res);
      if (res.activated === true) {
        if (window.confirm("회원 정보를 수정하시겠습니까?") === true) {
          alert("회원 정보가 수정되었습니다.");

          if (storage.get("user-nickname") === res.nickname) {
          } else {
            storage.remove("user-nickname");
            storage.set("user-nickname", res.nickname);
          }

          window.location.replace("/personal-info");
        } else return;
      }
    });

    mutate(`/user`);
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
  const findAccountId = async ({ name, studentEmail }: IPostFindIdRequest) => {
    await post(`/find-id`, { name, studentEmail }).then((res: any) => {});
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
    postCertifyStudentEmail,
    postVertifyStudentEmail,
    postProfileImg,
    editAccount,
    deleteAuth,
    findAccountId,
    findAccountPwd,
    editAccountPwd,
  };
};
