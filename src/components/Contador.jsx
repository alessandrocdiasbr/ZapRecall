import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function Contador({ total, respondidas }) {
  return (
    <ContadorStyles>
      {respondidas}/{total} CONCLUÍDOS
    </ContadorStyles>
  );
}

const ContadorStyles = styled.div`
  background: #ffffff;
  height: 8%;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Recursive", sans-serif;
  font-size: 18px;
  font-weight: bold;
`;
