import { AccountForm } from "components/common/AccountForm";

export const VerifyEmailCode = () => {
  return (
    <>
      <AccountForm
        title={"학교메일 본인 인증"}
        info={"가입을 위해 이메일 인증 절차를 따라주세요!"}
      />
    </>
  );
};
