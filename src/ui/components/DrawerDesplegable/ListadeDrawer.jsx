import * as React from "react";
import { List } from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import TimelineIcon from "@mui/icons-material/Timeline";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ListaItemDrawer from "./ListaItemDrawer";

export default function ListasdeDrawer() {
  return (
    <List className="fondo">
      <ListaItemDrawer
        texto={"Catalogo"}
        icono={<AutoStoriesIcon sx={{ color: "white", width: 20 }} />}
      />
      <ListaItemDrawer
        texto={"Informes"}
        icono={<TimelineIcon sx={{ color: "white", width: 20 }} />}
      />
      <ListaItemDrawer
        texto={"Simulador de Credito"}
        icono={<AttachMoneyIcon sx={{ color: "white", width: 20 }} />}
      />
      <ListaItemDrawer
        texto={"Historial de Ventas"}
        icono={<WorkHistoryIcon sx={{ color: "white", width: 20 }} />}
      />
      <ListaItemDrawer
        texto={"Asesores Comerciales"}
        icono={<PermIdentityIcon sx={{ color: "white", width: 20 }} />}
      />
      <ListaItemDrawer
        texto={"Administrar"}
        icono={<AdminPanelSettingsIcon sx={{ color: "white", width: 20 }} />}
      />
    </List>
  );
}
