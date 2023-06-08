import { Grid, Typography } from "@mui/material"
import { BarraDeFiltros } from "./BarraDeFiltros"
import { GridCatalogo } from "./GridCatalogo"
import { CatalogoDispatch } from "../../../store/catalogo/CatalogoDispatch"
import { useState } from "react"

const helperFiltos = ()=>{
  const {catalogo}= CatalogoDispatch()
  const mayorPrecio = ()=>{
    if(catalogo.length != 0){
      const v = catalogo.map(c => c.precio )
      return Math.max(...v)
    }
    return 580000000;
  }
  return{
    precioTop: mayorPrecio(),
    catalogo
  }
}

export const CatalogoDeVehiculos = () => {

  const {catalogo} = helperFiltos() 
  const [catalgofiltrado, setcatalgofiltrado] = useState(catalogo)
  const [filtros, setfiltros] = useState({precio: [0,0], marca: ""})

  const marcas = ()=>{
    const m = catalogo.map(v => v.marca.toUpperCase())
    return [...new Set(m)]
  }

  return (
    <Grid container flexWrap={"nowrap"}>
        <BarraDeFiltros marcas={ marcas()} filtros={filtros} setfiltros={setfiltros} />
        <GridCatalogo vehiculos={catalogo}/>
    </Grid>
  )
}
