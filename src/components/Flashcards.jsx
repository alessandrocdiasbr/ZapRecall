import React, { useState } from "react";
import styled from "styled-components";
import play from "../assets/seta_play.png";
import FlashcardPergunta from "./FlashcardPergunta";

export default function Flashcards({ index, question, answer, incrementarRespondidas }) {
  const [showQuestion, setShowQuestion] = useState(false);

  const handlePlayClick = () => {
    setShowQuestion(true);
  };

  return (
    <>
      {showQuestion ? (
        <FlashcardPergunta
          index={index}
          question={question}
          answer={answer}
          incrementarRespondidas={incrementarRespondidas}
        />
      ) : (
        <FlashcardStyles>
          <h2>Pergunta {index + 1}</h2>
          <img src={play} alt="Play" onClick={handlePlayClick} />
        </FlashcardStyles>
      )}
    </>
  );
}

const FlashcardStyles = styled.div`
  background-color: #ffffff;
  min-width: 300px;
  min-height: 65px;
  margin-bottom: 8px;
  border-radius: 5px;
  box-shadow: 5px 5px 2px 0px rgba(0, 0, 0, 0.14);
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    margin: 10px;
  }

  img {
    margin: 10px;
    height: 23px;
    width: 20px;
    cursor: pointer;
  }
`;
