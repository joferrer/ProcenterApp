import React from "react";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import { List } from "@mui/material";
import { ListaItemDrawer } from "../DrawerDesplegable/ListaItemDrawer";

export const ListadoPublicista = () => {
  return (
    <List className="fondo" sx={{ height: "100vh" }}>
      <ListaItemDrawer
        texto={"Publicacion"}
        icono={<DirectionsCarIcon sx={{ color: "white", width: 20 }} />}
      />
    </List>
  );
};
