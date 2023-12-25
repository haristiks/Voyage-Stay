import React from "react";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import LoginModal from "./components/modals/LoginModal";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./lib/ToastProvider";

function App() {
  return (
    <>
      <Header />
      <ToasterProvider/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginModal />} />
        <Route path="/register" element={<RegisterModal />} />
      </Routes>
    </>
  );
}

export default App;
