import styled from "styled-components";
import { Menu } from "./Menu";
import "./index.scss";
import { MenuBook } from "@mui/icons-material";

export const ShortcutMenu = () => {
  const menus = [
    {
      id: 1,
      name: "취업 News",
    },
    {
      id: 2,
      name: "공모전 소식",
    },
    {
      id: 3,
      name: "실시간 채용공고",
    },
    {
      id: 4,
      name: "Job Community",
    },
    {
      id: 5,
      name: "Study 모집",
    },
    {
      id: 6,
      name: "Study 조회 및 신청",
    },
    {
      id: 7,
      name: "자기소개서 작성",
    },
    {
      id: 8,
      name: "JOB Calendar",
    },
    {
      id: 9,
      name: "My Calendar",
    },
    {
      id: 10,
      name: "취업 News",
    },
  ];

  return (
    <ShortcutMenuWrapper className="section">
      <Container className="masthead-image" id="master-container">
        <ContentsWrapper>
          <Contents id="master">
            <ContentText>GA-JOB 에서</ContentText>
            <ContentText id="master-container-scroller">
              {menus.map((menu, index) => (
                <ScrollMenu className="master-container-scroller_item">
                  {menu.name}
                </ScrollMenu>
              ))}
            </ContentText>
            <ContentText>누려보세요 !</ContentText>
          </Contents>
        </ContentsWrapper>
        <MenuStyle />
      </Container>
    </ShortcutMenuWrapper>
  );
};

const ShortcutMenuWrapper = styled.section`
  position: relative;
  z-index: 5;
  width: 100%;
  min-height: 10vw;
`;
const Container = styled.div``;
const ContentsWrapper = styled.div`
  width: 60%;
`;
const Contents = styled.h1``;
const ContentText = styled.div`
  margin: 1vw;
`;
const ScrollMenu = styled.div``;

const MenuStyle = styled(Menu)`
  position: relative;
  z-index: 10;
`;
