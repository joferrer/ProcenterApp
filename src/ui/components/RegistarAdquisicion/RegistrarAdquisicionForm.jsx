import { Grid, Typography } from "@mui/material"
import { TextInput } from "../RegistroDeVentasComponents/TextInput"


export const RegistrarAdquisicionForm = () => {
  return (
    <Grid container>
        <form>
            <Grid container
                sx={{mt:"50px", ml:"40px", 
                width:"100%",   
                "@media (max-width:600px)": {
                    ml:"10px",
                },
                justifyContent:"space-between"}}
            >
            <Grid>  
                <TextInput label={"Nombre"}/>
            </Grid>
            <Grid>
                <TextInput label={"Nombre"}/>
            </Grid>
            <Grid>
                <TextInput label={"Nombre"}/>
            </Grid>
            </Grid>
        </form>
    </Grid>
  )
}
