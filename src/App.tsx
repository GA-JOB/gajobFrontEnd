import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Header } from "components/layout/header";
import { Footer } from "components/layout/footer";
import { NoEmail } from "components/layout/footer/NoEmail";
import { PersonalRule } from "components/layout/footer/PersonalRules";
import { Sitemap } from "components/layout/footer/Sitemap";
import { AlertDismissible } from "components/alert";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}></Route>

        {/* footer link */}
        <Route path="/noEmail" element={<NoEmail />}></Route>
        <Route path="/personalRule" element={<PersonalRule />}></Route>
        <Route path="/sitemap" element={<Sitemap />}></Route>
      </Routes>
    </Router>
  );
}

const Main = () => {
  return (
    <>
      <Header />
      <button type="button" className="btn btn-danger">
        danger
      </button>
      <button type="button" className="btn btn-warning">
        warning
      </button>
      <button type="button" className="btn btn-success">
        success
      </button>
      <AlertDismissible />
      <Footer />
    </>
  );
};
