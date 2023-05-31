import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import { CatalogoDispatch } from "../../../store/catalogo/CatalogoDispatch"



export const GridCatalogo = () => {
  
  const {catalogo}= CatalogoDispatch()

  const handleClick = ()=>{
    alert("Ops, aun no esta hecho esto :/")
  }
  return (
    <Grid sx={{mt:"100px", ml:"10px"}}>
      <Grid container >
               
                <Grid container  sx={{ width: "100%",height: "70vh"}} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {   
            
                        catalogo.map(v => <Grid item key={JSON.stringify(v)}>
                            <Card key={v.id}  sx={{ maxWidth: 250, maxHeight:280, backgroundColor:"#F2F2F2" }} onClick={()=>handleClick(v.id)}>
                             <CardActionArea>
                            <CardMedia image={v.imagenes.url1} title={v.nombre}   sx={{ height: 150 , width: 250}} />
                            <CardContent >
                                <Typography gutterBottom variant="h5" component="div">{v?.nombre}</Typography>
                                <Typography variant="body2" color="text.secondary">{v?.modelo}</Typography>
                                <Typography variant="body2" color="text.secondary">{v?.anio} CON {v?.kilometraje} KMS</Typography>
                                <Typography variant="body2" color="text.secondary" sx={{fontWeight:"bold"}}>COP {v?.precio}$</Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                        </Grid>
                        )
                    }
                </Grid>
            </Grid>

    </Grid>
  )
}
