import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startCargarVentas } from "./VentasThunks";

export const VentasDispatch = () => {
  const dispatch = useDispatch();
  const { ventas, isLoading, error } = useSelector((state) => state.ventas);

  const cargarVentas = async () => {
    await dispatch(startCargarVentas());
  };

  useEffect(() => {
    if (ventas.length == 0) {
      cargarVentas();
    }
  }, [ventas]);

  return {
    ventas,
    isLoading,
    error,
  };
};
