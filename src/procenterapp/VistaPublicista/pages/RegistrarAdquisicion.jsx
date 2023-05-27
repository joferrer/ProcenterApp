import { Titulo } from "../../../ui/components/GeneralComponents/TituloPagina"
import { RegistrarAdquisicionForm } from "../../../ui/components/RegistarAdquisicion/RegistrarAdquisicionForm"
import { ProcenterAppLayout } from "../../VistaAdmin/layout/ProcenterAppLayout"

export const RegistrarAdquisicion = () => {
    
  return (
    <ProcenterAppLayout Admin={"publicista"}>
        <Titulo titulo={"Registra vehiculo"}/>

        <RegistrarAdquisicionForm />

    </ProcenterAppLayout> 
  )
}
