import { Button, Grid, Slider, TextField, Typography } from '@mui/material'
import { useMemo } from 'react';
import { useState } from 'react';


function valuetext(value) {
    return `${value}a`;
  }
const ariaLabel = { 'aria-label': 'description' };

export const SliderMuiComponent = ({rango=[20,37], filtrar=()=>{}}) => {

    const [value, setValue] = useState(rango);
    useMemo(()=> setValue[rango],[rango])
    const onChange=(rango, pValor)=>{
      let nuevoRango = value
      nuevoRango[rango] = pValor
      setValue([...nuevoRango])
    }
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleFiltro = ()=>{
      filtrar(value)
    }

  return (
    <Grid container flexDirection={'row'} wrap='wrap' style={{paddingLeft: "18px"}}>
      <TextField variant='standard' 
        sx={{width:"100px",}} 
        defaultValue={0}
        type='number'
        onChange={(e)=>onChange(0,e.target.value)}
        inputProps={{style:{color:"white"}}} 
        FormHelperTextProps={{
          style: { color: 'white' } // Cambia el color del texto de ayuda aquí
        }}
        helperText={"Mínimo"}/>
      <Typography 
        sx={{display:"inline",ml:"5px",width:"10px", mr:"5px" , justifySelf:"center"}} 
        color={"white"}>-</Typography>
      <TextField 
        variant='standard' 
        type='number'
        defaultValue={0}
        sx={{width:"100px",}} 
        onChange={(e)=>onChange(1,e.target.value)}
        inputProps={{style:{color:"white"},  }}  
        FormHelperTextProps={{
          style: { color: 'white' } // Cambia el color del texto de ayuda aquí
        }}
        helperText={"Máximo"}/>
      <Button onClick={handleFiltro}>Filtrar</Button>
    </Grid>
    
  )
}
