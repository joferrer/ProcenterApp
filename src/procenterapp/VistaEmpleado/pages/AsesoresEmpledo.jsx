import { EmpleadosLayout } from "./../layout/EmpleadosLayout";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { SaleContextProvider } from "../../../ui/context/SaleContext";
import SaleForm from "../../../ui/components/Sale/SaleForm";

export const AsesoresEmpleado = () => {
  return (
    <EmpleadosLayout Admin={false}>
      <Box sx={{ width: "75vw" }}>
        <Typography variant="h4">Registro de Venta</Typography>
        <SaleContextProvider>
          <SaleForm />
        </SaleContextProvider>
      </Box>
    </EmpleadosLayout>
  );
};
