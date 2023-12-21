import React from "react";
import Container from "./components/Container";
import Properties from "./components/Cards/Properties";

function Home() {
  return (
    <div className="pb-10 pt-28">
      <Container>
        <Properties />
      </Container>
    </div>
  );
}

export default Home;
