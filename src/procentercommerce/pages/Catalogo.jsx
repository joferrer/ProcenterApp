import {CatalogoDeVehiculos } from "../../ui/components/EcommerceCatalogo/CatalogoDeVehiculos"
import { Contactanos } from "../../ui/components/EcommerceCatalogo/Contactanos"
import ProcenterCommerceLayout from "../layout/ProcenterCommerceLayout"

export const Catalogo = () => {
  return (
    <ProcenterCommerceLayout>
        <Contactanos />
        <CatalogoDeVehiculos />
    </ProcenterCommerceLayout>
  )
}
