import { createSlice } from "@reduxjs/toolkit";
export const VentasSlice = createSlice({
  name: "Ventas",
  initialState: {
    isLoading: false,
    ventas: [],
    error: "",
  },
  reducers: {
    setVentas: (state, { payload }) => {
      state.ventas = payload.ventas;
      state.isLoading = false;
    },
    registrarError: (state, { payload }) => {
      state.error = payload.error;
      state.isLoading = false;
    },

    loadVentas: (state) => {
      state.isLoading = true;
    },
  },
});
// Action creators are generated for each case reducer function
export const { setVentas, registrarError, loadVentas } = VentasSlice.actions;
