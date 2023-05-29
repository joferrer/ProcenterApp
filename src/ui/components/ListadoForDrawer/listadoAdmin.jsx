import React from "react";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { List } from "@mui/material";
import { ListaItemDrawer } from "../DrawerDesplegable/ListaItemDrawer";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CalculateIcon from "@mui/icons-material/Calculate";
import UpdateIcon from "@mui/icons-material/Update";
import GroupIcon from "@mui/icons-material/Group";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AddCommentIcon from "@mui/icons-material/AddComment";
export const ListadoAdmin = () => {
  return (
    <List className="fondo" sx={{ height: "100vh" }}>
      <ListaItemDrawer
        texto={"Catalogo"}
        icono={<MenuBookIcon sx={{ color: "white", width: 20 }} />}
      />
      <ListaItemDrawer
        texto={"Calculadora"}
        icono={<CalculateIcon sx={{ color: "white", width: 20 }} />}
      />
      <ListaItemDrawer
        texto={"Historial"}
        icono={<UpdateIcon sx={{ color: "white", width: 20 }} />}
      />
      <ListaItemDrawer
        texto={"Asesores"}
        icono={<GroupIcon sx={{ color: "white", width: 20 }} />}
      />
      <ListaItemDrawer
        texto={"Registrar Ventas"}
        icono={<AttachMoneyIcon sx={{ color: "white", width: 20 }} />}
      />
      <ListaItemDrawer
        texto={"Adquisiciones"}
        icono={<DirectionsCarIcon sx={{ color: "white", width: 20 }} />}
      />
      <ListaItemDrawer
        texto={"Reseñas"}
        icono={<AddCommentIcon sx={{ color: "white", width: 20 }} />}
      />
    </List>
  );
};
