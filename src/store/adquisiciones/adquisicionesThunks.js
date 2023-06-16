import { consultarApi, postApi } from "../api/conexion";
import { loadadquisiciones, registrarError, setadquisiciones } from "./adquisicionesSilce";

const ADQUISICIONES_API = Object.freeze({
    GET_ADQUISICIONES : "adquisiciones",
    POST_ADQUISICIONES : "agregar-adquisicion",
    POST_DESACTIVAR_ADQUISICION : "desactivar-adquisicion/"
})

export const startCargarAdquisiciones = () => {
    return async (dispatch) => {
      try {
        dispatch(loadadquisiciones());
       
        const adquisiciones = await consultarApi(ADQUISICIONES_API.GET_ADQUISICIONES);
        
        if (adquisiciones.error) {
            console.log("mmm")
            const error = adquisiciones.data.mensaje || adquisiciones.data.error
            return dispatch(registrarError({error}))
          }
          dispatch(setadquisiciones({ adquisiciones: adquisiciones.data.filter(a => a.estado == true) }));
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
    };
  };

  export const startDesactivarAdquisiciones = (id) => {
    return async (dispatch) => {
      try {
        
        console.log("asasas")
        const adquisiciones = await postApi(ADQUISICIONES_API.POST_DESACTIVAR_ADQUISICION+id);
        
        if (adquisiciones.error) {
            console.log("mmm")
            const error = adquisiciones.data.mensaje || adquisiciones.data.error
            return {
                ok: false,
                error
            }
            
          }
          
          return {
            ok: true,
            msg: "Publicación registrada con exito."
          };
 
      } catch (error) {
        dispatch(registrarError({ error }));
        return {
          ok: false,
          error,
        };
      }
    };
  };