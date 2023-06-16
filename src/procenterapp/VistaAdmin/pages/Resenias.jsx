import { Grid } from "@mui/material"
import { Titulo } from "../../../ui/components/GeneralComponents/TituloPagina"
import { ProcenterAppLayout } from "../layout/ProcenterAppLayout"
import { GridResenias } from "../../../ui/components/Resenias/ReseniasGrid"

const RESENIAS = [{nombre: "Jeison", texto: "Api es una ñonga"},{nombre: "Jeison", texto: "Api es una ñonga"},{nombre: "Jeison", texto: "Api es una ñonga"},{nombre: "Jeison", texto: "Api es una ñonga"}]

export const Resenias = ({admin}) => {

  return (
    <ProcenterAppLayout Admin={admin}>
        <Titulo titulo={"Reseñas"} />
        <Grid container flexWrap={"nowrap"}>
            <GridResenias resenias_init={RESENIAS} />
        </Grid>
    </ProcenterAppLayout>
  )
}
