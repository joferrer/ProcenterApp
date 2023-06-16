import { Box, Button, Typography } from "@mui/material";
import ProcenterCommerceLayout from "../layout/ProcenterCommerceLayout";
import { useState } from "react";
import CarouselComponent from "../../ui/components/GeneralComponents/carousel";
import Boton from "./../../ui/components/GeneralComponents/BotonesEspeciales";
import HorizontalCollapse from "./../../ui/components/GeneralComponents/Collap";
import { GridHomeFoto } from "../../ui/components/GeneralComponents/GridHomeFoto";

import img1 from "../../../public/Images/ima1.jpg";
import img2 from "../../../public/Images/ima2.jpg";
import img3 from "../../../public/Images/ima3.jpg";

export const HomePage = () => {
  const [isSelected, setIsSelected] = useState(false);
  const images = [
    {
      src: img1,
      alt: "Imagen 1",
      title: "Título de la imagen 1",
    },
    {
      src: img2,
      alt: "Imagen 2",
      title: "Título de la imagen 2",
    },
    {
      src: img3,
      alt: "Imagen 3",
      title: "Título de la imagen 3",
    },
  ];
  const error = "";
  const handleButtonClick = () => {
    setIsSelected(!isSelected);
  };
  return (
    <ProcenterCommerceLayout>
      <CarouselComponent images={images} txt={"PROCENTER AUTOS"} />
      <Box
        sx={{
          width: "100%",
          height: "auto",
          backgroundColor: "lightgray",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            pt: 5,
            pb: 5,
            color: "gray",
            fontSize: "30pt",
            fontFamily: "Segoe UI",
            fontWeight: "bold",
          }}
        >
          ¡CONOCE NUESTROS VEHICULOS!
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pt: 5,
        }}
      >
        <Boton
          textos={[
            { id: 1, text: "RENAULT", link: "/catalogo?marca=RENAULT" },
            { id: 2, text: "KIA", link: "/catalogo?marca=KIA" },
            { id: 3, text: "MERCEDES", link: "/catalogo?marca=MERCEDES" },
            { id: 4, text: "BMW", link: "/catalogo?marca=BMW" },
            { id: 5, text: "TOYOTA", link: "/catalogo?marca=TOYOTA" },
            { id: 6, text: "CHEVROLET", link: "/catalogo?marca=CHEVROLET" },
          ]}
        />
      </Box>

      <HorizontalCollapse />
      <GridHomeFoto />
    </ProcenterCommerceLayout>
  );
};
