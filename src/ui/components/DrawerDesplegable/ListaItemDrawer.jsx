import * as React from "react";
import {
  ListItemButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

export default function ListaItemDrawer(props) {
  return (
    <ListItem disablePadding sx={{ display: "block" }}>
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
    </ListItem>
  );
}
