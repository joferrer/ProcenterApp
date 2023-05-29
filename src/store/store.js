import { configureStore } from "@reduxjs/toolkit";
import { VehiculosSlice } from "./vehiculos/VehiculosSlice";
import { usuariosSlice } from "./usuario/UsuarioSlice";
import { authSlice } from "./auth";



export const store = configureStore({
    reducer: {
        vehiculos: VehiculosSlice.reducer,
        usuarios: usuariosSlice.reducer,
        auth: authSlice.reducer,
    }
    
})
