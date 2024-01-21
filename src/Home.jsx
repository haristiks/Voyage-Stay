import React from "react";
import Container from "./components/Container";
import Properties from "./components/Cards/Properties";
import { useSelector } from "react-redux";

function Home() {
  return (
    <Container>
      <Properties />
    </Container>
  );
}

export default Home;
