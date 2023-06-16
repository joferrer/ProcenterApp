import { DataArraySharp } from "@mui/icons-material";
import { consultarApi } from "../api/conexion";
import { loadVehiculos, registrarError, setVehiculos } from "./VehiculosSlice";

const VEHICULOS = "vehiculos";
const VEHICULO = "vehiculo";

export const startCargarVehiculos = () => {
  return async (dispatch) => {
    try {
      dispatch(loadVehiculos());
      const vehiculos = await consultarApi(VEHICULOS);
      if (!vehiculos.estado)
        return dispatch(registrarError({ error: vehiculos.texto }));
      dispatch(setVehiculos({ vehiculos: vehiculos.data }));

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

export const startCargarVechiculoID = (id) => {
  return async (dispatch) => {
    try {
      const vehiculo = await consultarApi(VEHICULO + "/" + id);
      if (!vehiculo.estado)
        return dispatch(registrarError({ error: vehiculo.texto }));
      return {
        ok: true,
        data: vehiculo.data,
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
