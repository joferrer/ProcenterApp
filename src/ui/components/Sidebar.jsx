import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import TimelineIcon from "@mui/icons-material/Timeline";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { AttachEmail, Title } from "@mui/icons-material";
import { Grid, Typography, Hidden } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Catalogo } from "./../../procenterapp/pages/Catalogo";

const wid = 230;
const parrafoprincipal = "PROCENTERAPP";

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
      <List className="fondo">
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
              <AutoStoriesIcon sx={{ color: "white", width: 20 }} />
            </ListItemIcon>
            <ListItemText sx={{ opacity: open ? 1 : 0 }} primary="Catalogo" />
          </ListItemButton>
        </ListItem>
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
              <TimelineIcon sx={{ color: "white", width: 20 }} />
            </ListItemIcon>
            <ListItemText
              sx={{ opacity: open ? 1 : 0 }}
              primary="Informes"
              fontSize="11pt"
            />
          </ListItemButton>
        </ListItem>
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
              <AttachMoneyIcon sx={{ color: "white", width: 20 }} />
            </ListItemIcon>
            <ListItemText
              sx={{ opacity: open ? 1 : 0 }}
              primary="Simulador de Credito"
              fontSize="11pt"
            />
          </ListItemButton>
        </ListItem>
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
              <WorkHistoryIcon sx={{ color: "white", width: 20 }} />
            </ListItemIcon>
            <ListItemText
              sx={{ opacity: open ? 1 : 0 }}
              primary="Historial de Ventas"
              fontSize="11pt"
            />
          </ListItemButton>
        </ListItem>
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
              <PermIdentityIcon sx={{ color: "white", width: 20 }} />
            </ListItemIcon>
            <ListItemText
              sx={{ opacity: open ? 1 : 0 }}
              primary="Asesores Comerciales"
            />
          </ListItemButton>
        </ListItem>
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
              <AdminPanelSettingsIcon sx={{ color: "white", width: 20 }} />
            </ListItemIcon>
            <ListItemText
              sx={{ opacity: open ? 1 : 0 }}
              primary="Administrar"
            />
          </ListItemButton>
        </ListItem>
      </List>
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
            <p color="whire">{parrafoprincipal}</p>
          </Box>
        </Box>
      </Hidden>
      <Hidden smDown>
        <Box sx={{ display: "flex" }}>
          {isSmallScreen ? (
            <Drawer
              sx={{
                width: "22vw",
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                  width: "22vw",
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
                  sx={{ mt: 4, mb: 3 }}
                >
                  <img id="img4" src="../../../public/Images/LUCKY5.png" />
                </Box>
              </Toolbar>
              <List className="fondo" sx={{ height: "100vh" }}>
                <ListItem disablePadding sx={{ mt: 4 }}>
                  <ListItemButton sx={{ pl: 2 }}>
                    <ListItemIcon>
                      <AutoStoriesIcon sx={{ color: "white", ml: 2 }} />
                    </ListItemIcon>
                    <ListItemText primary="Catalogo" sx={{ pl: 1 }} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton sx={{ pl: 2 }}>
                    <ListItemIcon>
                      <TimelineIcon sx={{ color: "white", ml: 2 }} />
                    </ListItemIcon>
                    <ListItemText primary="Informes" sx={{ pl: 1 }} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton sx={{ pl: 2 }}>
                    <ListItemIcon>
                      <AttachMoneyIcon sx={{ color: "white", ml: 2 }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Simulador de Credito"
                      sx={{ pl: 1, mr: 1 }}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton sx={{ pl: 2 }}>
                    <ListItemIcon>
                      <WorkHistoryIcon sx={{ color: "white", ml: 2 }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Historial de Ventas"
                      sx={{ pl: 1, mr: 1 }}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton sx={{ pl: 2 }}>
                    <ListItemIcon>
                      <PermIdentityIcon sx={{ color: "white", ml: 2 }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Asesores Comerciales"
                      sx={{ pl: 1, mr: 1 }}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton sx={{ pl: 2 }}>
                    <ListItemIcon>
                      <AdminPanelSettingsIcon sx={{ color: "white", ml: 2 }} />
                    </ListItemIcon>
                    <ListItemText primary="Administrar" sx={{ pl: 1, mr: 1 }} />
                  </ListItemButton>
                </ListItem>
              </List>
            </Drawer>
          ) : (
            <Drawer
              sx={{
                width: "30vw",
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                  width: "30vw",
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
                  sx={{ mt: 4, mb: 3 }}
                >
                  <img id="img4" src="../../../public/Images/LUCKY5.png" />
                </Box>
              </Toolbar>
              <List className="fondo" sx={{ height: "100vh" }}>
                <ListItem disablePadding sx={{ mt: 4 }}>
                  <ListItemButton sx={{ pl: 2 }}>
                    <ListItemIcon>
                      <AutoStoriesIcon sx={{ color: "white", ml: 2 }} />
                    </ListItemIcon>
                    <ListItemText primary="Catalogo" sx={{ pl: 1 }} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton sx={{ pl: 2 }}>
                    <ListItemIcon>
                      <TimelineIcon sx={{ color: "white", ml: 2 }} />
                    </ListItemIcon>
                    <ListItemText primary="Informes" sx={{ pl: 1 }} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton sx={{ pl: 2 }}>
                    <ListItemIcon>
                      <AttachMoneyIcon sx={{ color: "white", ml: 2 }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Simulador de Credito"
                      sx={{ pl: 1, mr: 1 }}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton sx={{ pl: 2 }}>
                    <ListItemIcon>
                      <WorkHistoryIcon sx={{ color: "white", ml: 2 }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Historial de Ventas"
                      sx={{ pl: 1, mr: 1 }}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton sx={{ pl: 2 }}>
                    <ListItemIcon>
                      <PermIdentityIcon sx={{ color: "white", ml: 2 }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Asesores Comerciales"
                      sx={{ pl: 1, mr: 1 }}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton sx={{ pl: 2 }}>
                    <ListItemIcon>
                      <AdminPanelSettingsIcon sx={{ color: "white", ml: 2 }} />
                    </ListItemIcon>
                    <ListItemText primary="Administrar" sx={{ pl: 1, mr: 1 }} />
                  </ListItemButton>
                </ListItem>
              </List>
            </Drawer>
          )}
        </Box>
      </Hidden>
      <Box>
        {isPequeño ? (
          <Box component="main" sx={{ flexGrow: 1, p: 2, maxWidth: "100vw" }}>
            {children}
          </Box>
        ) : (
          <Box
            component="main"
            sx={{ flexGrow: 1, p: 2, mt: 6, maxWidth: "100vw" }}
          >
            {children}
          </Box>
        )}
      </Box>
    </Box>
  );
}
