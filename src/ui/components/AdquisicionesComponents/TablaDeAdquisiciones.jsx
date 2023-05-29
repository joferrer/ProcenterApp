import { Grid } from "@mui/material"
import { CollapsibleTable } from "./CollapsibleTable"


export const TablaDeAdquisiciones = () => {
  return (
    <Grid container sx={{mt: "20px"}}>
        <CollapsibleTable columnas={["Nombre","Marca", "Modelo", "Precio", "Placa"]}/>
    </Grid>
  )
}
