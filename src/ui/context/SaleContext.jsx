import { createContext, useState, useEffect } from "react";
import { sales as data } from "../data/sales";


export const SaleContext = createContext();

export function SaleContextProvider(props) {
  const [sales, setSales] = useState([]);

  function createSale(sale) {
    setSales([
      ...sales,
      {
        cedula: sale.cedula,
        nombre: sale.nombre,
        telefono: sale.telefono,
        correo: sale.correo,
        edad: sale.edad,
        ecivil: sale.ecivil,
        vehiculo: sale.vehiculo,
      },
    ]);
  }

  function deleteSale(saleId) {
    setSales(cards.filter((sale) => sale.cedula !== saleId));
  }

  useEffect(() => {
    setSales(data);
  }, []);

  return (
    <SaleContext.Provider
      value={{
        sales,
        deleteSale,
        createSale,
      }}
    >
      {props.children}
    </SaleContext.Provider>
  );
}
