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
import ImageUploader from "./imagen";
import { Box, Modal } from "@mui/material";

import { useState } from "react";
import ModalEdita from "./ModalEdita";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(localizedFormat);
dayjs.extend(updateLocale);

const timezoneLocation = "America/Bogota";
dayjs.tz.setDefault(timezoneLocation);

const fechaact = dayjs().tz(timezoneLocation).format("DD-MM-YYYY");

function ProfileCard({ card }) {
  const [open, setOpen] = useState(false);
  const [openElim, setOpenElim] = useState(false);
  const { deleteCard } = useContext(CardContext);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpenElim = () => setOpenElim(true);
  const handleCloseElim = () => setOpenElim(false);
  const [fechaElim, setFechaElim] = useState(fechaact);
  return (
    <Box>
      <Card sx={{ maxWidth: "400px" }}>
        <CardMedia sx={{ height: "140px" }} image={card.img} title="profile" />
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
          <Button
            variant="outlined"
            size="small"
            sx={{
              "&:hover": {
                backgroundColor: "lightred",
                color: "red",
              },
            }}
            onClick={handleOpenElim}
          >
            Eliminar
          </Button>
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
      {openElim ? (
        <Modal
          open={openElim}
          onClose={handleCloseElim}
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
        ></Modal>
      ) : (
        <></>
      )}
    </Box>
  );
}
export default ProfileCard;
