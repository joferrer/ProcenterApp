import React, { useState } from "react";
import { FormControlLabel, Checkbox, Box } from "@mui/material";

export default function CheckboxList({ marca }) {
  const [selectedMarca, setSelectedMarca] = useState("");
  const marcas = ["KIA", "RENAULT", "MERCEDES", "TOYOTA", "BMW"];

  const handleCheckboxChange = (event) => {
    setSelectedMarca(event.target.value);
    marca(event.target.value);
  };

  return (
    <Box display={"flex"}>
      {marcas.map((marca, index) => (
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
  );
}
