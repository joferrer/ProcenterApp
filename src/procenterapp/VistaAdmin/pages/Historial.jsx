import React from "react";
import { ProcenterAppLayout } from "../layout/ProcenterAppLayout";
import { Titulo } from "./../../../ui/components/GeneralComponents/TituloPagina";
import { Box } from "@mui/material";
import TablaHistorial from "../../../ui/components/GeneralComponents/TablaHistorial";

export const Historial = ({ admin }) => {
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
      >
        <TablaHistorial />
      </Box>
    </ProcenterAppLayout>
  );
};
