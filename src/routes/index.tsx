import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { App } from "App";
// menu
import { Issues } from "pages/Issues";
import { JobPosting } from "pages/JobPosting";
import { Community } from "pages/Community";
import { Study } from "pages/Study";
import { Portfolio } from "pages/Portfolio";
import { MyPage } from "pages/MyPage";

import { NoEmail } from "components/footer/NoEmail";
import { PersonalRule } from "components/footer/PersonalRules";
import { Sitemap } from "components/footer/Sitemap";

export const Routers = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<App />}></Route> */}
        <Route path="/job-news" element={<Issues />} />
        <Route path="/job-posting" element={<JobPosting />} />
        <Route path="/jobdam" element={<Community />} />
        <Route path="/gajob-study" element={<Study />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/mypage" element={<MyPage />} />

        {/* footer link */}
        <Route path="/noEmail" element={<NoEmail />}></Route>
        <Route path="/personalRule" element={<PersonalRule />}></Route>
        <Route path="/sitemap" element={<Sitemap />}></Route>
      </Routes>
    </Router>
  );
};