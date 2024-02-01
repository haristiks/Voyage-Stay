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
import ListingClient from "./pages/ListingClient";
import Favorites from "./pages/Favorites";
import Reservations from "./pages/Reservations";
import PropertiesClient from "./pages/PropertiesClient";
import Trips from "./pages/Trips";
import Footer from "./components/Footer/Footer";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchListings());
  }, []);
  return (
    <>
      <Header />
      <ToasterProvider />
      <LoginModal />
      <RegisterModal />
      <RentModal />
      <div className="pb-10 pt-28 ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listings/:listingId" element={<ListingClient />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/properties" element={<PropertiesClient />} />
          <Route path="/trips" element={<Trips />} />
        </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;
