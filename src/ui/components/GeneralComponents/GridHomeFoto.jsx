import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useState } from "react";
import CardCarro from "./CardCarro";

export const GridHomeFoto = ({ carrito }) => {
  const carritos = [
    {
      imagenes: ["/public/Images/ima1.jpg", "/public/Images/ima2.jpg"],
      nombre: "hola",
      precio: "$50.000.000",
    },
    {
      imagenes: ["/public/Images/ima1.jpg", "/public/Images/ima2.jpg"],
      nombre: "hola",
      precio: "$50.000.000",
    },
    {
      imagenes: ["/public/Images/ima1.jpg", "/public/Images/ima2.jpg"],
      nombre: "hola",
      precio: "$50.000.000",
    },
    {
      imagenes: ["/public/Images/ima1.jpg", "/public/Images/ima2.jpg"],
      nombre: "hola",
      precio: "$50.000.000",
    },
  ];
  return (
    <Box sx={{ p: 3, pl: 4, ml: 10, mr: 10 }}>
      <Grid
        container
        spacing={1}
        sx={{
          mt: 2,
          pb: 4,
          pt: 4,
          display: "flex",
          backgroundColor: "lightgrey",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "5px",
        }}
      >
        <Grid item sm={6} xs={12}>
          <Box>
            <CardCarro vehiculo={carritos[0]} />
          </Box>
          <Box sx={{ mt: 2 }}>
            <CardCarro vehiculo={carritos[1]} />
          </Box>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Box>
            <CardCarro vehiculo={carritos[2]} />
          </Box>
          <Box sx={{ mt: 2 }}>
            <CardCarro vehiculo={carritos[3]} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
