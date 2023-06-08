import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";

export default function SliderSizes({ precio }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    precio(newValue);
  };

  const formattedValue = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
  }).format(value);

  return (
    <Box width={300}>
      <Typography>{formattedValue}</Typography>
      <Slider
        step={5000000}
        min={10000000}
        max={300000000}
        value={value}
        onChange={handleChange}
        valueLabelFormat={() => formattedValue}
      />
    </Box>
  );
}
