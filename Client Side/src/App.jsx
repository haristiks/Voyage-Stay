import React, { useState } from "react";
import Header from "./components/Header/Header";
import TypeFilter from "./components/Filter/TypeFilter";
import Properties from "./components/Cards/Properties";
import { list, list2 } from "./assets/sample-properties";
import { Routes, Route } from "react-router-dom";
import VoyageStayHost from "./components/Voyage Stay Host/VoyageStayHost";

function App() {
  const [selectedFilter, setSelectedFilter] = useState(0);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <TypeFilter
                selectedFilter={selectedFilter}
                setSelectedFilter={setSelectedFilter}
              />
              {selectedFilter == 0 ? (
                <Properties list={list} />
              ) : (
                <Properties list={list2} />
              )}
            </>
          }
        />
        <Route path="/voyageStayHost" element={<VoyageStayHost />} />
      </Routes>
    </>
  );
}

export default App;
