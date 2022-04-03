import { ReactNode } from "react";
import styled from "@emotion/styled";
import CloseIcon from "@material-ui/icons/Close";

interface IModalContentProps {
  title: ReactNode;
  children: ReactNode;
  onClose: () => void;
}

// Modal 창 open 시 title, content
export const ModalContent = ({
  title,
  children,
  onClose,
}: IModalContentProps) => {
  return (
    <Wrapper>
      <Header>{title}</Header>

      <CloseButton>
        <CloseIcon onClick={onClose}></CloseIcon>
      </CloseButton>

      <Content>{children}</Content>
    </Wrapper>
  );
};

// 전체 Modal 창
const Wrapper = styled.div`
  min-width: 400px;
  max-height: 600px;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  background-color: #fff;
  overflow: scroll;
`;

// Modal title
const Header = styled.span`
  font-size: 15pt;
  margin-left: 4vw;
`;

// modal close button
const CloseButton = styled.span`
  cursor: pointer;
  float: right;
  &:hover,
  &:active {
    color: lightgray;
  }
`;

// Modal content
const Content = styled.div`
  width: 100%;
  height: 100%;
`;
