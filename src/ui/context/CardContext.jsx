import { createContext, useState, useEffect } from "react";
import { cards as data } from "../data/cards";

export const CardContext = createContext();

export function CardContextProvider(props) {
  const [cards, setCards] = useState([]);

  function createCard(card) {
    setCards([
      ...cards,
      {
        cedula: card.cedula,
        nombre: card.nombre,
        fecha: card.fecha,
      },
    ]);
  }

  function deleteCard(cardId) {
    setCards(cards.filter((card) => card.cedula !== cardId));
  }

  useEffect(() => {
    setCards(data);
  }, []);

  return (
    <CardContext.Provider
      value={{
        cards,
        deleteCard,
        createCard,
      }}
    >
      {props.children}
    </CardContext.Provider>
  );
}