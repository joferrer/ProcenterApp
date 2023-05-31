import { EmpleadosLayout } from "../layout/EmpleadosLayout";
import { Titulo } from "../../../ui/components/GeneralComponents/TituloPagina";
import { RegistroDeVentaForm } from "../../../ui/components/RegistroDeVentasComponents/RegistroDeVentaForm";

export const RegistrarVenta = ({admin}) => {
        
    return <EmpleadosLayout Admin={admin}>

        <Titulo titulo={"Registro de venta"} />
        <RegistroDeVentaForm />

        
    </EmpleadosLayout>;
}
