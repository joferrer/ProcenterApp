import { Box, Grid, Typography } from "@mui/material";
import ProcenterCommerceLayout from "../layout/ProcenterCommerceLayout";
import CarouselComponent from "../../ui/components/GeneralComponents/carousel";
import img2 from "../../../public/Images/LUCKY5.png";
import clienteFeliz from "../../../public/Images/ClienteFeliz1.jpeg"
import { InformacionDispatch } from "../../store/informacion/InformacionDispatch";
export const InformacionEmpresarial = () => {

  const {informacion} = InformacionDispatch()

  return (
    <ProcenterCommerceLayout>
      <Grid container display={"flex"} justifyContent={"center"} spacing={2}>
        <Grid item sm={6} xs={12} sx={{ textAlign: "center" }}>
          <Typography
            sx={{
              fontSize: "30pt",
              color: "gray",
              fontWeight: "bold",
              pt: 25,
              "@media (max-width:599px)": {
                pt: 5,
              },
            }}
          >
            ¿QUIENES SOMOS?
            
          </Typography>
          <Typography sx={{  mt: 2, mb: 2 }}>{
              informacion?.quienesSomos
            }</Typography>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Box sx={{ p: 2 }}>
            <CarouselComponent />
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        display={"flex"}
        justifyContent={"center"}
        sx={{ backgroundColor: "black" }}
      >
        <Grid item sm={6} xs={12} sx={{ textAlign: "center" }}>
          <Box sx={{ width: "100%", mt: 2, mb: 2 }}>
            <img id="img4" src={img2} />
          </Box>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Typography variant="h3"  sx={{ color: "white", mt: 2, mb: 2 }}>Visión</Typography>
          <Typography sx={{ color: "white", mt: 2, mb: 2 }}>
            {informacion?.vision}
          </Typography>
        </Grid>
        
      </Grid>
      <Grid
        container
        display={"flex"}
        justifyContent={"center"}
        
      >
        <Grid item sm={6} xs={12}>
          <Typography variant="h3"  sx={{ ml:2, mt: 2, mb: 2 }}>Misión</Typography>
          <Typography sx={{ ml:2, mt: 2, mb: 2 }}>
            {informacion?.mision}
          </Typography>
        </Grid>
        
        <Grid item sm={6} xs={12} sx={{ textAlign: "center" }}>
          <Box sx={{ width: "100%", mt: 2, mb: 2 }}>
            <img style={{width:400, height: 300}} src={clienteFeliz} />
          </Box>
        </Grid>
        
      </Grid>
      
    </ProcenterCommerceLayout>
  );
};
