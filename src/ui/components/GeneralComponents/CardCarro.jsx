import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

export default function CardCarro({ vehiculo }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", m: 3 }}>
      <Link
        style={{ textDecoration: "none", color: "white" }}
        to={"/carro?id=" + vehiculo.id}
      >
        <Card sx={{ width: 300, height: 300, backgroundColor: "white" }}>
          <CardActionArea>
            <CardMedia sx={{ height: 220 }}>
              <img id="im" src={vehiculo.imagenes[0]} height={"100"} />
            </CardMedia>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                fontSize={"15px"}
                component="div"
              >
                {vehiculo.nombre}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontWeight: "bold" }}
              >
                COP ${vehiculo.precio.toLocaleString()}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Box>
  );
}
