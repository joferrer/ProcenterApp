
import { createSlice } from '@reduxjs/toolkit';
export const VehiculosSlice = createSlice({
    name: 'Vehiculos',
    initialState: {
        isLoading: false,
        vehiculos: [],
        error:""
    },
    reducers: {
        setVehiculos: (state, {payload}) => {
            state.vehiculos = payload.vehiculos;
            state.isLoading = false;
        },
        registrarError: (state, {payload})=>{
            state.error = payload.error;
            state.isLoading = false;
        },

        loadVehiculos: (state)=>{
            state.isLoading = true;
        }
    }
});
// Action creators are generated for each case reducer function
export const { setVehiculos, registrarError, loadVehiculos } = VehiculosSlice.actions;