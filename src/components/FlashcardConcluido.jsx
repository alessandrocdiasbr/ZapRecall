import styled from "styled-components";
import Certo from "../assets/icone_certo.png";
import Quase from "../assets/icone_quase.png";
import Erro from "../assets/icone_erro.png";

export default function FlashcardConcluido({ index, question, resultado }) {
  let icone, cor;

  if (resultado === "acertou") {
    icone = Certo;
    cor = "#2fbe34";
  } else if (resultado === "quase") {
    icone = Quase;
    cor = "#ff922e";
  } else if (resultado === "errou") {
    icone = Erro;
    cor = "#ff3030";
  }

  return (
    <ConcluidoStyles color={cor}>
      <h2>Pergunta {index + 1}</h2>
      <img src={icone} alt={resultado} />
    </ConcluidoStyles>
  );
}

const ConcluidoStyles = styled.div`
 background-color: #ffffff; 
 min-width: 310px; 
 min-height: 65px; 
 margin-bottom: 10px; 
 border-radius: 5px; 
 box-shadow: 5px 5px 2px 0px rgba(0, 0, 0, 0.14); 
 display: flex; 
 align-items: center; 
 justify-content: space-between; 
 
 h2 { 
  margin: 10px; 
  text-decoration: line-through; 
  color: ${props => props.color}; 
  } 
  img { 
    margin: 10px; 
    height: 23px; 
    width: 23px; 
    } 
    `; 