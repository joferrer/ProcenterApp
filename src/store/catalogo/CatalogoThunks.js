import { consultarApi, postApi } from "../api/conexion";
import { loadcatalogo, registrarError, setCatalogo } from "./CatalogoSlice";

const GET_CATALOGO = "catalogo";
const POST_VENTA = "crear-venta"
const POST_AQUISICION = "agregar-adquisicion"

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
export const startRegistrarVenta = (data) => {
  return async (dispatch) => {
    try {
      const registrar = await postApi(POST_VENTA,data);
      if (!registrar.error) {
        return {
          ok:false,
          error: registrar.data.mensaje
        }
      }
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

export const startRegistrarAdquisicion = (data)=>{
  return async (dispatch) => {
    const {nombre}= data
    console.log(nombre)
    try {
      const registrar = await postApi(POST_AQUISICION,data);
      if (!registrar.error) {
        console.log(registrar)
        return {
          ok:false,
          error: registrar.data.mensaje
        }
      }
      return {
        ok: true,
      };
    } catch (error) {
      console.log(error)
      return {
        ok: false,
        error,
      };
    }
  };
}
