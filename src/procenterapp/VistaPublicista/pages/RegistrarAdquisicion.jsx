import { Titulo } from "../../../ui/components/GeneralComponents/TituloPagina"
import { RegistrarAdquisicionForm } from "../../../ui/components/RegistarAdquisicionComponents/RegistrarAdquisicionForm"
import { ProcenterAppLayout } from "../../VistaAdmin/layout/ProcenterAppLayout"

export const RegistrarAdquisicion = ({admin}) => {
    
  return (
    <ProcenterAppLayout Admin={admin}>
        <Titulo titulo={"Registrar vehiculo"}/>

        <RegistrarAdquisicionForm />

    </ProcenterAppLayout> 
  )
}
