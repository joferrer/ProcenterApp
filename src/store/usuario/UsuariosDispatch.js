import { useDispatch, useSelector } from "react-redux"
import { startCargarUsuarios } from "./UsuarioThunks"
import { useEffect } from "react"

const filtrarUsuariosClientes = (usuarios= [])=>{
    return usuarios.filter(u => u.rol == "CLIENTE")
}
const getUsuarioPorCedula = (usuarios=[], pCedula = 0)=>{
    return usuarios.find(u => u.cedula == pCedula)
}
export const UsuariosDispatch = () => {
    const dispatch = useDispatch()
    const {usuarios, isLoading, error} = useSelector(state => state.usuarios)
    
    const cargarUsuarios = async()=>{
        await dispatch(startCargarUsuarios())
    }

    useEffect(() => {
        if(usuarios.length == 0 ) {
            cargarUsuarios()
        }  
    }, [usuarios])
    return {
        usuarios,
        clientes: filtrarUsuariosClientes(usuarios),
        isLoadingUsuarios: isLoading,
        errorUsuarios: error,
        getUsuarioPorCedula
  }
}
