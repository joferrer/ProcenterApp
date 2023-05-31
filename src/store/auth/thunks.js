
import { signOut } from "firebase/auth";
import { loginWithEmailPassword, logoutFireBase, recuperarContrasenia, registerUserWithEmailPassword, singInWithGoogle } from "../../firebase/provider";
import { consultarApi } from "../api/conexion";
import { checkingCredentials, logout, login } from "./"

const USUARIOS_URL= "usuarios"

export const checkingAuthentication = () =>{
    return async ( dispatch )=>{
        await dispatch( checkingCredentials() );
    }
}

//TODO: Verificar que el usario exista y esté activo. 
//TODO: Verificar el ROL. 
export const startGoogleSingIn = () =>{
    return async ( dispatch )=>{
        dispatch( checkingCredentials() );

        const result = await singInWithGoogle();
        if(!result.ok) return dispatch( logout(result.errorMessage) );
        const usuarios = await consultarApi(USUARIOS_URL);
        if(!usuarios.estado){ 
            //TODO: Logout google
            await signOut()
            return dispatch(logout({errorMessage: usuarios.mensaje}))
        }
        const existe = usuarios.data.find(u => u.correo == result.email && u.estado && u.rol != "CLIENTE")
        if(!existe){
            await signOut()
            return dispatch(logout({errorMessage: 
                `El usuario con el email ${result.email} no se encuentra registrado o ya no está viculado con la empresa.` }))
        }
        const datos = {
            ...result,
            rol: existe.rol,
            id: existe.id
        }
        return dispatch( login( datos ) );
    }
}

export const startCreatingUserWithEmailPassword = ({email, password, displayName})=>{
    return async (dispatch)=>{
        dispatch(checkingCredentials());

        const {ok,uid, photoURL, errorMessage} = await registerUserWithEmailPassword({email, password, displayName});

        if(!ok) return dispatch(logout({errorMessage}));

        dispatch(login({uid, displayName, email, photoURL}));
    }

}

export const startLoginWithEmailPassword = ({email, password})=>{
 
    return async(dispatch) =>{
        dispatch(checkingAuthentication());
        const usuarios = await consultarApi(USUARIOS_URL);
        if(!usuarios.estado){ 
            return dispatch(logout({errorMessage: usuarios.mensaje}))
        }
        const existe = usuarios.data.find(u => u.correo == email && u.estado && u.rol != "CLIENTE")
        if(!existe){
            return dispatch(logout({errorMessage: 
                `El usuario con el email ${result.email} no se encuentra registrado o ya no está viculado con la empresa.` }))
        }
       
        const {ok,uid,displayName, photoURL, errorMessage} = await loginWithEmailPassword({email, password});
        if(!ok) return dispatch(logout({errorMessage}));

        return dispatch(login({uid, displayName,email,photoURL,
            rol:existe.rol,
            id: existe.id
        }));
        
            //return dispatch(logout({errorMessage: 'Este correo no se encuentra registrado'}));
        
    }
}

export const startLogout = ()=>{
    return async(dispatch) =>{
        await logoutFireBase();
        dispatch(logout());
    }
}


export const startRecuperarContrasenia = (email)=>{
    return async(dispatch)=>{
        try {
            const resp = await recuperarContrasenia(email)
            if(!resp.ok ) return{
                ok:false,
                error: "No se pudo restablecer la contraseña, verifique el correo o intentelo de nuevo más tarde"
            }
            return resp
            
        } catch (error) {
            return {
                ok:false,
                error
            }
        }
    }
}