import { useState } from "react";
import { ButtonType } from "components/button/ButtonType";
import { UserForm } from "components/common/UserForm";
import { Modal } from "components/common/Modal";
import { ModalContent } from "components/common/Modal/ModalContent";
import styled from "styled-components";
import useGetAuth from "hooks/api/auth/useGetAuth";
import { useAuth } from "hooks/api/auth";
import { EditUserInfo } from "./EditUserInfo";

interface IImageFormProps {
  imageUrl?: string;
}

export const SeeUserInfo = ({ imageUrl = "" }: IImageFormProps) => {
  const { data } = useGetAuth();
  const { postProfileImg } = useAuth();
  const [isEditInfo, setIsEditInfo] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const [imageRecord, setImageRecord] = useState<File | null>(null); // also tried <string | Blob>
  const [imagePreview, setImagePreview] = useState<string>(imageUrl); // also tried <string | Blob>

  const onChangeFile = function (e: React.ChangeEvent<HTMLInputElement>) {
    const { files } = e.target;

    // 이미지 파일이 존재할 경우 fileList[0]으로 값 변경.
    if (!files) {
      alert("이미지 파일을 선택해주세요");
      return;
    }
    setImageRecord(files[0]);

    const targetImage = files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(targetImage as Blob);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (imageRecord !== null) {
      if (window.confirm("프로필 이미지를 등록하시겠습니까?")) {
        postProfileImg({ image: imageRecord });
      }
    }
  };

  const onCloseModal = () => {
    setOpenModal((prev) => !prev);
  };

  return (
    <EditInfoWrapper>
      <ProfileWrapper>
        <Title>프로필</Title>
        <Contents>
          <Image>
            <ImgWrapper>
              <Img
                src={
                  imageRecord === null
                    ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0H3GENf6227cAk6PeE331-BJqovCV0RyNCg&usqp=CAU"
                    : imagePreview
                }
              />
            </ImgWrapper>
            <ButtonType
              variants="text"
              title="이미지 수정하기"
              link=""
              onClick={() => setOpenModal((openModal) => !openModal)}
            />
          </Image>

          {openModal && (
            <Modal show={openModal} onClose={onCloseModal}>
              <ModalContent
                title={"이미지 등록"}
                kind={"post"}
                onClose={onCloseModal}
              >
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                  <div>
                    <label className="input-file-button" htmlFor="input-file">
                      이미지 등록
                    </label>
                    <input
                      id="input-file"
                      type="file"
                      accept="image/*"
                      name="imageUrl"
                      onChange={onChangeFile}
                      style={{ display: "none" }}
                    />
                  </div>

                  <ImgWrapper>
                    <Img
                      src={
                        imageRecord === null
                          ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0H3GENf6227cAk6PeE331-BJqovCV0RyNCg&usqp=CAU"
                          : imagePreview
                      }
                      alt="posting preivew"
                    />
                  </ImgWrapper>
                </form>
              </ModalContent>
            </Modal>
          )}

          <ProfileInfo>
            {data?.email}
            <br />
            <strong>{data?.name} 님</strong>{" "}
            {data?.authorities[0].authorityName === "ROLE_USER"
              ? "(개인 회원)"
              : "(관리자)"}
          </ProfileInfo>
        </Contents>
      </ProfileWrapper>

      <ProfileWrapper>
        <Title>
          회원 정보
          <ButtonWrapper>
            <ButtonType
              variants="text"
              title={isEditInfo ? "취소" : "수정"}
              link=""
              onClick={() => setIsEditInfo(!isEditInfo)}
            />
          </ButtonWrapper>
        </Title>
        {isEditInfo ? (
          <EditUserInfo
            title={"수정"}
            name={data?.name}
            nickname={data?.nickname}
            email={data?.email}
            studentId={data?.studentId}
            studentEmail={data?.studentEmail}
            department={data?.department}
            introduction={data?.introduction}
          />
        ) : (
          <UserForm
            isEdit={isEditInfo}
            name={data?.name}
            nickname={data?.nickname}
            email={data?.email}
            studentId={data?.studentId}
            studentEmail={data?.studentEmail}
            department={data?.department}
            introduction={data?.introduction}
          />
        )}
      </ProfileWrapper>

      <ProfileWrapper>
        <Title>계정 삭제</Title>
        <Contents>
          {data?.email}
          <ButtonType variants="text" title="삭제" link="/delete-account" />
        </Contents>
      </ProfileWrapper>
    </EditInfoWrapper>
  );
};

const EditInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5vw;
  background-color: #eaeaea;
`;
const ProfileWrapper = styled.div`
  width: 60%;
  margin: 1vw;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 5px;
`;
const Title = styled.div`
  padding: 1vw 3vw;
  border-bottom: 1px solid #eaeaea;
  font-weight: bold;
  font-size: 13pt;
`;
const ButtonWrapper = styled.span`
  float: right;
  margin-top: -5px;
`;
const Contents = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 1.5vw 3vw;
  font-weight: lighter;
  line-height: 2vw;
`;
const Image = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 5vw;
`;
const ImgWrapper = styled.div`
  align-items: center;
  width: 180px;
  height: 180px;
  border-radius: 70%;
  margin: 1vw;
  overflow: hidden;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const ProfileInfo = styled.div`
  width: 60%;
`;
