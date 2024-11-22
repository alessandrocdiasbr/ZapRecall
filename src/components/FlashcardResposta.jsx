import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FlashcardConcluido from "./FlashcardConcluido";

export default function FlashcardResposta({ index, question, answer, incrementarRespondidas }) {
  const [resultado, setResultado] = useState(null);

  useEffect(() => {
    if (resultado !== null) {
      incrementarRespondidas();
    }
  }, [resultado]);

  const handleResultado = (tipo) => {
    setResultado(tipo);
  };

  return (
    <>
      {resultado ? (
        <FlashcardConcluido
          index={index}
          question={question}
          resultado={resultado}
        />
      ) : (
        <RespostaStyles>
          <h2>{answer}</h2>
          <div className="resultado">
            <button onClick={() => handleResultado("errou")} className="errou">
              Não lembrei
            </button>
            <button onClick={() => handleResultado("quase")} className="quase">
              Quase lembrei
            </button>
            <button onClick={() => handleResultado("acertou")} className="acertou">
              Zap!
            </button>
          </div>
        </RespostaStyles>
      )}
    </>
  );
}

const RespostaStyles = styled.div`
  background-color: #ffffd4;
  min-width: 310px;
  min-height: 137px;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 5px 5px 2px 0px rgba(0,0,0,0.14);
  position: relative;

  h2 {
    position: absolute;
    left: 15px;
    top: 18px;
    right: 15px;
    font-family: "Recursive", sans-serif;
    font-size: 16px;
    text-align:justify;

  }

  .resultado {
    display: flex;
    justify-content: space-around;
  }

  button {
    font-family: "Recursive", sans-serif;
    width: 85px;
    height: 37px;
    font-size: 12px;
    padding: 8px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .errou {
    background: #ff3030;
    color: white;
  }

  .quase {
    background: #ff922e;
    color: white;
  }

  .acertou {
    background: #2fbe34;
    color: white;
  }
`;
