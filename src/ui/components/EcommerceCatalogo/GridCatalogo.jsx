import { Card, CardActionArea, CardContent, CardMedia, Grid, Pagination, Stack, Typography, } from "@mui/material"
import { useEffect } from "react"
import { useMemo } from "react"
import { useState } from "react"


export const GridCatalogo = ({vehiculos}) => {
  const init = vehiculos.slice(0,12)
  const [catalogo, setcatalogo] = useState(init)
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  useMemo(() => setcatalogo(init), [vehiculos])

  useEffect(() => {
    console.log(page)
    const catalogPaginado = vehiculos.slice((page*12-12),page*12)
    setcatalogo(catalogPaginado)
  }, [page])
  

  const handleClick = ()=>{
    alert("Ops, aun no esta hecho esto :/")
  }
  return (
    <Grid sx={{mt:"100px", ml:"10px"}}>
      <Grid container >
        {
          <Stack spacing={2} alignContent={'flex-end'} justifyContent={'flex-end'}>
            <Pagination count={Math.ceil(vehiculos.length /12)} shape="rounded" page={page} onChange={handleChange}/>
          </Stack>
        }
            <Grid container  
              sx={{ width: "100%"}} 
              spacing={{ xs: 2, md: 3 }} 
              columns={{ xs: 4, sm: 8, md: 12 }}>
                {     
                    catalogo.map(v => <Grid item key={JSON.stringify(v)}>
                        <Card key={v.id}  
                          sx={{ maxWidth: 250, height:280, backgroundColor:"#F2F2F2" }} 
                          onClick={()=>handleClick(v.id)}>
                         <CardActionArea>
                        <CardMedia image={v.imagenes[0]} title={v.nombre}   sx={{ height: 150 , width: 250}} />
                        <CardContent >
                            <Typography gutterBottom 
                              variant="h5" 
                              fontSize={"17px"} 
                              component="div">
                                {v?.nombre}
                            </Typography>
                            <Typography variant="body2" 
                              color="text.secondary" 
                              sx={{fontWeight:"bold"}}
                              >COP {v?.precio.toLocaleString()}$
                            </Typography>
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
