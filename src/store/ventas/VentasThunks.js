import { loadVentas, registrarError, setVentas } from "./VentasSlice";
import { consultarApi } from "../api/conexion";

export const startCargarVentas = () => {
  return async (dispatch) => {
    try {
      dispatch(loadVentas());
      const ventas = await consultarApi("rventa");
      if (!ventas.estado)
        return dispatch(registrarError({ error: ventas.texto }));
      dispatch(setVentas({ ventas: ventas.data }));

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
