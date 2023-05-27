import React from 'react';
import { Box } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import { Alert, AlertTitle } from "@mui/material";

export const ImagenesComponent = () => {
    const [images, setImages] = useState([]);

  const handleImageChange = (event) => {
    const files = event.target.files;
    if (images.length + files.length > 11) {
      alert("No puedes agregar más de 11 imágenes");
      return;
    }

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.readAsDataURL(files[i]);
      reader.onload = (e) => {
        setImages((prevState) => [...prevState, e.target.result]);
      };
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageChange}
      />
      <div className="image-preview-container">
        {images.map((image, index) => (
          <div key={index} className="image-preview">
            <img src={image} alt={`Image ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};



export default ImagenesComponent;
