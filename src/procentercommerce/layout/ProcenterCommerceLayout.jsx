import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Grid } from "@mui/material";
import TextoImagenEcomerfooter from "./../../ui/components/GeneralComponents/TextoImagenEcomerfooter";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import DiamondIcon from "@mui/icons-material/Diamond";
import MinorCrashIcon from "@mui/icons-material/MinorCrash";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import im from "../../../public/Images/LUCKY5.png";
import blac from "../../../public/Images/black.png";

function ProcenterCommerceLayout({ children }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ width: "100%", height: "100%", mb: 8.2 }}>
        <AppBar sx={{ backgroundColor: "black", width: "100%" }}>
          <Box sx={{ display: "flex", width: "100%" }}>
            <Toolbar sx={{ display: "flex", width: { xs: "100%", md: "80%" } }}>
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={"/catalogo"}
                  >
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{"vehiculo"}</Typography>
                    </MenuItem>
                  </Link>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={"/sobre-nosotros"}
                  >
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">
                        {"Sobre Nosotros"}
                      </Typography>
                    </MenuItem>
                  </Link>
                </Menu>
                <Box
                  sx={{
                    "@media (min-width:899px)": {
                      display: "none",
                    },
                    "@media (max-width:899px)": {
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                    },
                  }}
                >
                  <Box sx={{ width: "60px", height: "60px" }}>
                    <a href="/home">
                      <img src={im} id="im" />
                    </a>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  "@media (min-width:899px)": {
                    display: "flex",
                    justifyContent: "center",
                    width: "60px",
                    height: "60px",
                    mr: 3,
                  },
                  "@media (max-width:899px)": {
                    display: "none",
                  },
                }}
              >
                <a href="/home">
                  <img src={im} id="im" />
                </a>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  "@media (max-width:899px)": {
                    display: "none",
                  },
                }}
              >
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to={"/catalogo"}
                >
                  <MenuItem
                    sx={{ height: "65px", width: "140px" }}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center">{"Vehiculos"}</Typography>
                  </MenuItem>
                </Link>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to={"/sobre-nosotros"}
                >
                  <MenuItem
                    sx={{ height: "65px", width: "140px" }}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center">
                      {"Sobre Nosotros"}
                    </Typography>
                  </MenuItem>
                </Link>
              </Box>
            </Toolbar>
            <Toolbar
              sx={{
                "@media (max-width:899px)": {
                  display: "none",
                },
                "@media (min-width:899px)": {
                  display: "flex",
                  justifyContent: "center",
                  width: "20%",
                },
              }}
            >
              <Box
                sx={{
                  "@media (min-width:899px)": {
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                  },
                  "@media (max-width:899px)": {
                    display: "none",
                  },
                }}
              >
                <MenuItem
                  sx={{ height: "65px", width: "100px" }}
                  onClick={handleCloseNavMenu}
                >
                  <Grid
                    container
                    justifyContent={"center"}
                    alignItems={"center"}
                  ></Grid>
                </MenuItem>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="https://wa.me/c/573118931877"
                >
                  <MenuItem
                    sx={{ height: "65px", width: "100px" }}
                    onClick={handleCloseNavMenu}
                  >
                    <Grid
                      container
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <PersonIcon />
                      <Typography sx={{ fontSize: "10pt" }}>
                        contactanos
                      </Typography>
                    </Grid>
                  </MenuItem>
                </Link>
              </Box>
            </Toolbar>
          </Box>
        </AppBar>
      </Box>
      <Box
        sx={{
          float: "right",
          width: 50,
        }}
      >
        <Box
          sx={{
            position: "fixed",
            backgroundColor: "black",
            pr: 1,
            mr: 3,
            borderRadius: "20px",
            top: "300px",
            zIndex: 2,
          }}
        >
          <a href={"https://wa.me/c/573118931877"}>
            <WhatsAppIcon
              sx={{ color: "white", width: 50, height: 50, mr: 3 }}
            />
          </a>
        </Box>
      </Box>

      <Box sx={{ mt: 3, mb: 3, height: "100%" }}>{children}</Box>

      <Box sx={{ width: "100%", pt: "20px" }}>
        <Button
          fullWidth
          onClick={scrollToTop}
          sx={{
            width: "100%",
            border: "1px solid black",
            pt: 1,
            pb: 3,
            textAlign: "center",
          }}
        >
          Volver al Inicio ⇑
        </Button>
        <Box sx={{ width: "100%", height: "auto", backgroundColor: "black" }}>
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item sm={4} xs={12} sx={{ mb: 2 }}>
              <TextoImagenEcomerfooter
                icon={
                  <MinorCrashIcon
                    sx={{
                      width: 70,
                      height: 70,
                      color: "white",
                    }}
                  />
                }
                texto={"CERTIFICADOS POR AUTOMAs"}
              />
            </Grid>
            <Grid item sm={4} xs={12} sx={{ mb: 2 }}>
              <TextoImagenEcomerfooter
                icon={
                  <EmojiEventsIcon
                    sx={{
                      width: 70,
                      height: 70,
                      color: "white",
                    }}
                  />
                }
                texto={"CERTIFICADOS POR COLCERAUTOS"}
              />
            </Grid>
            <Grid item sm={4} xs={12} sx={{ mb: 2 }}>
              <TextoImagenEcomerfooter
                icon={
                  <DiamondIcon
                    sx={{
                      color: "white",
                      width: 70,
                      height: 70,
                    }}
                  />
                }
                texto={"VEHICULOS DE ALTA CALIDAD"}
              />
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "auto",
            backgroundColor: "#F2F2F2",
          }}
        >
          <Grid
            container
            sx={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
            spacing={2}
          >
            <Grid item sm={4} xs={12} sx={{ mb: 2 }}>
              <Box sx={{ width: "100%", pt: 2 }}>
                <img id="im2" src={blac} />
              </Box>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Typography sx={{ mb: 2, fontWeight: "bold" }}>
                Sobre Nosotros:
              </Typography>
              <p>
                blablblablablblalbalblablbl blablblablablblalbalblablblab
                blablablblalbalblblblblblalbl
              </p>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "black" }}
              >
                <Typography sx={{ mb: 2, fontWeight: "bold" }}>
                  ¿Eres Empleado?
                </Typography>
              </Link>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Typography sx={{ mb: 2, fontWeight: "bold" }}>
                Visitanos en:
              </Typography>
              <a
                href={"https://www.facebook.com/profile.php?id=100088245461203"}
              >
                <FacebookIcon sx={{ color: "blue", width: 40, height: 40 }} />
              </a>

              <a href={"https://www.instagram.com/procenterautos/"}>
                <InstagramIcon
                  sx={{ color: "#FF0097", width: 40, height: 40 }}
                />
              </a>

              <a href={"https://wa.me/c/573118931877"}>
                <WhatsAppIcon sx={{ color: "green", width: 40, height: 40 }} />
              </a>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
export default ProcenterCommerceLayout;
