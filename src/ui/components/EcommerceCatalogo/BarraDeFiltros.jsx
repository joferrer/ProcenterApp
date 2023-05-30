import { KeyboardArrowDown } from "@mui/icons-material"
import { Collapse, Divider, Grid, IconButton, Slider, Typography } from "@mui/material"
import { CollapseFiltro } from "./CollapseFiltro"
import { SliderMuiComponent } from "./SliderMuiComponent"


export const BarraDeFiltros = () => {
  return (
    <Grid mt={"170px"}>
        <Grid sx={{backgroundColor:"black", width:"20vw", height:"40vh",borderRadius:"2px"}}>
            <Grid sx={{ml:"10px"}}>
                    <Typography color={"white"}>FILTRAR POR:</Typography>
                    <Divider color="white" sx={{width:"80%"}}/>
                    <CollapseFiltro filtro={"Precio"}>
                      <SliderMuiComponent rango={[0,100]}/>
                    </CollapseFiltro>
            </Grid>
            
        </Grid>
    </Grid>
  )
}
