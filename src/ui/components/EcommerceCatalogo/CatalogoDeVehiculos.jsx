import { Grid, Typography } from "@mui/material"
import { BarraDeFiltros } from "./BarraDeFiltros"
import { GridCatalogo } from "./GridCatalogo"

export const CatalogoDeVehiculos = () => {
  return (
    <Grid container flexWrap={"nowrap"}>
        <BarraDeFiltros />
        <GridCatalogo />
    </Grid>
  )
}
