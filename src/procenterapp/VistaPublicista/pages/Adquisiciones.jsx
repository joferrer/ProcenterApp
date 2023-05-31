import { Grid } from "@mui/material"
import { Titulo } from "../../../ui/components/GeneralComponents/TituloPagina"
import { ProcenterAppLayout } from "../../VistaAdmin/layout/ProcenterAppLayout"
import { TablaDeAdquisiciones } from "../../../ui/components/AdquisicionesComponents/TablaDeAdquisiciones"

export const Adquisiciones = ({admin}) => {
  return (
    <Grid>
         <ProcenterAppLayout Admin={admin}>
            <Titulo titulo={"Lista de adquisiciones"}/>
            <TablaDeAdquisiciones />
         </ProcenterAppLayout>
    </Grid>
  )
}
