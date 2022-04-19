// import { Dispatch, SetStateAction, useState } from "react";
// import { TextField, MenuItem } from "@material-ui/core";
// import useGetCommunity from "hooks/api/community/useGetCommunity";
// import { Modal } from "components/common/Modal";
// import { ModalContent } from "components/common/Modal/ModalContent";
// import styled from "styled-components";

// interface INationFormProps {
//   id?: number;
//   imageUrl?: string;
//   nationName?: string;
//   continentName?: string;
//   introduce?: string;
//   quarantinePolicy?: string;
//   isOpenModal: boolean;
//   setIsOpenModal: Dispatch<SetStateAction<boolean>>;
// }

// const NationForm = ({
//   id = 0,
//   imageUrl = "",
//   nationName = "",
//   continentName = "",
//   introduce = "",
//   quarantinePolicy = "",
//   isOpenModal,
//   setIsOpenModal,
// }: INationFormProps) => {
//   const { data } = useGetCommunity(null);
//   //   const { postNation, updateNation } = useGetCommunity();

//   return (
//     <Modal show={isOpenModal} onClose={onCloseModal}>
//       <ModalContent title="" onClose={onCloseModal}>
//         <form onSubmit={handleSubmit} encType="multipart/form-data">
//           <FormContent>
//             <FormLabel>국가 {isAddCountry ? "등록" : "수정"}</FormLabel>

//             <InputContent>
//               <Upload className="input-file-button" htmlFor="input-file">
//                 {isAddCountry ? "Upload files" : "Edit files"}
//               </Upload>
//               <input
//                 id="input-file"
//                 type="file"
//                 accept="image/*"
//                 name="imageUrl"
//                 onChange={onChangeFile}
//                 style={{ display: "none" }}
//               />
//               {id === 0 && imageRecord === null ? (
//                 <></>
//               ) : (
//                 <ImagePreview>
//                   <img src={imagePreview} alt="posting preivew" width="400px" />
//                 </ImagePreview>
//               )}
//             </InputContent>
//             <InputContent>
//               <InputField
//                 select
//                 label="대륙명"
//                 variant="standard"
//                 name="continentNameForm"
//                 value={continentNameForm}
//                 onChange={onChange}
//                 size="small"
//                 inputProps={{ style: { fontSize: 15 } }}
//               >
//                 <MenuItem value="">---선택---</MenuItem>
//                 <MenuItem value="유럽">유럽</MenuItem>
//                 <MenuItem value="아시아">아시아</MenuItem>
//                 <MenuItem value="아프리카">아프리카</MenuItem>
//                 <MenuItem value="아메리카">아메리카</MenuItem>
//                 <MenuItem value="오세아니아">오세아니아</MenuItem>
//               </InputField>
//             </InputContent>
//             <InputContent>
//               {continentNameForm === "" ? (
//                 <InputField label="국가명" disabled />
//               ) : (
//                 <InputField
//                   label="국가명"
//                   variant="standard"
//                   type="text"
//                   name="nationNameForm"
//                   value={nationNameForm}
//                   onChange={onChange}
//                   size="small"
//                   inputProps={{ style: { fontSize: 15 } }}
//                 />
//               )}
//             </InputContent>
//             <InputContent>
//               <InputField
//                 label="국가소개"
//                 variant="standard"
//                 name="introduceForm"
//                 value={introduceForm}
//                 onChange={onTextAreaChange}
//                 inputProps={{ style: { fontSize: 15 } }}
//                 multiline
//                 rows={5}
//                 placeholder="소개글을 입력하는 란입니다."
//               />
//             </InputContent>
//             <InputContent>
//               <InputField
//                 label="격리정책"
//                 variant="standard"
//                 name="quarantinePolicyForm"
//                 value={quarantinePolicyForm}
//                 onChange={onTextAreaChange}
//                 inputProps={{ style: { fontSize: 15 } }}
//                 multiline
//                 rows={5}
//                 placeholder="격리 정책을 입력하는 란입니다."
//               />
//             </InputContent>
//           </FormContent>

//           <button type="submit">{isAddCountry ? "등록" : "수정"}</button>
//         </form>
//       </ModalContent>
//     </Modal>
//   );
// };

// export default NationForm;

// const FormContent = styled.div`
//   margin-right: 2vw;
//   margin-left: 2vw;
// `;
// const FormLabel = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   margin-bottom: 1vw;
//   font-size: 15pt;
//   font-family: Verdana, Geneva, Tahoma, sans-serif;
//   letter-spacing: 2pt;
// `;

// const Upload = styled.label`
//   padding: 3px 15px;
//   border: 1px solid gray;
//   border-radius: 4px;
//   color: gray;
//   cursor: pointer;
// `;
// const ImagePreview = styled.div`
//   margin-top: 1vw;
// `;
// const InputContent = styled.div`
//   margin-bottom: 0.6vw;
// `;
// const InputField = styled(TextField)({
//   width: "100%",
//   fontSize: "10pt",
//   marginBottom: "1vw",
// });

export const CommunityForm = () => {
  return <></>;
};
