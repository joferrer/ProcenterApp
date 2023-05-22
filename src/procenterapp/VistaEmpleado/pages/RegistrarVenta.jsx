import { Button, Grid, TextField, Typography } from "@mui/material";
import { EmpleadosLayout } from "../layout/EmpleadosLayout";
import { Controller, useForm } from "react-hook-form";

export const RegistrarVenta = () => {
        
    return <EmpleadosLayout Admin={false}>

        <Titulo/>
        <RegistroDeVentaForm />

        
    </EmpleadosLayout>;
}


const Titulo = ()=>{

    return <Grid sx={{ml:"30px"}}>
        <Typography fontSize={"20px"}>Registro de venta</Typography>
        <Typography fontSize={"24px"}>PROCENTER AUTOS</Typography>
    </Grid>
}

const RegistroDeVentaForm = ()=>{

    const {control,handleSubmit} = useForm();

    const onSubmit = (data)=>{
        alert(JSON.stringify(data))
    }
    return <form  onSubmit={handleSubmit(onSubmit)}>
    <Grid 
        container 
        display={"flex"} flexDirection={"row"} wrap="wrap" 
        sx={{mt:"50px", ml:"40px", width:"100%",justifyContent:"space-between"}}>
        
        <Grid>    
            <Controller
                name={"nombre"}
                control={control}
                rules={{required: true}}
                defaultValue=""
                render={({field,fieldState,formState})=>
                    <TextInput 
                        value={field.value} 
                        label={"NOMBRE"} 
                        onInputChange={field.onChange}
                        error={formState.errors.nombre}
                        />}
            />
            <Controller        
                 name={"cedula"}
                 control={control}
                 rules={{required: true}}
                 defaultValue=""
                 render={({field,fieldState,formState})=>
                     <TextInput 
                         value={field.value} 
                         label={"CC"} 
                         onInputChange={field.onChange}
                         error={formState.errors.cedula}
                         />}
             />
             <Controller        
                 name={"telefono"}
                 control={control}
                 rules={{required: true}}
                 defaultValue=""
                 render={({field,fieldState,formState})=>
                     <TextInput 
                         value={field.value} 
                         label={"TELEFONO"} 
                         onInputChange={field.onChange}
                         error={formState.errors.telefono}
                         />}
             />    
        
        </Grid>
        <Grid>
        <Controller        
                 name={"vehiculo"}
                 control={control}
                 rules={{required: true}}
                 defaultValue=""
                 render={({field,fieldState,formState})=>
                     <TextInput 
                         value={field.value} 
                         label={"VEHICULO"} 
                         onInputChange={field.onChange}
                         error={formState.errors.cedula}
                         />}
             />
             <Controller        
                 name={"edad"}
                 control={control}
                 rules={{required: true}}
                 defaultValue=""
                 render={({field,fieldState,formState})=>
                     <TextInput 
                         value={field.value} 
                         label={"EDAD"} 
                         onInputChange={field.onChange}
                         error={formState.errors.edad}
                         />}
             />
             <Controller        
                 name={"precio"}
                 control={control}
                 rules={{required: true}}
                 defaultValue=""
                 render={({field,fieldState,formState})=>
                     <TextInput 
                         value={field.value} 
                         label={"PRECIO"} 
                         onInputChange={field.onChange}
                         error={formState.errors.precio}
                         />}
             />
             <Controller        
                 name={"detalles"}
                 control={control}
                 rules={{required: true}}
                 defaultValue=""
                 render={({field,fieldState,formState})=>
                     <TextInput 
                         value={field.value} 
                         label={"DETALLES DE LA VENTA"} 
                         onInputChange={field.onChange}
                         error={formState.errors.detalles}
                         />}
             />
            <Button  variant="contained" sx={{mt:"50px" ,float:"right"}} color="secondary" type="submit">Enviar</Button>
        </Grid>
        
    </Grid>
    </form>
    
}

const TextInput =({label, value, onInputChange,error})=>{
 
    return <Grid sx={{mt: "10px"}} >
        <Typography>{label}</Typography>
        <TextField
            value={value} 
            onChange={ onInputChange}
            variant="filled"
            error={!!error}
            helperText={!!error ? "El valor ingresado es invalido" : ""}
            />
            

    </Grid>
}