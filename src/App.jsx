import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import LoginModal from "./components/modals/LoginModal";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./lib/ToastProvider";
import RentModal from "./components/modals/RentModal";
import { useDispatch } from "react-redux";
import { FetchListings } from "./Redux/Reducers/AxiosCalls";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchListings());
  }, []);
  return (
    <>
      <Header />
      <ToasterProvider />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginModal />} />
        <Route path="/register" element={<RegisterModal />} />
        <Route path="/voyagehost" element={<RentModal />} />
      </Routes>
    </>
  );
}

export default App;
