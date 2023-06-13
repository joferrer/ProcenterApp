import React, { useState } from "react";
import { FormControlLabel, Checkbox, Box } from "@mui/material";

export default function CheckboxList({ marca }) {
  const [selectedMarca, setSelectedMarca] = useState("");

  const marcas = ["KIA", "RENAULT", "MERCEDES", "TOYOTA", "BMW"];

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    if (selectedMarca === value) {
      setSelectedMarca("");
      marca("");
    } else {
      setSelectedMarca(value);
      marca(value);
    }
  };

  const columns = Math.ceil(marcas.length / 3);

  return (
    <Box display="flex">
      {Array.from({ length: columns }, (_, colIndex) => (
        <Box key={colIndex} flex={1}>
          {marcas
            .slice(colIndex * columns, colIndex * columns + columns)
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
