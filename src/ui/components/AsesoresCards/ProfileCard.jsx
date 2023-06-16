import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { CardContext } from "../../context/CardContext";
import { useContext } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import localizedFormat from "dayjs/plugin/localizedFormat";
import updateLocale from "dayjs/plugin/updateLocale";

import { Box, Grid, Modal } from "@mui/material";
import asesor from "../../../../public/Images/asesore.png";
import { useState } from "react";
import ModalEdita from "./ModalEdita";
import { useDispatch } from "react-redux";
import { SnackbarComponent } from "../FeedbackComponents/Snackbar";
import { startEliminar } from "../../../store/usuario/UsuarioThunks";

function ProfileCard({ card }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { deleteCard } = useContext(CardContext);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [mensaje, setMensaje] = useState("");
  const [oopen, setOopen] = useState(false);
  const [tipo, setTipo] = useState("");

  const handleOpenElim = async (e) => {
    const resp = await dispatch(startEliminar(card.id));
    if (resp.ok) {
      window.location.reload();
    }
  };

  const handleClosed = () => {
    setOopen(false);
  };

  return (
    <Box>
      <Card
        sx={{
          maxWidth: "400px",
          "@media (max-width:599px)": { maxWidth: "100%" },
        }}
      >
        <CardMedia sx={{ height: "140px" }} image={asesor} title="profile" />
        <CardContent>
          <p>Cedula: {card.cedula}</p>
          <p>Nombre: {card.nombre}</p>
          <p>Correo: {card.correo}</p>
          <p>Teléfono: {card.telefono}</p>
          <p>
            Fecha de contratación:
            {card.fechaVincu}
          </p>
          <p>Vehículos vendidos: 0</p>
        </CardContent>
        <CardActions>
          {card.estado ? (
            <Grid container spacing={2}>
              <Grid item>
                <Button
                  variant="outlined"
                  onClick={handleOpenElim}
                  size="small"
                  sx={{
                    "&:hover": {
                      backgroundColor: "lightred",
                      color: "red",
                    },
                  }}
                >
                  Desvincular
                </Button>
              </Grid>
              <Grid item>
                <Button
                  sx={{
                    "&:hover": {
                      backgroundColor: "lightblue",
                      color: "blue",
                    },
                  }}
                  variant="outlined"
                  size="small"
                  onClick={handleOpen}
                >
                  Editar
                </Button>
              </Grid>
            </Grid>
          ) : (
            <></>
          )}
        </CardActions>
      </Card>

      {open ? (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{
            display: "flex",
            justifyContent: "center",
            overflowY: "auto",
            mt: 5,
            mb: 4,
            "@media (max-width:599px)": {
              mb: 0,
            },
          }}
        >
          <ModalEdita card={card} />
        </Modal>
      ) : (
        <></>
      )}
    </Box>
  );
}
export default ProfileCard;
