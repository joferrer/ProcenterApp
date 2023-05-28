import dayjs from 'dayjs';
import { Button, Checkbox, Grid, TextField, Typography } from "@mui/material"
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextInput } from "../RegistroDeVentasComponents/TextInput"
import { Controller, useForm } from "react-hook-form";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const isDateValid = (value) => {
    // Verificar que tanto el día como el mes no sean nulos
    return value && dayjs(value).isValid();
  };

export const RegistrarAdquisicionForm = () => {
    const onSubmit = (data)=>{
        alert(JSON.stringify(data))
    }
    const {control,handleSubmit, reset ,watch,getValues} = useForm();
  
    return (
    <Grid container>
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
            </Grid>
            <Grid sx={{
            "@media (max-width:800px)": {
                order:0,
            },
            mr:"10px",
            }}>
                <Controller        
                     name={"precio"}
                     control={control}
                     rules={{required: true, min: 0}}
                     defaultValue=""
                     render={({field,fieldState,formState})=>
                         <TextInput 
                             value={field.value} 
                             type={"number"}
                             label={"Precio del dueño"} 
                             onInputChange={field.onChange}
                             error={formState.errors.precio}
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
                            onChange={(newValue) => field.onChange(newValue)}
                            slotProps={{textField:{  variant: "filled", error: !!formState.errors.fechaMatricula, helperText: !!formState.errors.fechaMatricula ? "La fecha ingresada no es valida":"" }}}
                            
                        />
                     </LocalizationProvider>
                    }
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
                     name={"cc"}
                     control={control}
                     rules={{required: true, min: 0}}
                     defaultValue=""
                     render={({field,fieldState,formState})=>
                         <TextInput 
                             value={field.value} 
                             type={"number"}
                             label={"CC del dueño"} 
                             onInputChange={field.onChange}
                             error={formState.errors.cc}
                             />}
                 />
                 <Controller        
                     name={"nombrePropetario"}
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
            </Grid>
            <Grid sx={{"@media (max-width:1064px)": {
                width: "100%",
            }}}>
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
