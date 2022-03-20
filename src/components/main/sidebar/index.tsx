import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

interface ISidebarProps {
  closeSideBarRes: boolean;
}

export const Sidebar = ({ closeSideBarRes }: ISidebarProps) => {
  if (closeSideBarRes === true) return <></>;

  return <SidebarBox></SidebarBox>;
};

const SidebarBox = styled.div`
  float: left;
  opacity: 0.5;
  background-color: #6324bd;
  width: 18%;
  height: 100%;
  line-height: 90%;
`;
