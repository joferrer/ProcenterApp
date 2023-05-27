import { ProcenterAppLayout } from "./../layout/ProcenterAppLayout";
import CardList from "../../../ui/components/CardList";
import { CardContextProvider } from "../../../ui/context/CardContext";
import CardForm from "../../../ui/components/CardForm";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export const Asesores = () => {
  return (
    <ProcenterAppLayout>
      <Box sx={{ width: "75vw" }}>
        <Typography variant="h4">Asesores Comerciales</Typography>
        <CardContextProvider>
          <CardForm />
          <CardList />
        </CardContextProvider>
      </Box>
    </ProcenterAppLayout>
  );
};
