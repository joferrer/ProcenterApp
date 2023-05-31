import { EmpleadosLayout } from "./../layout/EmpleadosLayout";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { SaleContextProvider } from "../../../ui/context/SaleContext";
import SaleForm from "../../../ui/components/Sale/SaleForm";

export const AsesoresEmpleado = ({admin}) => {
  return (
    <EmpleadosLayout Admin={admin}>
      <Box sx={{ width: "75vw" }}>
        <Typography variant="h4">Registro de Venta</Typography>
        <SaleContextProvider>
          <SaleForm />
        </SaleContextProvider>
      </Box>
    </EmpleadosLayout>
  );
};
