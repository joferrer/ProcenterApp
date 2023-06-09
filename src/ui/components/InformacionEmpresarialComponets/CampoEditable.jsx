import { Clear, Edit, Save } from "@material-ui/icons"
import { Button, Grid, TextField } from "@mui/material"

export const CampoEditable = ({valor,
    propiedad,
    editar,
    guardarCambios=()=>{},
    handledChange=()=>{},
    onClickEditar= ()=>{}}) => {
  return (
    <Grid container width={"100%"} direction={"row"} wrap="wrap">
          <TextField variant="filled" 
            multiline rows={5}
            sx={{width:"85%"}}
            value={valor}
            disabled={!editar}
            onChange={(e)=> handledChange(propiedad, e.target.value)}/>
            <Grid container direction={"column"} width={"15%"} justifyContent={"flex-end"}>
              {
                editar ? 
                <Button onClick={guardarCambios}>
                  <Save />
                </Button> : <></> 
              }
              <Button onClick={()=> onClickEditar(propiedad)}>
                {
                  !editar ? <Edit/> : <Clear/>
                }
              </Button>
            </Grid>
        </Grid>
  )
}
