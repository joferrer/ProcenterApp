import { Button, Grid } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { TextInput } from "./TextInput";
import { PhoneMui } from "./PhoneMui";
import { useDispatch, useSelector } from "react-redux";
import { VehiculosDispatch } from "../../../store/vehiculos/VehiculosDispatch";
import { UsuariosDispatch } from "../../../store/usuario/UsuariosDispatch";
import { AutocompleteInput } from "./AutocompleteInput";
import { useEffect, useMemo } from "react";
import { SeleccionarVehiculo } from "./SeleccionarVehiculo";

export const RegistroDeVentaForm = ()=>{

    const {control,handleSubmit, reset ,watch,getValues} = useForm();
    const {vehiculos,isLoading, error } = VehiculosDispatch()
    const {usuarios, clientes, isLoadingUsuarios, errorUsuarios, getUsuarioPorCedula} = UsuariosDispatch()
   
    //console.log(getUsuarioPorCedula(clientes,watch().cedula))
    const cedula = watch()?.cedula;

  useEffect(() => {
    if (cedula) {
      const usuarioPorCedula = getUsuarioPorCedula(clientes, cedula);
      if (usuarioPorCedula) {
        reset({ ...watch(), ...usuarioPorCedula });
      }
    }
  }, [cedula]);
    const onSubmit = (data)=>{
        alert(JSON.stringify(data))
    }
    return <form  onSubmit={handleSubmit(onSubmit)}>
    <Grid 
        container 
        display={"flex"} flexDirection={"row"} wrap="wrap" 
        sx={{mt:"50px", ml:"40px", 
            width:"100%",   
            "@media (max-width:600px)": {
                ml:"10px",
            },
            justifyContent:"space-between"}}>
        
        <Grid>
            <Controller        
                 name={"cedula"}
                 control={control}
                 rules={{required: true, min: 0}}
                 defaultValue=""
                 render={({field,fieldState,formState})=>
                    <AutocompleteInput 
                        valor={field.value}
                        label={"CC"}
                        type={"number"}
                        cambio= {field.onChange}
                        error={formState.errors.cedula}
                        opciones = { clientes.map(u => ({"valor": `${u.cedula}`, "texto": `${u.cedula}-${u?.nombre}`}) ) }
                    />
                }
             />    
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
                    <SeleccionarVehiculo 
                        label={"VEHICULO"}
                        vehiculos={vehiculos}
                        textoBoton={field.value != "" ? field.value : "Seleccione un vehiculo..." }
                        onFormChange={field.onChange}
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
