import { createSlice } from "@reduxjs/toolkit";
export const catalogoSlice = createSlice({
  name: "Catalogo",
  initialState: {
    catalogo: [],
    isLoading: false,
    error: "",
  },
  reducers: {
    setCatalogo: (state, { payload }) => {
      state.catalogo = payload.catalogo;
    },
    registrarError: (state, { payload }) => {
      state.error = payload.error;
      state.isLoading = false;
    },

    loadcatalogo: (state) => {
      state.isLoading = true;
    },
  },
});
// Action creators are generated for each case reducer function
export const { setCatalogo, registrarError, loadcatalogo } =
  catalogoSlice.actions;
