import React from "react";
import ProcenterCommerceLayout from "./../layout/ProcenterCommerceLayout";
import { Box, Grid, Typography, Modal } from "@mui/material";
import ImagenesPreview from "../../ui/components/GeneralComponents/ImagenesPreview";

const Vvehiculo = () => {
  return (
    <ProcenterCommerceLayout>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Box sx={{ width: "75%" }}>
          <Box sx={{ height: "600px" }}>
            <img
              className="carro"
              src="../../../public/Images/ima1.jpg"
              alt="Portada"
            />

            <img
              className="profile-image"
              src="../../../public/Images/ima2.jpg"
              alt="Perfil"
            />
            <Box className="profile-titulo">
              <Box
                sx={{
                  width: "60%",
                  "@media (max-width:899px)": { width: "100%" },
                }}
              >
                <Typography
                  sx={{
                    width: "100%",
                    fontSize: "20pt",
                    fontWeight: "bold",
                    "@media (max-width:899px)": { fontSize: "18pt" },
                  }}
                >
                  RENAULT DUSTER ZEN MT 1.6 4X2 2023 CON 4MIL KMS
                </Typography>
                <Typography sx={{ width: "100%", fontSize: "19pt" }}>
                  COP 96,900,000.00
                </Typography>
              </Box>
            </Box>
          </Box>
          <Grid container sx={{ mt: 4 }}>
            <Grid item sm={6} xs={12}>
              <Typography sx={{ fontWeight: "bold", ml: 1 }}>
                GALERÍA
              </Typography>
              <ImagenesPreview />
            </Grid>
            <Grid item sm={6}>
              <Typography sx={{ fontWeight: "bold", ml: 1 }}>
                CARACTERÍSTICAS
              </Typography>
              <ul className="profile-list">
                <li>Elemento de lista 1</li>
                <li>Elemento de lista 2</li>
                <li>Elemento de lista 3</li>
              </ul>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >

      </Box>
    </ProcenterCommerceLayout>
  );
};

export default Vvehiculo;
