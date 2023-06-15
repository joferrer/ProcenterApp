import React, { useState } from "react";
import { ProcenterAppLayout } from "../layout/ProcenterAppLayout";
import { Titulo } from "../../../ui/components/GeneralComponents/TituloPagina";
import { Grid } from "@mui/material";
import { CampoEditable } from "../../../ui/components/InformacionEmpresarialComponets/CampoEditable";
import { InformacionDispatch } from "../../../store/informacion/InformacionDispatch";
import { useMemo } from "react";

export const Administrador = () => {
  const infoDispatch = InformacionDispatch()
  const [informacion, setinformacion] = useState(infoDispatch.informacion)
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

  const guardarCambios =()=> {
    alert(JSON.stringify(informacion))
  }
  
  return (
    <ProcenterAppLayout Admin={"admin"}>
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
