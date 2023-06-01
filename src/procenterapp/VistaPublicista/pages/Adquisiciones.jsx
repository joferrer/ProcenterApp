import { Grid } from "@mui/material";
import { Titulo } from "../../../ui/components/GeneralComponents/TituloPagina";
import { ProcenterAppLayout } from "../../VistaAdmin/layout/ProcenterAppLayout";
import TablaAbquisiciones from './../../../ui/components/GeneralComponents/TablaAdquisiciones';

export const Adquisiciones = ({ admin }) => {
  return (
    <Grid>
      <ProcenterAppLayout Admin={admin}>
        <Titulo titulo={"Lista de adquisiciones"} />
        <TablaAbquisiciones />
      </ProcenterAppLayout>
    </Grid>
  );
};
