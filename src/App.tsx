import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "components/header";
import { Home } from "components/main";
import { TopButton } from "components/button/TopButton";
import { Footer } from "components/footer";

// menu
import { VerifyEmailCode } from "pages/auth/VerifyEmailCode";
import { Signup } from "pages/auth/Signup";
import { Login } from "pages/auth/Login";
import { FindAccount } from "pages/auth/FindAccount";
import { EditPassword } from "pages/auth/EditPassword";
import { DeleteAccount } from "pages/auth/DeleteAccount";
import { JobNews } from "pages/news/index";
import { Contest } from "pages/contest/index";
import { JobPosting } from "pages/jobPosting/index";
import { JobPostingDetails } from "./pages/jobPosting/JobPostingDetails";
import { Community } from "pages/community";
import { PostDetails } from "pages/community/PostDetails";
import { Study } from "pages/study/index";
import { StudyRegister } from "pages/study/StudyRegister";
import { StudyDetails } from "pages/study/StudyDetails";
import { StudyRecruit } from "pages/study/StudyRecruit";
import { StudyRecruitApplicant } from "pages/study/StudyRecruitApplicant";
import { Portfolio } from "pages/Portfolio";
import { Calendar } from "pages/Calendar";
import { MyPage } from "pages/mypage";
import { SeeUserInfo } from "pages/mypage/SeeUserInfo";
import { MyPosts } from "pages/mypage/MyPosts";
import { MyScraps } from "pages/mypage/MyScraps";
import { NoEmail } from "components/footer/NoEmail";
import { PersonalRule } from "components/footer/PersonalRules";
import { Sitemap } from "components/footer/Sitemap";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import useGetNews from "hooks/api/useGetNews";

export default function App() {
  // main 화면에서 component route시 데이터 불러오기 위함.
  const { data } = useGetNews();

  return (
    <Router>
      <HeaderStyle>
        <Header />
      </HeaderStyle>

      <Layout>
        <Routes>
          <Route
            path="/signup/email-verify"
            element={<VerifyEmailCode />}
          ></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/find-account" element={<FindAccount />}></Route>
          <Route path="/change-pwd" element={<EditPassword />}></Route>
          <Route path="/delete-account" element={<DeleteAccount />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/job-news" element={<JobNews />} />
          <Route path="/contest" element={<Contest />} />
          <Route path="/job-posting" element={<JobPosting />} />
          <Route path="/job-posting/:postId" element={<JobPostingDetails />} />
          <Route path="/jobdam" element={<Community />} />
          <Route path="/jobdam/:viewId" element={<PostDetails />} />
          <Route path="/study" element={<Study />} />
          <Route path="/study/posting" element={<StudyRegister />} />
          <Route path="/study/:id" element={<StudyDetails />} />
          <Route path="/study/recruitment/:id" element={<StudyRecruit />} />
          <Route
            path="/study/:postId/applicants/:studentId"
            element={<StudyRecruitApplicant />}
          />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/mypage/posts" element={<MyPosts />} />
          <Route path="/mypage/scraps" element={<MyScraps />} />
          <Route path="/personal-info" element={<SeeUserInfo />} />
          {/* footer link */}
          <Route path="/noEmail" element={<NoEmail />}></Route>
          <Route path="/personalRule" element={<PersonalRule />}></Route>
          <Route path="/sitemap" element={<Sitemap />}></Route>
        </Routes>
      </Layout>

      <TopButton />
      <FooterStyle />
    </Router>
  );
}

const HeaderStyle = styled.header`
  z-index: 100;
  width: 100%;
  height: 5vw;
  position: fixed;
`;

const Layout = styled.div`
  min-height: 45vw;
  padding-top: 3vw;
  align-items: center;
  justify-content: center;
  display: flex;

  @media screen and (max-width: 900px) {
    min-height: 80vw;
  }
`;

const FooterStyle = styled(Footer)`
  position: relative;
  z-index: 10;
`;
