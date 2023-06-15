import { Timestamp } from "firebase/firestore/lite";
import { consultarApi } from "../api/conexion";
import { loadusuarios, registrarError, setUsuarios } from "./UsuarioSlice";
import dayjs from "dayjs";

const GET_USUARIOS = "usuarios";

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
