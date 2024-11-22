import styled from "styled-components";
import Flashcards from "./Flashcards";

export default function Deck({ cards, incrementarRespondidas }) {
  return (
    <DeckContent>
      {cards.map((card, index) => (
        <Flashcards
          key={index}
          index={index}
          question={card.question}
          answer={card.answer}
          incrementarRespondidas={incrementarRespondidas}
        />
      ))}
    </DeckContent>
  );
}

const DeckContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: inherit;
`;
