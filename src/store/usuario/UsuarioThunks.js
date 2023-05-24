import { consultarApi } from "../api/conexion"
import { loadusuarios, registrarError, setUsuarios } from "./UsuarioSlice"

 
const GET_USUARIOS = "rusuario"

export const startCargarUsuarios = ()=> {
    return async (dispatch)=>{
        try {
            dispatch(loadusuarios())
            const usuarios = await consultarApi(GET_USUARIOS)
            dispatch(setUsuarios({usuarios}))
        } catch (error) {
            dispatch(registrarError({error}))
        }
    }
}