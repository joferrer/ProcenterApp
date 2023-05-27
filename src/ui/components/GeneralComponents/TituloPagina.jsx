import { Grid, Typography } from "@mui/material"

export const Titulo = ({titulo})=>{

    return <Grid sx={{ml:"30px",
    "@media (max-width:600px)": {
        ml:"10px",
    },
    }}>
        <Typography 
        fontSize={"28px"}
        fontWeight={"300"}
        sx={{height:"39px"}}>
            {titulo}
        
        </Typography>
        
        <Typography 
            fontFamily={"Segoe UI"} 
            fontWeight={"200"}
            fontSize={"32px"}
            sx={{height:"39px"}}
        >
            PROCENTER AUTOS
        </Typography>
    </Grid>
}   