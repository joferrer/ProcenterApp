import * as React from "react";
import { Drawer, Box, Toolbar } from "@mui/material";
import ListasEstatica from "./ListasEstatica";

export default function DrawerEstaticoVista({ tamaño }) {
  return (
    <Drawer
      sx={{
        width: tamaño,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: tamaño,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar className="fondo" display="flex">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 4, mb: 4 }}
        >
          <img id="img4" src="../../../public/Images/LUCKY5.png" />
        </Box>
      </Toolbar>
      <ListasEstatica />
    </Drawer>
  );
}
