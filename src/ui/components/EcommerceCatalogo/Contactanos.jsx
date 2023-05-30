import { SupportAgent } from "@mui/icons-material"
import { Grid, Typography } from "@mui/material"


export const Contactanos = () => {
  return (
    <Grid container sx={{
        justifyContent: "center",
        alignContent: "center",
        backgroundColor:"#D9D9D9",
        p:"10px",
        
    }}>
        <SupportAgent sx={{ fontSize:"70px", color: "white",}}/>
        <Typography variant="h1" sx={{
            display:"inline",
            fontSize: "48px",
            fontWeight:"400",
        }}>¡CONTACTA CON NOSOTROS!</Typography>
    </Grid>
  )
}
