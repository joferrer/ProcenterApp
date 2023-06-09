import React, { useState } from "react";
import { FormControlLabel, Checkbox, Box } from "@mui/material";

export default function CheckboxList({ marca }) {
  const [selectedMarca, setSelectedMarca] = useState("");
  const marcas = ["KIA", "RENAULT", "MERCEDES", "TOYOTA", "BMW"];

  const handleCheckboxChange = (event) => {
    setSelectedMarca(event.target.value);
    marca(event.target.value);
  };

  const columns = Math.ceil(marcas.length / 3); // Calcula la cantidad de columnas necesarias

  return (
    <Box display={"flex"}>
      {Array.from({ length: columns }, (_, colIndex) => (
        <Box key={colIndex} flex={1}>
          {marcas
            .slice(colIndex * columns, colIndex * columns + columns) // Obtiene las marcas para la columna actual
            .map((marca, index) => (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    checked={selectedMarca === marca}
                    onChange={handleCheckboxChange}
                    value={marca}
                  />
                }
                label={marca}
              />
            ))}
        </Box>
      ))}
    </Box>
  );
}
