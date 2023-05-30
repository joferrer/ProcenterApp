import { Grid, Typography } from "@mui/material";
import React from "react";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import DiamondIcon from "@mui/icons-material/Diamond";
import MinorCrashIcon from "@mui/icons-material/MinorCrash";

const TextoImagenEcomerfooter = ({ icon, texto }) => {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid item sm={12}>
        {icon}
        <Typography sx={{ color: "white", fontWeight: "bold" }}>
          {texto}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default TextoImagenEcomerfooter;
