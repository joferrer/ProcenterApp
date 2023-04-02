import { Box } from "@mui/material";
import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import { Alert, AlertTitle } from "@mui/material";

export const Catalogo = () => {
  const [images, setImages] = useState([]);
  const [open, setOpen] = useState(false);

  function handleImageChange(event) {
    const fileList = event.target.files;
    if (event.target.files.length + images.length > 11) {
      setOpen(true);
    } else {
      const newImages = Array.from(fileList).map((file) =>
        URL.createObjectURL(file)
      );
      setImages((prevImages) => [...prevImages, ...newImages]);
    }
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        multiple
      />
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          <AlertTitle>Error</AlertTitle>
          TOPE DE IMAGENES EXDEDIDO — <strong>SELECCIONE NUEVAMENTE</strong>
        </Alert>
      </Snackbar>
      <Box sx={{ width: 500, height: 450 }} cols={3}>
        {images.map((imageUrl) => (
          <img
            key={imageUrl}
            src={imageUrl}
            alt="Uploaded"
            style={{
              width: "70px",
              height: "70px",
              objectFit: "cover",
              margin: "5px",
            }}
          />
        ))}
      </Box>
    </div>
  );
};
