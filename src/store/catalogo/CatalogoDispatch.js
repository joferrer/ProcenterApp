import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { cargaCata, startCargarCatalogo } from "./CatalogoThunks";

export const CatalogoDispatch = () => {
  const dispatch = useDispatch();
  const { catalogo, isLoading, error } = useSelector((state) => state.catalogo);

  const cargarCatalogo = async () => {
    await dispatch(startCargarCatalogo());
  };

  useEffect(() => {
    if (catalogo.length == 0) {
      cargarCatalogo();
    }
  }, [catalogo]);
  return {
    catalogo,
    isLoading,
    error,
  };
};
