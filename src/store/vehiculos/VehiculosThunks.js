import { consultarApi } from "../api/conexion"
import { loadVehiculos, registrarError, setVehiculos } from "./VehiculosSlice"

const VEHICULOS = "rvehiculos"

export const startCargarVehiculos = ()=>{
    return async (dispatch) =>{
        try{
            dispatch(loadVehiculos())
            const vehiculos = await consultarApi(VEHICULOS)
            dispatch(setVehiculos({vehiculos}))
            
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