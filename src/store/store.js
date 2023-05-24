import { configureStore } from "@reduxjs/toolkit";
import { VehiculosSlice } from "./vehiculos/VehiculosSlice";



export const store = configureStore({
    reducer: {
        vehiculos: VehiculosSlice.reducer,
    }
    
})
