import { Chip, Divider, Grid, List, ListItem, ListItemButton, Stack, Typography } from "@mui/material"
import { CollapseFiltro } from "./CollapseFiltro"
import { SliderMuiComponent } from "./SliderMuiComponent"
import { useMemo, useState } from "react"


export const BarraDeFiltros = ({marcas=[], filtros, setfiltros}) => {

  const [precio, setprecio] = useState(filtros.precio)
  const [marca, setmarca] = useState(filtros.marca)
  useMemo(() => setprecio(filtros.precio), [filtros])
  console.log(filtros)
  const filtrarPrecio = (nRango)=>{
    setfiltros({...filtros, precio: nRango })
  }
  const filtrarPorMarca = (pMarca = "")=>{
    setfiltros({...filtros, marca: pMarca})
  }
  const handleDeleteFiltroMarca = ()=>{
    setfiltros({...filtros, marca: ""})
  }
  const handleDeleteFiltroPrecio = ()=>{
    setfiltros({ ...filtros, precio:[ 0,0]})
  }
  return (
    <Grid mt={"170px"} ml={"10px"}>
        <Grid sx={{backgroundColor:"black", width:"20vw", height:"70vh",borderRadius:"2px"}}>
            <Grid sx={{ml:"10px"}}>
                    <Typography color={"white"}>FILTRAR POR:</Typography>
                    <Divider color="white" sx={{width:"80%"}}/>
                    <Stack direction="row" spacing={1} mt={1} sx={{flexWrap:"wrap"}}>
                      {  filtros.marca !="" ?  
                        <Chip color="primary" label={`${filtros.marca}`} onDelete={handleDeleteFiltroMarca} />: <></>}
                      {
                        JSON.stringify(filtros.precio) != JSON.stringify([0,0])?
                        <Chip color="primary" label={`${filtros.precio[0]} - ${filtros.precio[1]}`} onDelete={handleDeleteFiltroPrecio} />: <></>
                      }
                    </Stack>
                    
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
                              }}
                              onClick={()=>filtrarPorMarca(m)}
                              >{m}</ListItemButton>
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
