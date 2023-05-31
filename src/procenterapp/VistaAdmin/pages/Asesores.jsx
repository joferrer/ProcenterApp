import { ProcenterAppLayout } from "./../layout/ProcenterAppLayout";
import CardList from "../../../ui/components/CardList";
import { CardContextProvider } from "../../../ui/context/CardContext";
import CardForm from "../../../ui/components/CardForm";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Titulo } from "../../../ui/components/GeneralComponents/TituloPagina";
import ListaPublicistas from "../../../ui/components/ListaPublicistas";

export const Asesores = ({ admin }) => {
  return (
    <ProcenterAppLayout Admin={admin}>
      <Box sx={{ width: "75vw" }}>
        <Titulo></Titulo>
        <CardContextProvider>
          <CardForm />
          <Typography variant="h4">Publicistas</Typography>
          <ListaPublicistas></ListaPublicistas>
          <Typography variant="h4">Asesores</Typography>
          <CardList />
        </CardContextProvider>
      </Box>
    </ProcenterAppLayout>
  );
};
