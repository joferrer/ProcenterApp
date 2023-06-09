import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useState } from "react";
import CardCarro from "./CardCarro";

export const GridHomeFoto = () => {
  return (
    <Box sx={{p:3,pl:4}}>
      <Grid
        container
        spacing={2}
        sx={{
          mt: 2,
          pb: 4,
          pt: 4,
          display: "flex",
          backgroundColor: "lightgrey",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "5px",
        }}
      >
        <Grid item sm={6} xs={12}>
          <Box>
            <CardCarro />
          </Box>
          <Box sx={{ mt: 2 }}>
            <CardCarro />
          </Box>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Box>
            <CardCarro />
          </Box>
          <Box sx={{ mt: 2 }}>
            <CardCarro />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
