import { createSlice } from '@reduxjs/toolkit';

//TODO: HABILITAR LA AUTENTIFICACIÓN DE ADMINISTRADOR. 
export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking', //checking ,authenticated ,no-authenticated
        uid: null,
        email: null,
        id: null,
        displayName: null,
        photoURL: null,
        rol: null,
        errorMessage: null,
       
    },
    reducers: {
        login: (state,{ payload })=>{

            state.status= 'authenticated'; 
            state.uid   = payload.uid;
            state.email = payload.email;
            state.displayName   = payload.displayName;
            state.photoURL      = payload.photoURL;
            state.rol     = payload.rol;
            state.id = payload.id;
            state.errorMessage  = null;
            
        },
        logout: (state,{payload})=>{
            state.status= 'no-authenticated'; 
            state.uid= null;
            state.email= null;
            state.displayName= null;
            state.photoURL= null;
            state.errorMessage= payload?.errorMessage;
            state.rol = null;
            state.id = null;
        },
        checkingCredentials: (state,action)=>{
            state.status = 'checking'
        },
    }
});
// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;