import { Box, Grid, Typography } from "@mui/material";
import ProcenterCommerceLayout from "../layout/ProcenterCommerceLayout";

export const InformacionEmpresarial = () => {
  return (
    <ProcenterCommerceLayout>
      <Grid container display={"flex"} justifyContent={"center"} spacing={2}>
        <Grid item sm={6} xs={12} sx={{ textAlign: "center" }}>
          <Typography
            sx={{ fontSize: "30pt", color: "gray", fontWeight: "bold" }}
          >
            ¿QUIENES SOMOS?
          </Typography>
        </Grid>
        <Grid item sm={6} xs={12}></Grid>
      </Grid>
      <Grid
        container
        display={"flex"}
        justifyContent={"center"}
        sx={{ backgroundColor: "black" }}
      >
        <Grid item sm={6} xs={12} sx={{ textAlign: "center" }}>
          <Box sx={{ width: "100%", mt: 2, mb: 2 }}>
            <img id="img4" src="../../../public/Images/LUCKY5.png" />
          </Box>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Typography sx={{ color: "white", mt: 2, mb: 2 }}>
            BBLABLABLBALBALBALBALBAL BALBALBALBALABLABLABLABAL
            BLABALBALBALBALBALBALBALBA BLABLABLABLABLABLABALBALBL
          </Typography>
        </Grid>
      </Grid>
    </ProcenterCommerceLayout>
  );
};
