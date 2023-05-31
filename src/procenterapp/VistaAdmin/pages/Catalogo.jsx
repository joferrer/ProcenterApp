import React, { useState } from "react";
import { ProcenterAppLayout } from "./../layout/ProcenterAppLayout";
import TablaCatologo from "../../../ui/components/GeneralComponents/TablaCatalogo";
import { Titulo } from "./../../../ui/components/GeneralComponents/TituloPagina";
import { Box } from "@mui/material";

export const Catalogo = ({ admin }) => {
  return (
    <ProcenterAppLayout Admin={admin}>
      <Titulo titulo={"Catalogo"} />
      <Box
        sx={{
          width: "73vw",
          "@media (max-width:799px)": {
            width: "100%",
          },
          "@media (max-width:599px)": {
            width: "94vw",
          },
          mt: 5,
          mb: 4,
        }}
      >
        <TablaCatologo />
      </Box>
    </ProcenterAppLayout>
  );
};
