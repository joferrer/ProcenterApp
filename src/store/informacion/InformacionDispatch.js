import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { startActualizarInformacion, startCargarInformacionEmpresarial } from "./InformacionThunks";

const initState = JSON.stringify( {
    quienesSomos: "",
    vision: "",
    mision: "",
    imagenes: []
},)

export const InformacionDispatch = () => {
  const dispatch = useDispatch();
  const { informacion, isLoading, error } = useSelector((state) => state.informacion);

  const cargarInformacionEmpresarial = async () => {
    await dispatch(startCargarInformacionEmpresarial());
  };
  const actualizarInformacion = async(informacion)=>{
    await dispatch(startActualizarInformacion(informacion))
  }

  useEffect(() => {
    if ( JSON.stringify(informacion) == initState) {
      cargarInformacionEmpresarial();
    }
  }, [informacion]);
  return {
    informacion,
    isLoading,
    error,
  };
};
