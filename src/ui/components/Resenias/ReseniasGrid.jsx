import {useState, useMemo } from "react"
import { Card, CardActionArea, CardContent, Grid, Typography, } from "@mui/material"
import { Add } from "@material-ui/icons"
import FormDialog from "./FormDialog"

export const GridResenias = ({resenias_init}) => {
  const init = resenias_init
  const [resenias, setresenias] = useState(init)
    const [open, setopen] = useState(false)

  useMemo(() => setresenias(init), [resenias_init])

  
    const handleClick = ()=>{
        
        setopen(true)
    }
  const enviarResenia = (data = {})=>{
    alert(JSON.stringify(data))
    setopen(false)
  }
  return (
    <Grid sx={{mt:"100px", ml:"10px"}}>
      <Grid container >
            {
                open ? <FormDialog mostrar={open} recibirDatos={enviarResenia}/> : <></>
            }
            <Grid container  
              sx={{ width: "100%"}} 
              spacing={{ xs: 2, md: 3 }} 
              columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item >
                        <Card
                          sx={{ maxWidth: 250, backgroundColor:"black",color:"white" }} 
                          onClick={()=>handleClick()}>
                         <CardActionArea>
                            <CardContent >
                                <Add/>         
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    </Grid>
                {     
                    resenias.map(v => <Grid item key={JSON.stringify(v)}>
                        <Card key={v.texto}  
                          sx={{ maxWidth: 250, backgroundColor:"#F2F2F2" }} 
                         >
                         <CardActionArea>
                            <CardContent >
                                <Typography gutterBottom 
                                  variant="h5" 
                                  fontSize={"17px"} 
                                  component="div">
                                    {v?.nombre}
                                </Typography>
                                <Typography variant="body2" 
                                  color="text.secondary" 
                                  > {v?.texto}
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
