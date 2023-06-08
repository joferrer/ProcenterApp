import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography, } from "@mui/material"
import { useMemo } from "react"
import { useState } from "react"


export const GridCatalogo = ({vehiculos}) => {
  
  const [catalogo, setcatalogo] = useState(vehiculos)
  useMemo(() => setcatalogo(vehiculos), [vehiculos])

  const handleClick = ()=>{
    alert("Ops, aun no esta hecho esto :/")
  }
  return (
    <Grid sx={{mt:"100px", ml:"10px"}}>
      <Grid container >
               
                <Grid container  sx={{ width: "100%"}} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {   
            
                        catalogo.map(v => <Grid item key={JSON.stringify(v)}>
                            <Card key={v.id}  sx={{ maxWidth: 250, height:280, backgroundColor:"#F2F2F2" }} onClick={()=>handleClick(v.id)}>
                             <CardActionArea>
                            <CardMedia image={v.imagenes[0]} title={v.nombre}   sx={{ height: 150 , width: 250}} />
                            <CardContent >
                                <Typography gutterBottom variant="h5" fontSize={"17px"} component="div">{v?.nombre}</Typography>
                                <Typography variant="body2" color="text.secondary" sx={{fontWeight:"bold"}}>COP {v?.precio.toLocaleString()}$</Typography>
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
