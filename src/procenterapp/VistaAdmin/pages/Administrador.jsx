import React, { useState } from "react";
import { ProcenterAppLayout } from "../layout/ProcenterAppLayout";
import { Titulo } from "../../../ui/components/GeneralComponents/TituloPagina";
import { Grid } from "@mui/material";
import { CampoEditable } from "../../../ui/components/InformacionEmpresarialComponets/CampoEditable";
import { InformacionDispatch } from "../../../store/informacion/InformacionDispatch";
import { useMemo } from "react";
import { SnackbarComponent } from "../../../ui/components/FeedbackComponents/Snackbar";

export const Administrador = () => {
  const infoDispatch = InformacionDispatch()
  const [informacion, setinformacion] = useState(infoDispatch.informacion)
  const [notificacion, setnotificacion] = useState({mostrar:false,error: false ,msg: ""})
  const [editar, seteditar] = useState({
    mision: false,
    vision: false,
    quienesSomos: false,
    imagenes: false
  })

  useMemo(() => setinformacion(infoDispatch.informacion), [infoDispatch.informacion])
  const handledChange = ( propiedad, valor )=>{
    let nueva = {... informacion}
    nueva[propiedad] = valor
    setinformacion({...nueva})
  }

  const onClickEditar = (propiedad)=>{
    console.log(propiedad)
    let nueva = {... editar}
    nueva[propiedad] = !nueva[propiedad]
    seteditar({...nueva})
  } 

  const guardarCambios = async()=> {

    setnotificacion({mostrar:false,error: false ,msg: ""})
    const info = new Informacion(informacion)

    const {actualizarInformacion} = infoDispatch 
    const resp = await actualizarInformacion(info)

    if(!resp.ok) return setnotificacion({mostrar:true, error: true ,msg: `${resp.error || "Ha ocurrido un error! "}`})
    setnotificacion({mostrar:true, error: false, msg: "Información actualizada correctamente."})
  }
  
  return (
    <ProcenterAppLayout Admin={"admin"}>
      <SnackbarComponent mensaje={notificacion.msg} 
         mostrar={notificacion.mostrar}
         tipo={notificacion.error ? "error": "success"} />
      <Titulo titulo={"Administrar"} />
      <Grid container direction={"column"} justifyContent={"space-around"} height={"70vh"} width={"60vw"} >
        <CampoEditable 
          valor={informacion.mision || ""}
          propiedad={"mision"}
          editar={editar.mision}
          guardarCambios={guardarCambios}
          handledChange={handledChange}
          onClickEditar={onClickEditar}
        />
        <CampoEditable 
          valor={informacion.vision || ""}
          propiedad={"vision"}
          editar={editar.vision}
          guardarCambios={guardarCambios}
          handledChange={handledChange}
          onClickEditar={onClickEditar}
        />
        <CampoEditable valor={informacion.quienesSomos || ""} 
          propiedad={"quienesSomos"}
          editar={editar.quienesSomos} 
          guardarCambios={guardarCambios}
          handledChange={handledChange}
          onClickEditar={onClickEditar}
        />
        <Grid>
         
        </Grid>
      </Grid>      
    </ProcenterAppLayout>
  );
};

class Informacion {

  constructor({mision, vision, quienesSomos,imagenes}){
    this.mision = mision
    this.vision = vision
    this.quienesSomos = quienesSomos
    this.imagenes = imagenes
  }
  toString() {
    let result = "";
    for (const key in this) {
      if (this.hasOwnProperty(key)) {
        result += `${key}: ${this[key]}\n`;
      }
    }
    return result;
  }

}