import React from "react";
import cards from "./cards";
import Container from "./components/Container";

function App() {
  return (
    <div>
      <Container cards={cards} />
    </div>
  );
}

export default App;
