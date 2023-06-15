import React, { useState } from "react";
import { Avatar, Box, Button } from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

const ImageUploader = ({ img, setImg }) => {
  const [selectedImage, setSelectedImage] = useState(img);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setSelectedImage(e.target.result);
      setImg(e.target.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Avatar
        src={selectedImage}
        alt="Uploaded Image"
        sx={{
          width: 200,
          height: 200,
          mt: 13,
          "@media (max-width:599px)": {
            mt: 2,
          },
        }}
      />
      <Button
        variant="contained"
        component="label"
        color="secondary"
        sx={{ mt: 2 }}
      >
        <AddPhotoAlternateIcon sx={{ mr: 1 }} />
        Agregar imagen
        <input
          type="file"
          style={{ display: "none" }}
          accept="jpg"
          onChange={handleImageUpload}
        />
      </Button>
    </Box>
  );
};

export default ImageUploader;
