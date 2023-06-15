import dayjs from 'dayjs';
import { Button, Checkbox, Grid, TextField, Typography } from "@mui/material"
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextInput } from "../RegistroDeVentasComponents/TextInput"
import { Controller, useForm } from "react-hook-form";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { PhoneMui } from '../RegistroDeVentasComponents/PhoneMui';
import { Adquisicion } from './AdquisicionesModelo';
import { authDispatch } from '../../../store/auth/authDispatch';
import { useDispatch } from 'react-redux';
import { startRegistrarAdquisicion } from '../../../store/catalogo/CatalogoThunks';
import { useState } from 'react';
import { SnackbarComponent } from '../FeedbackComponents/Snackbar';
import { useEffect } from 'react';


const isDateValid = (value) => {
    // Verificar que tanto el día como el mes no sean nulos
    return value && dayjs(value).isValid();
  };

export const RegistrarAdquisicionForm = () => {

    const [notificacion, setnotificacion] = useState({mostrar:false,error: false ,msg: ""})
    console.log(notificacion)
    const dispatch = useDispatch()
    const {id} = authDispatch()
    const {control,handleSubmit, reset ,watch,getValues} = useForm();
    
    const onSubmit = async (data)=>{
       
        setnotificacion({mostrar:false,error: false ,msg: ""})
        const fechaMatriculaFormato = dayjs(data.fechaMatricula).format('DD/MM/YYYY')
        const adquicision = new Adquisicion({...data,fechaMatricula: fechaMatriculaFormato, idpublic: id })
        alert(JSON.stringify(adquicision,null,2))

        const resp = await dispatch(startRegistrarAdquisicion(adquicision))
        console.log(JSON.stringify(resp))
        if(!resp.ok) return setnotificacion({mostrar:true, error: true ,msg: `${resp.error || "Ha ocurrido un error! "}`})
        setnotificacion({mostrar:true, error: false, msg: "La aquisición ha sido registrada exitosamente."})
        reset()
        
    }
   
    return (
    <Grid container>
         <SnackbarComponent mensaje={notificacion.msg} 
         mostrar={notificacion.mostrar}
         tipo={notificacion.error ? "error": "success"} />
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container
                sx={{mt:"50px", 
                width:"100%",   
                "@media (max-width:600px)": {
                    ml:"10px",
                },
                
                flexWrap: "wrap"
            }}
            >
            <Grid sx={{mr:"10px"}}>  
                <Controller
                    name={"nombre"}
                    control={control}
                    rules={{required: true}}
                    defaultValue=""
                    render={({field,fieldState,formState})=>
                        <TextInput 
                            value={field.value} 
                            label={"Nombre del vehiculo"} 
                            onInputChange={field.onChange}
                            error={formState.errors.nombre}
                            />}
                />
            
            <Controller
                    name={"marca"}
                    control={control}
                    rules={{required: true}}
                    defaultValue=""
                    render={({field,fieldState,formState})=>
                        <TextInput 
                            value={field.value} 
                            label={"Marca"} 
                            onInputChange={field.onChange}
                            error={formState.errors.marca}
                            />}
            />
            <Controller
                    name={"modelo"}
                    control={control}
                    rules={{required: true}}
                    defaultValue=""
                    render={({field,fieldState,formState})=>
                        <TextInput 
                            value={field.value} 
                            label={"Modelo"} 
                            onInputChange={field.onChange}
                            error={formState.errors.modelo}
                            />}
            />
            <Controller
                    name={"color"}
                    control={control}
                    rules={{required: true}}
                    defaultValue=""
                    render={({field,fieldState,formState})=>
                        <TextInput 
                            value={field.value} 
                            label={"Color"} 
                            onInputChange={field.onChange}
                            error={formState.errors.color}
                            />}
            />
            <Controller
                    name={"motor"}
                    control={control}
                    rules={{required: true}}
                    defaultValue=""
                    render={({field,fieldState,formState})=>
                        <TextInput 
                            value={field.value} 
                            label={"Motor"} 
                            onInputChange={field.onChange}
                            error={!!formState.errors.motor}
                            />}
            />
            <Controller        
                     name={"soat"}
                     control={control}
                     defaultValue={false}
                     render={({field,fieldState,formState})=><Grid>
                        <Typography variant="span">SOAT</Typography>
                        <Checkbox 
                            {...field}
                            checked={field.value}
                            onChange={(e) => field.onChange(e.target.checked)}
                            
                        />
                     </Grid>
                        
                    }
                 />
            <Controller        
                     name={"impuestos"}
                     control={control}
                     defaultValue={false}
                     render={({field,fieldState,formState})=><>
                        <Typography variant="span">Impuestos al día</Typography>
                        <Checkbox 
                            {...field}
                            checked={field.value}
                            onChange={(e) => field.onChange(e.target.checked)}
                            
                        />
                     </>
                        
                    }
                 />
            </Grid>
            <Grid sx={{
            "@media (max-width:800px)": {
                order:0,
            },
            mr:"10px",
            }}>
                <Controller
                    name={"placa"}
                    control={control}
                    rules={{required: true}}
                    defaultValue=""
                    render={({field,fieldState,formState})=>
                        <TextInput 
                            value={field.value} 
                            label={"Placa"} 
                            onInputChange={field.onChange}
                            error={!!formState.errors.placa}
                            />}
                />
                <Controller        
                     name={"anio"}
                     control={control}
                     rules={{required: true, min: 0,max:2024}}
                     defaultValue=""
                     render={({field,fieldState,formState})=>
                         <TextInput 
                             value={field.value} 
                             type={"number"}
                             label={"Año"} 
                             onInputChange={field.onChange}
                             error={formState.errors.anio}
                             />}
                 />
                <Controller        
                     name={"precioDueno"}
                     control={control}
                     rules={{required: true, min: 0}}
                     defaultValue=""
                     render={({field,fieldState,formState})=>
                         <TextInput 
                             value={field.value} 
                             type={"number"}
                             label={"Precio del dueño"} 
                             onInputChange={field.onChange}
                             error={formState.errors.precioDueno}
                             />}
                 />
                 <Controller        
                     name={"fechaMatricula"}
                     control={control}
                     rules={{required: true, validate: {
                        notNull: v => isDateValid(v)
                     }}}
                     defaultValue=""
                     render={({field,fieldState,formState})=>
                         <LocalizationProvider dateAdapter={AdapterDayjs}> 
                        <Typography>Fecha de la matricula</Typography>
                         <DatePicker
                            {...field}
                            value={field.value}
                            format='DD/MM/YYYY'
                            onChange={(newValue) => field.onChange(newValue)}
                            slotProps={{textField:{  variant: "filled", error: !!formState.errors.fechaMatricula, helperText: !!formState.errors.fechaMatricula ? "La fecha ingresada no es valida":"" }}}
                            
                        />
                     </LocalizationProvider>
                    }
                 />
                        
                 <Controller        
                     name={"cedula"}
                     control={control}
                     rules={{required: true, min: 0}}
                     defaultValue=""
                     render={({field,fieldState,formState})=>
                         <TextInput 
                             value={field.value} 
                             type={"number"}
                             label={"CC del dueño"} 
                             onInputChange={field.onChange}
                             error={formState.errors.cedula}
                             />}
                 />
                 <Controller        
                     name={"nombredueno"}
                     control={control}
                     rules={{required: true, }}
                     defaultValue=""
                     render={({field,fieldState,formState})=>
                         <TextInput 
                             value={field.value} 
                             type={"text"}
                             label={"Nombre del propetario"} 
                             onInputChange={field.onChange}
                             error={formState.errors.nombrePropetario}
                             />}
                 />
                
                 
            </Grid>
            <Grid sx={{"@media (max-width:1064px)": {
                width: "100%",
            }}}>
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
                     name={"prenda"}
                     control={control}
                     rules={{required: true, }}
                     defaultValue=""
                     render={({field,fieldState,formState})=>
                         <TextInput 
                             value={field.value} 
                             type={"text"}
                             label={"Prenda"} 
                             onInputChange={field.onChange}
                             error={formState.errors.prenda}
                             />}
                 />
                <Controller        
                    name={"correo"}
                    control={control}
                    rules={{required: true}}
                    defaultValue=""
                    render={({field,fieldState,formState})=>
                     <TextInput 
                        type="email"
                         value={field.value} 
                         label={"Correo"} 
                         onInputChange={field.onChange}
                         error={formState.errors.correo}
                         />}
                />
                <Controller        
                     name={"detalles"}
                     control={control}
                     rules={{required: true,}}
                     defaultValue=""
                     render={({field,fieldState,formState})=>
                         <TextInput 
                             value={field.value} 
                             type={"text"}
                             label={"Detalles"} 
                             onInputChange={field.onChange}
                             error={formState.errors.detalles}
                             multilinea={true}
                             
                             />}
                 />
                <Button  variant="contained" sx={{mt:"50px" ,float:"right"}} color="secondary" type="submit">Enviar</Button>
            </Grid>
            </Grid>
        </form>
    </Grid>
  )
}
