import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { CardContext } from "../context/CardContext";
import { useState, useContext } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function CardForm() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [cedula, setCedula] = useState("");
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");
  const { createCard } = useContext(CardContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createCard({
      cedula,
      nombre,
      fecha,
    });
    setCedula("");
    setNombre("");
    setFecha("");
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Agregar asesor
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="">Cédula: </label>
              <input
                type="text"
                placeholder="Cédula del asesor"
                onChange={(e) => setCedula(e.target.value)}
                value={cedula}
                autoFocus
              />
            </div>
            <div>
              <label htmlFor="">Nombre: </label>
              <input
                type="text"
                placeholder="Nombre del asesor"
                onChange={(e) => setNombre(e.target.value)}
                value={nombre}
              />
            </div>
            <div>
              <label htmlFor="">Fecha: </label>
              <input
                type="date"
                placeholder="Ingrese la fecha"
                onChange={(e) => setFecha(e.target.value)}
                value={fecha}
              />
            </div>
            <button>Agregar</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
export default CardForm;