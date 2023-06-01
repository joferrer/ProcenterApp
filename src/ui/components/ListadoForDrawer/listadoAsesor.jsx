import React from "react";
import { List } from "@mui/material";
import { ListaItemDrawer } from "../DrawerDesplegable/ListaItemDrawer";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import UpdateIcon from "@mui/icons-material/Update";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
export const ListadoAsesor = () => {
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
        texto={"Registrar Ventas"}
        link={"/registrar-venta"}
        icono={<AttachMoneyIcon sx={{ color: "white", width: 20 }} />}
      />
      <ListaItemDrawer
        texto={"Calculadora"}
        link={"/simulador"}
        icono={<AutoStoriesIcon sx={{ color: "white", width: 20 }} />}
      />
      <ListaItemDrawer
        texto={"Historial"}
        link={"/historialAsesor"}
        icono={<UpdateIcon sx={{ color: "white", width: 20 }} />}
      />
      <ListaItemDrawer
        texto={"Adquisiciones"}
        link={"/adquisiciones"}
        icono={<DirectionsCarIcon sx={{ color: "white", width: 20 }} />}
      />
      <ListaItemDrawer
        texto={"Registrar Adquisisciones"}
        link={"/registrar-adquisiciones"}
        icono={<AddBusinessIcon sx={{ color: "white", width: 20 }} />}
      />
    </List>
  );
};
