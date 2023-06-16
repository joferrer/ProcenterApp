import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { startCargarAdquisiciones, startDesactivarAdquisiciones } from "./adquisicionesThunks";

export const adquisicionesDispatch = () => {
  const dispatch = useDispatch();
  const { adquisiciones, isLoading, error } = useSelector((state) => state.adquisiciones);

  const cargaradquisiciones = async () => {
    await dispatch(startCargarAdquisiciones());
  };

  const desactivarAdquisicion = async(id) =>{
    return await dispatch(startDesactivarAdquisiciones(id))
  }

  useEffect(() => {
    if (adquisiciones.length == 0) {
      cargaradquisiciones();
    }
  }, [adquisiciones]);
  return {
    adquisiciones,
    isLoading,
    error,
    desactivarAdquisicion
  };
};