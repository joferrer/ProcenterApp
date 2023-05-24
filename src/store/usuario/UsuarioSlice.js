import { createSlice } from '@reduxjs/toolkit';
export const usuariosSlice = createSlice({
    name: 'usuarios',
    initialState: {
        usuarios: [],
        isLoading: false,
        error: ""
    },
    reducers: {
        setUsuarios: (state, {payload} ) => {
            state.usuarios = payload.usuarios;
        },
        registrarError: (state, {payload})=>{
            state.error = payload.error;
            state.isLoading = false;
        },

        loadusuarios: (state)=>{
            state.isLoading = true;
        }
    }
});
// Action creators are generated for each case reducer function
export const { setUsuarios,registrarError,loadusuarios } = usuariosSlice.actions;