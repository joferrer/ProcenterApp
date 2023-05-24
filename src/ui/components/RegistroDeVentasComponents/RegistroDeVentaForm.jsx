import { Button, Grid } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { TextInput } from "./TextInput";
import { PhoneMui } from "./PhoneMui";
import { useDispatch, useSelector } from "react-redux";
import { VehiculosDispatch } from "../../../store/vehiculos/VehiculosDispatch";
import { UsuariosDispatch } from "../../../store/usuario/UsuariosDispatch";

export const RegistroDeVentaForm = ()=>{

    const {control,handleSubmit} = useForm();
    const { vehiculos,isLoading, error } = VehiculosDispatch()
    const {usuarios} = UsuariosDispatch()
    console.log(usuarios)
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
                 rules={{required: true, min: 0}}
                 defaultValue=""
                 render={({field,fieldState,formState})=>
                     <TextInput 
                         value={field.value} 
                         label={"CC"} 
                         type={"number"}
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
                     <PhoneMui 
                         phoneNumber={field.value} 
                         cambio={field.onChange}
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
                         multilinea= {true}
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
                 rules={{required: true, min: 0}}
                 defaultValue=""
                 render={({field,fieldState,formState})=>
                     <TextInput 
                         value={field.value} 
                         label={"EDAD"} 
                         type={"number"}
                         onInputChange={field.onChange}
                         error={formState.errors.edad}
                         />}
             />
             <Controller        
                 name={"precio"}
                 control={control}
                 rules={{required: true, min: 0}}
                 defaultValue=""
                 render={({field,fieldState,formState})=>
                     <TextInput 
                         value={field.value} 
                         type={"number"}
                         label={"PRECIO"} 
                         onInputChange={field.onChange}
                         error={formState.errors.precio}
                         />}
             />
             
            <Button  variant="contained" sx={{mt:"50px" ,float:"right"}} color="secondary" type="submit">Enviar</Button>
        </Grid>
        
    </Grid>
    </form>
    
}
