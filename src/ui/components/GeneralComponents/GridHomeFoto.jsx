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
import { CatalogoDispatch } from "./../../../store/catalogo/CatalogoDispatch";
import { useEffect } from "react";

export const GridHomeFoto = () => {
  const { catalogo } = CatalogoDispatch();

  return (
    <>
      {catalogo.length >= 1 ? (
        <>
          <Box sx={{ p: 3, pl: 4, ml: 10, mr: 10 }}>
            <Grid
              container
              spacing={1}
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
                  <CardCarro vehiculo={catalogo[0]} />
                </Box>
                <Box sx={{ mt: 2 }}>
                  <CardCarro vehiculo={catalogo[1]} />
                </Box>
              </Grid>
              <Grid item sm={6} xs={12}>
                <Box>
                  <CardCarro vehiculo={catalogo[2]} />
                </Box>
                <Box sx={{ mt: 2 }}>
                  <CardCarro vehiculo={catalogo[3]} />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </>
      ) : (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              width: "100%",
              height: "100%",
              fontSize: "40pt",
              mt: "250px",
              color: "black",
            }}
          >
            Cargando...
          </Typography>
        </Box>
      )}
    </>
  );
};
