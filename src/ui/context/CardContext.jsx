import { createContext, useState, useEffect } from "react";
import { cards as asesores } from "../data/cards";
import { publicistas as data} from "../data/publicistas";

export const CardContext = createContext();

export function CardContextProvider(props) {
  const [cards, setCards] = useState([]);
  const [publicistas, setPublicistas] = useState([]);

  function createCard(card) {
    if(card.rol == "Publicista"){
      setPublicistas([
        ...publicistas,
        {
          rol: card.rol,
          cedula: card.cedula,
          nombre: card.nombre,
          correo: card.correo,
          telefono: card.telefono,
          fecha: card.fecha,
        },
      ]);
    }
    else if(card.rol == "Asesor"){
      setCards([
        ...cards,
        {
          rol: card.rol,
          cedula: card.cedula,
          nombre: card.nombre,
          correo: card.correo,
          telefono: card.telefono,
          fecha: card.fecha,
        },
      ]);
    }else{
      console.log("Error no se ha seleccionado ningún rol")
    }
    
  }

  function deleteCard(cardId) { 
    setCards(cards.filter((card) => card.cedula !== cardId));
  }

  function deletePublicista(cardId) { 
    setPublicistas(publicistas.filter((card) => card.cedula !== cardId));
  }


  useEffect(() => {
      setCards(asesores);
      setPublicistas(data)
  }, []);

  return (
    <CardContext.Provider
      value={{
        cards,
        publicistas,
        deleteCard,
        createCard,
        deletePublicista,
      }}
    >
      {props.children}
    </CardContext.Provider>
  );
}
