import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./authSlice";
import { FireBaseAuth } from "../../firebase/config";
import { consultarApi } from "../api/conexion";

const USUARIOS_URL= "usuarios"

export const authDispatch = () => {
    const {status,rol,email,id,displayName,photoURL} = useSelector(state => state.auth);
    const dispatch = useDispatch();
  
    useEffect(() => {
      
        onAuthStateChanged(FireBaseAuth , async( user )=>{
        if(!user) return dispatch( logout() );
        const {uid, displayName, email, photoURL} = user;
        const usuarios = await consultarApi(USUARIOS_URL);
        if(!usuarios.estado){ 
            //TODO: Logout google
            await signOut(FireBaseAuth) 
            return dispatch(logout({errorMessage: usuarios.mensaje}))
        }
        const existe = usuarios.data.find(u => u.correo == email && u.estado && u.rol != "CLIENTE")
        if(!existe){
            await signOut()
            return dispatch(logout({errorMessage: 
                `El usuario con el email ${result.email} no se encuentra registrado o ya no está viculado con la empresa.` }))
        }
        dispatch(login({uid,displayName,email, photoURL, rol: existe.rol,
          id: existe.id}));
      } );
    
    }, [])
  
    return {status,rol,correo: email, id, nombre: displayName, photoURL}
  
}