import { useContext } from "react";
import ProfileCard from "./ProfileCard";
import { CardContext } from "../../context/CardContext";
import Grid from "@mui/material/Grid";
import { UsuariosDispatch } from "../../../store/usuario/UsuariosDispatch";

function CardList() {
  const { cards } = useContext(CardContext);
  const { asesor } = UsuariosDispatch();
  const ini = asesor.concat(cards);
  if (ini.length === 0) {
    return <p style={{ textAlign: "center", mt: 5 }}>No hay asesores aún</p>;
  }

  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        mt: 2,
        zIndex: 0,
      }}
    >
      {ini.map((card) => (
        <Grid
          item
          xs={10}
          sm={4}
          key={card.cedula}
          sx={{
            width: "100%",
            zIndex: 0,
          }}
        >
          <ProfileCard card={card} />
        </Grid>
      ))}
    </Grid>
  );
}

export default CardList;
