import { useDispatch, useSelector } from "react-redux"
import { startCargarUsuarios } from "./UsuarioThunks"
import { useEffect } from "react"


export const UsuariosDispatch = () => {
    
    const dispatch = useDispatch()
    const {usuarios, isLoading, error} = useSelector(state => state.usuarios)
    console.log(JSON.stringify(usuarios))

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
        isLoadingUsuarios: isLoading,
        errorUsuarios: error 
  }
}
