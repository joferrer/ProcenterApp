import { ProcenterAppLayout } from "./../layout/ProcenterAppLayout";
import CardList from "../../../ui/components/AsesoresCards/CardList";
import { CardContextProvider } from "../../../ui/context/CardContext";
import CardForm from "../../../ui/components/AsesoresCards/CardForm";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Titulo } from "../../../ui/components/GeneralComponents/TituloPagina";
import ListaPublicistas from "../../../ui/components/AsesoresCards/ListaPublicistas";
import Subtitulos from "./../../../ui/components/GeneralComponents/Subtitulos";

export const Asesores = ({ admin }) => {
  return (
    <ProcenterAppLayout Admin={admin}>
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
        }}
      >
        <Titulo titulo={"Empleados"} />
        <CardContextProvider>
          <CardForm />
          <Subtitulos subtitulo={"Publicista"} />
          <ListaPublicistas />
          <Subtitulos subtitulo={"Asesores"} />
          <CardList />
        </CardContextProvider>
      </Box>
    </ProcenterAppLayout>
  );
};
