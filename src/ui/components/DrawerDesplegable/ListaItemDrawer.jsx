import * as React from "react";
import { AutoStoriesIcon } from "@mui/icons-material/AutoStories";
import {
  ListItemButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";

export const ListaItemDrawer = (props) => {
  return (
    <ListItem disablePadding sx={{ display: "block" }}>
      <Link
        style={{ textDecoration: "none" , color:"white" }}
        to={props.link}
      >
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: open ? "initial" : "center",
          px: 2.5,
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : "auto",
            justifyContent: "center",
          }}
        >
          {props.icono}
        </ListItemIcon>
        <ListItemText sx={{ opacity: open ? 1 : 0 }} primary={props.texto} />
      </ListItemButton>
      </Link >
    </ListItem>
  );
};
