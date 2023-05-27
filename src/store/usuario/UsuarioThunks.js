import { consultarApi } from "../api/conexion"
import { loadusuarios, registrarError, setUsuarios } from "./UsuarioSlice"

 
const GET_USUARIOS = "usuarios"

export const startCargarUsuarios = ()=> {
    return async (dispatch)=>{
        try {
            dispatch(loadusuarios())
            const usuarios = await consultarApi(GET_USUARIOS)
            if(!usuarios.estado) return dispatch(registrarError(usuarios.texto))
            dispatch(setUsuarios({usuarios: usuarios.data}))
        } catch (error) {
            dispatch(registrarError({error}))
        }
    }
}