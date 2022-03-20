import styled from "styled-components";
// import { Link } from "react-router-dom";

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
  z-index: 0;
  width: 100%;
  height: 10vw;
  background-color: var(--footer-bg-color);
  color: var(--footer-text-color);
  padding: var(--layout-padding);
`;

const FooterContents = styled.p`
  text-align: center;
  margin-top: 1vw;
  width: 90%;
  /* height: 80%; */
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
const FooterLogo = styled.h5``;
const FooterInfo = styled.div`
  font-size: 0.7rem;
`;

const CopyrightStyle = styled.div`
  z-index: 1;
  margin-top: 7%;
  font-size: 0.8rem;
  text-align: center;
`;
