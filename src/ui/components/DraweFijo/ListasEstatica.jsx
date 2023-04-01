import * as React from "react";
import { List } from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import TimelineIcon from "@mui/icons-material/Timeline";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ListaItemEstatica from "./ListaItemEstatica";

export default function ListasEstatica() {
  return (
    <List className="fondo" sx={{ height: "100vh" }}>
      <ListaItemEstatica
        texto={"Catalogo"}
        icono={<AutoStoriesIcon sx={{ color: "white", ml: 2 }} />}
      />
      <ListaItemEstatica
        texto={"Informes"}
        icono={<TimelineIcon sx={{ color: "white", ml: 2 }} />}
      />
      <ListaItemEstatica
        texto={"Simulador de Credito"}
        icono={<AttachMoneyIcon sx={{ color: "white", ml: 2 }} />}
      />
      <ListaItemEstatica
        texto={"Historial de Ventas"}
        icono={<WorkHistoryIcon sx={{ color: "white", ml: 2 }} />}
      />
      <ListaItemEstatica
        texto={"Asesores Comerciales"}
        icono={<PermIdentityIcon sx={{ color: "white", ml: 2 }} />}
      />
      <ListaItemEstatica
        texto={"Administrar"}
        icono={<AdminPanelSettingsIcon sx={{ color: "white", ml: 2 }} />}
      />
    </List>
  );
}
