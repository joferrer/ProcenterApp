import * as React from "react";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import TimelineIcon from "@mui/icons-material/Timeline";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import {ListaItemDrawer} from "./ListaItemDrawer";
import { ListadoAsesor } from "../ListadoForDrawer/listadoAsesor";
import { ListadoPublicista } from "../ListadoForDrawer/listadoPublicista";
import { ListadoAdmin } from "../ListadoForDrawer/listadoAdmin";

export const ListasdeDrawer = ({ admin }) => {


  return admin === "admin" ? (
    <ListadoAdmin />
  ) : admin === "asesor" ? (
    <ListadoAsesor />
  ) : (
    <ListadoPublicista />
  );
};
