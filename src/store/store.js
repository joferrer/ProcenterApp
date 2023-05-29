import { configureStore } from "@reduxjs/toolkit";
import { VehiculosSlice } from "./vehiculos/VehiculosSlice";
import { usuariosSlice } from "./usuario/UsuarioSlice";
import { catalogoSlice } from "./catalogo/CatalogoSlice";


export const store = configureStore({
  reducer: {
    vehiculos: VehiculosSlice.reducer,
    usuarios: usuariosSlice.reducer,
    catalogo: catalogoSlice.reducer,
  },
});
