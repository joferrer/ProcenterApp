import { createSlice } from '@reduxjs/toolkit';
export const informacionSlice = createSlice({
    name: 'informacion',
    initialState: {
        informacion: {
            quienesSomos: "",
            vision: "",
            mision: "",
            imagenes: []
        },
        isLoading: false,
        error: "",
        
    },
    reducers: {
        setInformacion: (state, {payload}) => {
            state.informacion = payload.informacion
            state.isLoading = false,
            state.error = ""
        },
        registrarError: (state, { payload }) => {
            state.error = payload.error;
            state.isLoading = false;
          },
      
          load: (state) => {
            state.isLoading = true;
          },
    }
});
// Action creators are generated for each case reducer function
export const { setInformacion,registrarError,load } = informacionSlice.actions;