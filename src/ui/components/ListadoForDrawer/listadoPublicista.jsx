import React from "react";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import { List } from "@mui/material";
import { ListaItemDrawer } from "../DrawerDesplegable/ListaItemDrawer";

export const ListadoPublicista = () => {
  return (
    <List
      className="fondo"
      sx={{
        height: "auto",
        "@media (min-width:599px)": {
          height: "100%",
        },
      }}
    >
      <ListaItemDrawer
        texto={"Adquisiciones"}
        link={"/adquisiciones"}
        icono={<DirectionsCarIcon sx={{ color: "white", width: 20 }} />}
      />
    </List>
  );
};
