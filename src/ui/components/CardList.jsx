import { useContext } from "react";
import ProfileCard from "./ProfileCard";
import { CardContext } from "../context/CardContext";
import Grid from "@mui/material/Grid";

function CardList() {
  const { cards } = useContext(CardContext);

  if (cards.length === 0) {
    return (
      <p style={{ textAlign: "center", "margin-top": "3em" }}>
        No hay asesores aún
      </p>
    );
  }

  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: "flex",
        width: "100%",
        alignitems: "center",
        justifyContent: "center",
        "margin-top": "3em",
        
      }}
    >
      {cards.map((card) => (
        <Grid item xs={3}>
          <ProfileCard key={card.cedula} card={card} />
        </Grid>
      ))}
    </Grid>
  );
}

export default CardList;
