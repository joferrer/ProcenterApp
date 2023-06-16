import { useContext } from "react";
import PublicistaCard from "./PublicistaCard";
import { CardContext } from "../../context/CardContext";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { UsuariosDispatch } from "./../../../store/usuario/UsuariosDispatch";
function ListaPublicistas() {
  const { publicista } = UsuariosDispatch();
  const { publicistas } = useContext(CardContext);
  const ini = publicista.concat(publicistas);
  if (ini.length === 0) {
    return <p style={{ textAlign: "center", mt: 5 }}>No hay publicistas aún</p>;
  }

  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: "flex",
        width: "100%",
        mt: 2,
        zIndex: 0,
        "@media (max-width:599px)": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
        },
      }}
    >
      {ini.map((card) => (
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            width: "100%",
            zIndex: 0,
          }}
          key={card.cedula}
        >
          <PublicistaCard card={card} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ListaPublicistas;
