import { EmpleadosLayout } from "../layout/EmpleadosLayout";
import { Titulo } from "../../../ui/components/GeneralComponents/TituloPagina";
import { RegistroDeVentaForm } from "../../../ui/components/RegistroDeVentasComponents/RegistroDeVentaForm";

export const RegistrarVenta = () => {
        
    return <EmpleadosLayout Admin={false}>

        <Titulo titulo={"Registro de venta"} />
        <RegistroDeVentaForm />

        
    </EmpleadosLayout>;
}
