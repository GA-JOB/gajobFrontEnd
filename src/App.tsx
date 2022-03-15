import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Header } from "components/header";
import { Footer } from "components/footer";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
    </Router>
  );
}

const Main = () => {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
};
