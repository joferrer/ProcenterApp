import { Grid, TextField, Typography } from "@mui/material"

export const TextInput =({label, value, onInputChange,error, type ="text",multilinea = false})=>{
 
    return <Grid sx={{mt: "10px"}} >
        <Typography>{label}</Typography>
        <TextField
            type={type}
            value={value} 
            onChange={ onInputChange}
            variant="filled"
            error={!!error}
            helperText={!!error ? "El valor ingresado es invalido" : ""}
            multiline={multilinea}
            rows={multilinea ? 4 : 1}
            sx={{width: `${multilinea ? "320px": "inherit"}`}}
            />
            

    </Grid>
}