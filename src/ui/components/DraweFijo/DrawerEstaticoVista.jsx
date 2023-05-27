import * as React from "react";
import { Drawer, Box, Toolbar, AppBar } from "@mui/material";
import { ListasEstatica } from "./ListasEstatica";

export default function DrawerEstaticoVista({ tamaño, admin }) {

  return (
    <Drawer
      className="fondo"
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
      <Box className="fondo">
        <Toolbar className="fondo" display="flex" sx={{ mt: 4 }}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ mt: 4, mb: 4 }}
            className="fondo"
          >
            <img id="img4" src="../../../public/Images/LUCKY5.png" />
          </Box>
        </Toolbar>
      </Box>

      <ListasEstatica admin={admin} />
    </Drawer>
  );
}
