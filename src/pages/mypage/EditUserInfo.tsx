import { UserForm } from "components/common/UserForm";

interface IUserInfoProps {
  title?: string;
  name?: string;
  nickname?: string;
  email?: string;
  studentId?: string;
  studentEmail?: string;
  department?: string;
  introduction?: string;
  profileFilePath?: string;
}

export const EditUserInfo = ({
  title,
  name,
  nickname,
  email,
  studentId,
  studentEmail,
  department,
  introduction,
}: IUserInfoProps) => {
  return (
    <>
      <UserForm
        isEdit={title === "수정" ? true : false}
        name={name}
        nickname={nickname}
        email={email}
        studentId={studentId}
        studentEmail={studentEmail}
        department={department}
        introduction={introduction}
      />
    </>
  );
};
