import React from "react";
import { List } from "@mui/material";
import { ListaItemDrawer } from "../DrawerDesplegable/ListaItemDrawer";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CalculateIcon from "@mui/icons-material/Calculate";
import UpdateIcon from "@mui/icons-material/Update";
import GroupIcon from "@mui/icons-material/Group";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AddCommentIcon from "@mui/icons-material/AddComment";
import SettingsIcon from "@mui/icons-material/Settings";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
export const ListadoAdmin = () => {
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
        texto={"Catalogo"}
        link={"/catalogo"}
        icono={<MenuBookIcon sx={{ color: "white", width: 20 }} />}
      />
      <ListaItemDrawer
        texto={"Calculadora"}
        link={"/simulador"}
        icono={<CalculateIcon sx={{ color: "white", width: 20 }} />}
      />
      <ListaItemDrawer
        texto={"Historial"}
        link={"/historial"}
        icono={<UpdateIcon sx={{ color: "white", width: 20 }} />}
      />
      <ListaItemDrawer
        texto={"Asesores"}
        link={"/asesores"}
        icono={<GroupIcon sx={{ color: "white", width: 20 }} />}
      />
      <ListaItemDrawer
        texto={"Registrar Ventas"}
        link={"/registrar-venta"}
        icono={<AttachMoneyIcon sx={{ color: "white", width: 20 }} />}
      />
      <ListaItemDrawer
        texto={"Adquisiciones"}
        link={"/adquisiciones"}
        icono={<DirectionsCarIcon sx={{ color: "white", width: 20 }} />}
      />
      <ListaItemDrawer
        texto={"Registrar Adquisisciones"}
        link={"/registrarAdquisiciones"}
        icono={<AddBusinessIcon sx={{ color: "white", width: 20 }} />}
      />
      <ListaItemDrawer
        texto={"Reseñas"}
        link={"/reeseñas"}
        icono={<AddCommentIcon sx={{ color: "white", width: 20 }} />}
      />
      <ListaItemDrawer
        texto={"Administrar"}
        link={"/administrar"}
        icono={<SettingsIcon sx={{ color: "white", width: 20 }} />}
      />
    </List>
  );
};
