import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";

export default function CardCarro({ vehiculo }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", m: 3 }}>
      <Card
        sx={{ width: 400,height:300, backgroundColor: "white" }}
        //onClick={() => handleClick(vehiculo.id)}
      >
        <CardActionArea>
          <CardMedia sx={{ height: 220 }}>
            <img id="im" src={vehiculo.imagenes[0]} height={"100"} />
          </CardMedia>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              fontSize={"17px"}
              component="div"
            >
              {vehiculo.nombre}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontWeight: "bold" }}
            >
              {vehiculo.precio}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
