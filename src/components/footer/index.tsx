import styled from "styled-components";

export const Footer = () => {
  return (
    <FooterBox>
      <FooterContents>
        <FooterContainer>
          <FooterLogo>JOBMON</FooterLogo>
          <FooterInfo>서울특별시 구로구 연동로 320</FooterInfo>
          <FooterInfo>jobmon22@gmail.com</FooterInfo>
        </FooterContainer>

        <FooterContainer>
          <FooterLink href="/personalRule">개인정보처리방침</FooterLink>
          <FooterLink href="/noEmail">이메일무단수집거부</FooterLink>
          <FooterLink href="/sitemap">사이트맵</FooterLink>
        </FooterContainer>
      </FooterContents>

      <CopyrightStyle>copyright &copy; 2022 by JobMon</CopyrightStyle>
    </FooterBox>
  );
};

const FooterBox = styled.footer`
  width: 100%;
  height: 100%;
  background-color: var(--footer-bg-color);
  color: var(--footer-text-color);
  padding: var(--layout-padding);

  @media screen and (max-width: 900px) {
    height: 15vw;
  }
`;

const FooterContents = styled.div`
  text-align: center;
  margin-top: 1vw;
  width: 90%;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
const FooterContainer = styled.span`
  float: left;
  width: 50%;
  text-decoration: none;
`;
const FooterLink = styled.a`
  margin-left: 2vw;
  font-size: 0.8rem;
  text-decoration: none;
  color: var(--footer-text-color);
`;
const FooterLogo = styled.div`
  font-size: 15pt;
  font-weight: bold;
`;
const FooterInfo = styled.div`
  font-size: 0.7rem;
`;

const CopyrightStyle = styled.div`
  z-index: 1;
  margin-top: 7%;
  font-size: 0.8rem;
  text-align: center;

  @media screen and (max-width: 1000px) {
    margin: 3%;
    font-size: 0.9rem;
    transition: 1s;
  }
`;
