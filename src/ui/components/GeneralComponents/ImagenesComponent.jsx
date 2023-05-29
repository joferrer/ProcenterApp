import React, { useState } from "react";
import { Box, IconButton, Alert, AlertTitle } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import { useEffect } from "react";

export const ImagenesComponent = ({ imagenesUrl, edit, setImagenes }) => {
  const ini = Object.values(imagenesUrl);
  const [images, setImages] = useState(ini);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  useEffect(() => setImagenes(images), [images]);

  const handleImageChange = (event) => {
    const files = event.target.files;
    if (images.length + files.length > 20) {
      setOpenSnackbar(true);
      return;
    }

    for (let i = 0; i < Math.min(files.length, 20 - images.length); i++) {
      const reader = new FileReader();
      reader.readAsDataURL(files[i]);
      reader.onload = (e) => {
        setImages((prevState) => [...prevState, e.target.result]);
      };
    }
  };

  const handleAddImageClick = () => {
    document.getElementById("image-input").click();
  };

  const handleRemoveImage = (index) => {
    setImages((prevState) => prevState.filter((_, i) => i !== index));
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "60%",
      }}
    >
      <input
        id="image-input"
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageChange}
        style={{ display: "none" }}
      />
      <div className="image-preview-container">
        {images.map((image, index) => (
          <div key={index} className="image-preview">
            <div className="image-container">
              <img src={image} alt={`Image ${index}`} className="small-image" />
              <IconButton
                onClick={() => handleRemoveImage(index)}
                disabled={!edit}
                sx={{
                  color: "red",
                  width: "5px",
                  height: "5px",
                }}
                className="delete-button"
              >
                <ClearIcon sx={{ width: "16px" }} />
              </IconButton>
            </div>
          </div>
        ))}
        <IconButton
          onClick={handleAddImageClick}
          disabled={images.length === 20 || !edit}
          sx={{
            backgroundColor: "grey",
            width: "40px",
            height: "40px",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "&:hover": {
              backgroundColor: "black",
            },
            mt: 1,
          }}
        >
          <AddIcon sx={{ color: "white" }} />
        </IconButton>
      </div>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      >
        <Alert severity="error" onClose={handleCloseSnackbar}>
          <AlertTitle>Error</AlertTitle>
          No puedes agregar más de 20 imágenes.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ImagenesComponent;
