import { Timestamp } from "firebase/firestore/lite";
import { consultarApi, deleteApi, postApi, updateApi } from "../api/conexion";
import { loadusuarios, registrarError, setUsuarios } from "./UsuarioSlice";
import dayjs from "dayjs";

const GET_USUARIOS = "usuarios";
const POST_USUARIOS = "crear-usuario";
const PUT_USUARIOS = "actualizar-usuario";
const DELETE_USUARIOS = "desactivar-usuario";

export const startCargarUsuarios = () => {
  return async (dispatch) => {
    try {
      const re = [];
      dispatch(loadusuarios());
      const usuarios = await consultarApi(GET_USUARIOS);
      if (!usuarios.estado)
        return dispatch(registrarError({ error: usuarios.texto }));
      const u = usuarios.data;
      u.forEach((element) => {
        const newRe = {
          id: element.id,
          ...element,
          fechaVincu: dayjs(
            new Date(element.fechaVincu._seconds * 1000)
          ).format("DD-MM-YYYY"),
        };
        re.push(newRe);
      });
      dispatch(setUsuarios({ usuarios: re }));
    } catch (error) {
      dispatch(registrarError({ error }));
    }
  };
};

export const startCrearUsuario = (data) => {
  return async (dispatch) => {
    try {
      const registrar = await postApi(POST_USUARIOS, data);
      if (registrar.error) {
        return {
          ok: false,
          error: registrar.data.error || registrar.data.mensaje,
        };
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

export const startActualizarInfo = (id, data) => {
  return async (dispatch) => {
    try {
      const registrar = await updateApi(PUT_USUARIOS + "/" + id, data);
      if (registrar.error) {
        return {
          ok: false,
          error: registrar.data.error || registrar.data.mensaje,
        };
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

export const startEliminar = (id) => {
  return async (dispatch) => {
    try {
      const registrar = await deleteApi(DELETE_USUARIOS + "/" + id);
      if (registrar.error) {
        return {
          ok: false,
          error: registrar.data.error || registrar.data.mensaje,
        };
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
