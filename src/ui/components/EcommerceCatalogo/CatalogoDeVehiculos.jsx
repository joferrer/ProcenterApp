import { Grid, Typography } from "@mui/material"
import { BarraDeFiltros } from "./BarraDeFiltros"
import { GridCatalogo } from "./GridCatalogo"
import { CatalogoDispatch } from "../../../store/catalogo/CatalogoDispatch"
import { useState } from "react"
import { useEffect } from "react"
import { useMemo } from "react"

const helperFiltos = ()=>{
  const {catalogo}= CatalogoDispatch()
  const mayorPrecio = ()=>{
    if(catalogo.length != 0){
      const v = catalogo.map(c => c.precio )
      return Math.max(...v)
    }
    return 580000000;
  }

  const estaDentroDelRangoDePrecio = (precioVehiculo=0,precioBot=0, precioUp=0)=>{
    return (precioBot <= precioVehiculo) && 
          (precioVehiculo <= precioUp )
  }

  return{
    precioTop: mayorPrecio(),
    catalogo,
    estaDentroDelRangoDePrecio,
  }
}

export const CatalogoDeVehiculos = () => {

  const {catalogo, estaDentroDelRangoDePrecio} = helperFiltos() 
  const [catalogofiltrado, setcatalogofiltrado] = useState(catalogo)
  const [filtros, setfiltros] = useState({precio: [0,0], marca: ""})

  useMemo(() => setcatalogofiltrado(catalogo), [catalogo])

  const marcas = ()=>{
    const m = catalogo.map(v => v.marca.toUpperCase())
    return [...new Set(m)]
  }

  useEffect(() => {

    const aplicarFiltroDePrecio = JSON.stringify(filtros.precio) != JSON.stringify([0,0])
    const aplicarFiltroDeMarca  = filtros.marca != ""
  
    if(aplicarFiltroDeMarca || aplicarFiltroDePrecio){
      const aplicandoFiltros = catalogo.filter(v => 
        (aplicarFiltroDePrecio? estaDentroDelRangoDePrecio(v.precio,filtros.precio[0],filtros.precio[1]):true )
        &&
        (aplicarFiltroDeMarca ? v.marca == filtros.marca  : true)
      )
      setcatalogofiltrado(aplicandoFiltros)
    }
   else setcatalogofiltrado(catalogo)
    
  }, [filtros])
  

  return (
    <Grid container flexWrap={"nowrap"}>
        <BarraDeFiltros marcas={ marcas()} filtros={filtros} setfiltros={setfiltros} />
        <GridCatalogo vehiculos={catalogofiltrado}/>
    </Grid>
  )
}
