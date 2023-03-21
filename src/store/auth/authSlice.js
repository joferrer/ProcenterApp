import { createSlice } from '@reduxjs/toolkit';

//TODO: HABILITAR LA AUTENTIFICACIÓN DE ADMINISTRADOR. 
export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking', //checking ,authenticated ,no-authenticated
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        poblacion: null,
        id_encuestado: null,
        errorMessage: null,
       
    },
    reducers: {
        login: (state,{ payload })=>{

            state.status= 'authenticated'; 
            state.uid   = payload.uid;
            state.email = payload.email;
            state.displayName   = payload.displayName;
            state.photoURL      = payload.photoURL;
            state.poblacion     = payload.poblacion;
            state.id_encuestado = payload.id_encuestado;
            state.errorMessage  = null;
            
        },
        logout: (state,{payload})=>{
            state.status= 'no-authenticated'; 
            state.uid= null;
            state.email= null;
            state.displayName= null;
            state.photoURL= null;
            state.errorMessage= payload?.errorMessage;
            state.poblacion = null;
            state.id_encuestado = null;
        },
        checkingCredentials: (state,action)=>{
            state.status = 'checking'
        },
    }
});
// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;