import React, { useState } from "react";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import VoyageStayHost from "./components/Voyage Stay Host/VoyageStayHost";
import HostLoginOrSignup from "./components/Voyage Stay Host/HostLoginOrSignup";
import Home from "./Home";

function App() {
  const [selectedFilter, setSelectedFilter] = useState(0);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/voyageStayHost" element={<VoyageStayHost />} />
        <Route path="/hostLoginOrSignUp" element={<HostLoginOrSignup />} />
      </Routes>
    </>
  );
}

export default App;
