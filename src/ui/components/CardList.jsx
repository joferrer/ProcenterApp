import { useContext } from "react";
import ProfileCard from "./ProfileCard";
import { CardContext } from "../context/CardContext";


function CardList() {
  const { cards } = useContext(CardContext);

  if (cards.length === 0) {
    return <p>No hay asesores aun</p>;
  }

  return (
    <div>
      {cards.map((card) => (
        <ProfileCard key={card.cedula} card={card} />
      ))}
    </div>
  );
}

export default CardList;
