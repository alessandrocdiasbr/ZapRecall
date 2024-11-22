import React, { useState } from "react";
import styled from "styled-components";
import virar from "../assets/seta_virar.png";
import FlashcardResposta from "./FlashcardResposta";

export default function FlashcardPergunta({ index, question, answer, incrementarRespondidas }) {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleVirarClick = () => {
    setShowAnswer(true);
  };

  return (
    <>
      {showAnswer ? (
        <FlashcardResposta
          index={index}
          question={question}
          answer={answer}
          incrementarRespondidas={incrementarRespondidas}
        />
      ) : (
        <PerguntaStyles>
          <h2>{question}</h2>
          <img src={virar} alt="Virar" onClick={handleVirarClick} />
        </PerguntaStyles>
      )}
    </>
  );
}

const PerguntaStyles = styled.div`
  background-color: #ffffd4;
  min-width: 310px;
  min-height: 137px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 5px 5px 2px 0px rgba(0,0,0,0.14);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  h2 {
    position: absolute;
    top: 18px;
    margin-left: 15px;
    font-family: "Recursive", sans-serif;
    font-size: 18px;
  }

  img {
    position: absolute;
    bottom: 10px;
    right: 10px;
    height: 23px;
    width: 23px;
    cursor: pointer;
  }
`;
