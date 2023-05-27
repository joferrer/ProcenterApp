
import { Autocomplete, Grid, TextField, Typography, createFilterOptions } from '@mui/material'
import React, { useMemo, useState } from 'react'


const filterOptions = createFilterOptions({
    matchFrom: "start",
    stringify: (option) => option.valor,
  });

/**
 * Input de autocompletado. 
 * @param {*} param0 Necesita un JSON con las opciones --> [{valor:/valor a filtrar /, texto. /valor a mostrar/}]
 * @returns 
 */
export const AutocompleteInput = ({
    opciones,
    cambio,
    valor,
    label,
    type,
    error,
}) => {
    const [valorfiltro, setvalorfiltro] = useState(valor)
    useMemo(() => setvalorfiltro(valor), [valor])

    return (
    <Grid sx={{mt: "10px"}}>
        <Typography>{label}</Typography>
        <Autocomplete 
            onChange={(event,newValue)=>{
                cambio(Number(newValue?.valor))
            }}
            options={opciones}
            getOptionLabel={(opcion) => opcion.texto}
            filterOptions={filterOptions}
            sx={{ width: "100%", "@media (max-width:500px)": {
                width:"80vw",
            }, }}
            renderInput={(params)=>
                <TextField 
                {...params}
                inputProps={{ ...params.inputProps, value: valorfiltro}}
                value={valorfiltro}
                sx={{ justifyContent: "center",alignContent:"center"}}
                error={!!error}
                variant='filled'
                type={type}
                onChange={(event)=>{
                    cambio(Number(event.target.value))
                }}
                helperText={!!error ? "El valor ingresado es invalido" : ""}
            />
            
            }
        />    
    </Grid>
    
  )
}
