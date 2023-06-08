import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComponent = ({ vehiculo }) => {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
      showArrows={true}
      stopOnHover={true}
    >
      {vehiculo.map((v) => (
        <Card
          key={v.id}
          sx={{ maxWidth: 250, height: 280, backgroundColor: "#F2F2F2" }}
          //onClick={() => //handleClick(v.id)}
        >
          <CardActionArea>
            <CardMedia
              image={v.imagenes[0]}
              title={v.nombre}
              sx={{ height: 150, width: 250 }}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                fontSize={"17px"}
                component="div"
              >
                {v?.nombre}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontWeight: "bold" }}
              >
                COP {v?.precio.toLocaleString()}$
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
