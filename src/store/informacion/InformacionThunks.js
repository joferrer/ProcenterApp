import { consultarApi, updateApi } from "../api/conexion";
import {  load, setInformacion } from "./InformacionSlice";

const LINKS_API_INFO = Object.freeze({
    GET_INFO_LINK : "info-empresa",
    PUT_INFO_LINK : "actualizar-info-empresa"
})


export const startCargarInformacionEmpresarial = ()=>{
    return async(dispatch) =>{
        try {
            dispatch(load());
            const informacion = await consultarApi(LINKS_API_INFO.GET_INFO_LINK);
            console.log(informacion)
            dispatch(setInformacion({ informacion: informacion.data }));
      
            return {
              ok: true,
            };
          } catch (error) {
            dispatch(registrarError({ error }));
            return {
              ok: false,
              error,
            };
          }
    }
}

export const startActualizarInformacion = (data)=>{
    return async(dispatch )=>{
    try {
        dispatch(load());
        console.log(data)
        const informacion = await updateApi(LINKS_API_INFO.PUT_INFO_LINK, data);
        console.log(informacion)
        if (informacion.error) {
            console.log("ñonga",informacion.data.mensaje)
            return {
              ok:false,
              error: informacion.data.mensaje
            }
          }
        dispatch(setInformacion({ informacion: informacion.data }));
  
        return {
          ok: true,
        };
      } catch (error) {
        
        return {
          ok: false,
          error,
        };
      }
}
}