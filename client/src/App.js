import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import Navbar from "./components/views/Navbar/Navbar";
import PostPage from "./components/views/PostPage/PostPage";
import ContentDetail from "components/views/ContentDetail/ContentDetail";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/register" element={<RegisterPage />} />
          <Route exact path="/post" element={<PostPage />} />
          <Route exact path="/content/:contentId" element={<ContentDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
