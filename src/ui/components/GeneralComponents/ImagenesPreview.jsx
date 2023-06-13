import React from "react";
import { Box, Grid, IconButton, Modal, Badge } from "@mui/material";
import { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";
import { Typography } from "@material-ui/core";

const ImagenesPreview = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (image) => {
    const selectedIndex = images.findIndex((img) => img === image);
    setSelectedImage(image);
    setCurrentIndex(selectedIndex);
    setIsOpen(true);
  };

  const previousImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentIndex(0);
  };

  const images = [
    "../../../../public/Images/ima2.jpg",
    "../../../../public/Images/ima1.jpg",
    "../../../../public/Images/asesore.png",
    "../../../../public/Images/PUBLI.png",
    "../../../../public/Images/ima3.jpg",
    "../../../../public/Images/black.png",
  ];

  const remainingImages = images.slice(4);

  return (
    <Grid container>
      {images.slice(0, 4).map((image, index) => (
        <Grid item sm={6} xs={6} key={index}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              p: 1,
              position: "relative",
            }}
          >
            <img
              className="imagenesPeque"
              src={image}
              onClick={() => openModal(image)}
              alt=""
              style={{ cursor: "pointer" }}
            />
            {index === 3 && remainingImages.length > 0 && (
              <Box
                sx={{
                  backdropFilter: "blur(10px)",
                  width: "50px",
                  height: "50px",
                  position: "absolute",
                  bottom: "45px",
                  zIndex: 1,
                  borderRadius: "50%",
                  p: 1.5,
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                {"+" + remainingImages.length}
              </Box>
            )}
          </Box>
        </Grid>
      ))}

      <Modal open={isOpen} onClose={closeModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            width: "70%",
            height: "500px",
            backgroundColor: "lightgray",

            "@media (max-width:899px)": {
              height: "300px",
              width: "80%",
            },
          }}
        >
          <IconButton
            onClick={closeModal}
            sx={{ position: "absolute", top: 0, right: 0, color: "red" }}
          >
            <CloseIcon />
          </IconButton>
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            sx={{ height: "100%" }}
          >
            <Grid item sm={0.5}>
              <IconButton
                onClick={previousImage}
                sx={{ color: "black", width: "100%" }}
              >
                <ArrowBackIosNewIcon />
              </IconButton>
            </Grid>
            <Grid item sm={10}>
              <img
                className="imagenesModal"
                src={images[currentIndex]}
                alt="Imagen grande"
              />
            </Grid>
            <Grid item sm={0.5}>
              <IconButton
                onClick={nextImage}
                sx={{ color: "black", width: "100%" }}
              >
                <ArrowForwardIosIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </Grid>
  );
};

export default ImagenesPreview;
