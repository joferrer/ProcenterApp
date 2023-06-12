import { Box, TextField, Typography } from "@mui/material";
import React from "react";

const TextLabel = ({ titulo, hold, value, setValue,error }) => {
  return (
    <Box>
      <Typography
        fontFamily={"Segoe UI"}
        sx={{ width: "100%", float: "left", fontSize: "15pt" }}
      >
        {titulo}
      </Typography>
      <TextField
        id="outlined-basic"
        variant="outlined"
        placeholder={hold}
        value={value}
        error={error}
        onChange={(e) => setValue(e.target.value)}
        fullWidth
        type="number"
        sx={{ backgroundColor: "#d6d4d4" }}
      />
    </Box>
  );
};

export default TextLabel;
