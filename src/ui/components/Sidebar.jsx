import * as React from "react";
import { Button, Drawer, Box, Hidden, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ListasdeDrawer from "./DrawerDesplegable/ListadeDrawer";
import DrawerEstaticoVista from "./DraweFijo/DrawerEstaticoVista";
import ToolarSesion from "./Sesion/ToolbarSesion";

export default function MiniDrawer({ children }) {
  const isSmallScreen = useMediaQuery("(min-width:800px)");
  const isPequeño = useMediaQuery("(min-width:599px)");
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        height: "100vh",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="fondo"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 4, mb: 3 }}
        className="fondo"
      >
        <img id="img4" src="../../../public/Images/LUCKY5.png" />
      </Box>
      <ListasdeDrawer />
    </Box>
  );
  return (
    <Box sx={{ display: "flex" }}>
      <Hidden smUp>
        <Box
          sx={{
            width: "100%",
            height: 10,
            position: "fixed",
            maxwidth: "100%",
          }}
          className="fondo "
        >
          <Box className="fondo" sx={{ display: "flex" }}>
            <Button
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                mr: 2,
              }}
              onClick={toggleDrawer("left", true)}
            >
              <MenuIcon sx={{ color: "white" }} />
            </Button>

            <Drawer
              open={state["left"]}
              onClose={toggleDrawer("left", false)}
              sx={{ height: "100wh" }}
            >
              {list("left")}
            </Drawer>
            <p color="whire">PROCENTERAPP</p>
          </Box>
        </Box>
      </Hidden>
      <Hidden smDown>
        <Box sx={{ display: "flex" }}>
          {isSmallScreen ? (
            <DrawerEstaticoVista tamaño={"22vw"} />
          ) : (
            <DrawerEstaticoVista tamaño={"30vw"} />
          )}
        </Box>
      </Hidden>
      {isPequeño ? (
        <Box>
          {isSmallScreen ? (
            <ToolarSesion text={"Pepa pig"} size={"78vw"} />
          ) : (
            <ToolarSesion text={"Pepa pig"} size={"70vw"} />
          )}

          <Box
            component="main"
            sx={{ flexGrow: 1, p: 2, mt: 6, maxWidth: "100vw" }}
          >
            {children}
          </Box>
        </Box>
      ) : (
        <Box>
          <Box
            component="main"
            sx={{ flexGrow: 1, p: 2, mt: 6, maxWidth: "100vw" }}
          >
            {children}
          </Box>
        </Box>
      )}
    </Box>
  );
}
