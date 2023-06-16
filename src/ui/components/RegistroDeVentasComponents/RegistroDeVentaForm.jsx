import { useEffect,useState } from "react";
import { Button, Grid } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { TextInput } from "./TextInput";
import { PhoneMui } from "./PhoneMui";
import { UsuariosDispatch } from "../../../store/usuario/UsuariosDispatch";
import { AutocompleteInput } from "./AutocompleteInput";
import { SeleccionarVehiculo } from "./SeleccionarVehiculo";
import { CatalogoDispatch } from "../../../store/catalogo/CatalogoDispatch";
import { authDispatch } from "../../../store/auth/authDispatch";
import { SnackbarComponent } from "../FeedbackComponents/Snackbar";
import { Cliente, Venta } from "./Modelos";
import { useDispatch } from "react-redux";
import { startRegistrarVenta } from "../../../store/catalogo/CatalogoThunks";
import { useLocation } from "react-router-dom";


export const RegistroDeVentaForm = ()=>{

    const {control,handleSubmit, reset ,watch,getValues} = useForm();
    const {catalogo,isLoading, error } = CatalogoDispatch()
    const [notificacion, setnotificacion] = useState({mostrar:false,error: false ,msg: ""})
    const {id}= authDispatch()
    const dispatch = useDispatch()

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const vehiculos = catalogo || []
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
    if(searchParams.get("id")){
        reset({...watch(), vehiculo: searchParams.get("id") })
    }
  }, [cedula]);

    const onSubmit = async (data)=>{
        setnotificacion({mostrar:false,error: false ,msg: ""})
        data = {...data,idasesor: id}
        console.log(JSON.stringify(data))
        const cliente = new Cliente(data.nombre,data.cedula,data.correo,data.telefono)
        const venta = new Venta({idvehiculo: data.vehiculo ,idasesor:id, cliente,descripcion: data.detalles, precio: data.precio})
        
        const confirmar = confirm(`Los datos de la venta son:\n ${venta.toString()}`)
        if(!confirmar) return;

        const resp = await dispatch(startRegistrarVenta(venta))
        console.log(JSON.stringify(resp))
        if(!resp.ok) return setnotificacion({mostrar:true, error: true ,msg: `${resp.error || "Ha ocurrido un error! "}`})
        setnotificacion({mostrar:true, error: false, msg: "La aquisición ha sido registrada exitosamente."})
        reset()

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
        <SnackbarComponent mensaje={notificacion.msg} 
         mostrar={notificacion.mostrar}
         tipo={notificacion.error ? "error": "success"} />
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
                 name={"correo"}
                 control={control}
                 rules={{required: true}}
                 defaultValue=""
                 render={({field,fieldState,formState})=>
                     <TextInput 
                        type="email"
                         value={field.value} 
                         label={"CORREO"} 
                         onInputChange={field.onChange}
                         error={formState.errors.correo}
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
                        error={formState.errors.vehiculo}
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
