import { createSlice } from "@reduxjs/toolkit";
export const adquisicionesSlice = createSlice({
  name: "adquisiciones",
  initialState: {
    adquisiciones: [],
    isLoading: false,
    error: "",
  },
  reducers: {
    setadquisiciones: (state, { payload }) => {
      state.adquisiciones = payload.adquisiciones;
    },
    registrarError: (state, { payload }) => {
      state.error = payload.error;
      state.isLoading = false;
    },

    loadadquisiciones: (state) => {
      state.isLoading = true;
    },
  },
});
// Action creators are generated for each case reducer function
export const { setadquisiciones, registrarError, loadadquisiciones } =
  adquisicionesSlice.actions;
