import { useContext } from "react";
import PublicistaCard from "./PublicistaCard";
import { CardContext } from "../context/CardContext";
import Grid from "@mui/material/Grid";

function ListaPublicistas() {
  const { publicistas } = useContext(CardContext);

  if (publicistas.length === 0) {
    return (
      <p style={{ textAlign: "center", "margin-top": "3em" }}>
        No hay publicistas aún
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
      {publicistas.map((card) => (
        <Grid item xs={3}>
          <PublicistaCard key={card.cedula} card={card} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ListaPublicistas;
