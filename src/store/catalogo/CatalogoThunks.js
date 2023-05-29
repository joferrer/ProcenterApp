import { consultarApi } from "../api/conexion";
import { loadcatalogo, registrarError, setCatalogo } from "./CatalogoSlice";

const GET_CATALOGO = "catalogo";

export const startCargarCatalogo = () => {
  return async (dispatch) => {
    try {
      dispatch(loadcatalogo());
      const catalogo = await consultarApi(GET_CATALOGO);
      dispatch(setCatalogo({ catalogo: catalogo }));

      return {
        ok: true,
      };
    } catch (error) {
      dispatch(registrarError({ error }));
      return {
        ok: false,
        error,
      };
    }
  };
};
