import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useState } from "react";
import CarouselComponent from "./CarouselDcomponentes";

export const GridHomeFoto = ({ vehiculos }) => {
  const [catalogo, setcatalogo] = useState(vehiculos);
  const handleClick = () => {
    alert("Ops, aun no esta hecho esto :/");
  };
  return (
    <Grid sx={{ mt: "100px", ml: "10px" }}>
      <CarouselComponent vehiculo={catalogo} />
    </Grid>
  );
};
