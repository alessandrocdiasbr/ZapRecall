import React, { useState } from "react";
import styled from "styled-components";
import Deck from "./Deck";
import Header from "./Header";
import Contador from "./Contador";

export default function Container({ cards }) {
  const [respondidas, setRespondidas] = useState(0);

  const incrementarRespondidas = () => {
    setRespondidas(respondidas + 1);
  };

  return (
    <StyledContainer>
      <Header />
      <Deck cards={cards} incrementarRespondidas={incrementarRespondidas} />
      <Contador total={cards.length} respondidas={respondidas} />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  background: #fb6b6b;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  font-family: "Recursive", sans-serif;
`;
