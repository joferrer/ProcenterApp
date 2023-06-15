import React from "react";
import { ProcenterAppLayout } from "../../VistaAdmin/layout/ProcenterAppLayout";
import { Titulo } from "../../../ui/components/GeneralComponents/TituloPagina";
import { Box } from "@mui/material";

const HistorialAsesor = ({ admin }) => {
  return (
    <ProcenterAppLayout Admin={admin}>
      <Titulo titulo={"Historial"} />
      <Box
        sx={{
          height: "100%",
          width: "73vw",
          "@media (max-width:799px)": {
            width: "65vw",
          },
          "@media (max-width:599px)": {
            width: "94vw",
          },
          mt: 5,
          mb: 4,
        }}
      ></Box>
    </ProcenterAppLayout>
  );
};

export default HistorialAsesor;
