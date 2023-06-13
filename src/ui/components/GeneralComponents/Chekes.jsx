import React, { useState } from "react";
import { FormControlLabel, Checkbox, Box, Grid } from "@mui/material";

export default function CheckboxList({ marca }) {
  const [selectedMarca, setSelectedMarca] = useState("");

  const marcas = ["KIA", "RENAULT", "MERCEDES", "TOYOTA", "BMW", "CHEVROLET"];

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

  return (
    <Grid container>
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
          labelPlacement="end"
        />
      ))}
    </Grid>
  );
}
