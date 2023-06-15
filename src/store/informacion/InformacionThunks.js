import { consultarApi, postApi } from "../api/conexion";
import { informacionSlice, load, setInformacion } from "./InformacionSlice";

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
        const informacion = await postApi(LINKS_API_INFO.PUT_INFO_LINK, data);
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