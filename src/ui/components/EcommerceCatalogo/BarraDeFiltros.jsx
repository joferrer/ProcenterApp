import { Divider, Grid, List, ListItem, ListItemButton, Typography } from "@mui/material"
import { CollapseFiltro } from "./CollapseFiltro"
import { SliderMuiComponent } from "./SliderMuiComponent"
import { useMemo, useState } from "react"


export const BarraDeFiltros = ({marcas=[], filtros, setfiltros}) => {

  const [precio, setprecio] = useState(filtros.precio)
  useMemo(() => setprecio(filtros.precio), [filtros])
  const filtrarPrecio = (nRango)=>{
    console.log(filtros)
    setfiltros({...filtros, precio: nRango })
  }


  return (
    <Grid mt={"170px"} ml={"10px"}>
        <Grid sx={{backgroundColor:"black", width:"20vw", height:"60vh",borderRadius:"2px"}}>
            <Grid sx={{ml:"10px"}}>
                    <Typography color={"white"}>FILTRAR POR:</Typography>
                    <Divider color="white" sx={{width:"80%"}}/>
                    <CollapseFiltro filtro={"Precio"}>
                      <SliderMuiComponent rango={precio} filtrar={filtrarPrecio}/>
                    </CollapseFiltro>
                    <CollapseFiltro filtro={"Marca"} >
                      <List>
                        {
                          marcas.map(m => 
                            <ListItem key={m} style={{
                              paddingLeft: "18px",
                              paddingTop: 0,
                              paddingBottom: 0,
                              paddingRight: 0
                            }} >
                              <ListItemButton style={{padding: 0}} sx={{
                                color: "white",
                                pd:0
                              }}>{m}</ListItemButton>
                            </ListItem>
                          )  
                        }
                        
                      </List>
                    </CollapseFiltro>

            </Grid>
            
        </Grid>
    </Grid>
  )
}
