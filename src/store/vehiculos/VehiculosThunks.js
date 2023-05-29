import { consultarApi } from "../api/conexion"
import { loadVehiculos, registrarError, setVehiculos } from "./VehiculosSlice"

const VEHICULOS = "vehiculos"

export const startCargarVehiculos = ()=>{
    return async (dispatch) =>{
        try{
            dispatch(loadVehiculos())
            const vehiculos = await consultarApi(VEHICULOS)
            if(!vehiculos.estado) return dispatch(registrarError({error: vehiculos.texto}))
            dispatch(setVehiculos({vehiculos:vehiculos.data}))
            
            return {
                ok: true
            }
        }
        catch(error){
            dispatch(registrarError({error}))
            return {
                ok:false,
                error
            }
        }
    }
}