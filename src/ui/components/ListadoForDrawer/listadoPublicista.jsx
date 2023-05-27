import React from "react";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { List } from "@mui/material";
import { ListaItemDrawer } from "../DrawerDesplegable/ListaItemDrawer";

export const ListadoPublicista = () => {
  return (
    <List className="fondo" sx={{ height: "100vh" }}>
      <ListaItemDrawer
        texto={"Publicacion"}
        icono={<AdminPanelSettingsIcon sx={{ color: "white", width: 20 }} />}
      />
    </List>
  );
};
