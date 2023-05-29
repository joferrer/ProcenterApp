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
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function CardForm() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [rol, setRol] = useState("");
  const [cedula, setCedula] = useState("");
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [fecha, setFecha] = useState("");
  const { createCard } = useContext(CardContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createCard({
      rol,
      cedula,
      nombre,
      correo,
      telefono,
      fecha,
    });
    setRol("");
    setCedula("");
    setNombre("");
    setCorreo("");
    setTelefono("");
    setFecha("");
  };


  return (
    <div
      style={{
        width: "100%",
        "align-items": "center",
        "text-align": "center",
        "margin-top": "1em",
      }}
    >
      <Button variant="contained" onClick={handleOpen} sx={{ float: "right" }}>
        Agregar
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
              <label htmlFor="">Rol: </label>
              <label htmlFor="">
                <input
                  type="checkbox"
                  onChange={(e) => setRol("Publicista")}
                  value={rol}
                />
                Publicista
              </label>
              <label htmlFor="">
                <input
                  type="checkbox"
                  onChange={(e) => setRol("Asesor")}
                  value={rol}
                />
                Asesor
              </label>
            </div>
            <div>
              <label htmlFor="">Cédula: </label>
              <input
                type="text"
                placeholder="Ingresar cédula"
                onChange={(e) => setCedula(e.target.value)}
                value={cedula}
                required
              />
            </div>
            <div>
              <label htmlFor="">Nombre: </label>
              <input
                type="text"
                placeholder="Ingresar nombre"
                onChange={(e) => setNombre(e.target.value)}
                value={nombre}
                required
              />
            </div>
            <div>
              <label htmlFor="">Correo: </label>
              <input
                type="text"
                placeholder="Ingresar correo"
                onChange={(e) => setCorreo(e.target.value)}
                value={correo}
                required
              />
            </div>
            <div>
              <label htmlFor="">Teléfono: </label>
              <input
                type="text"
                placeholder="Ingresar teléfono"
                onChange={(e) => setTelefono(e.target.value)}
                value={telefono}
                required
              />
            </div>
            <div>
              <label htmlFor="">Fecha: </label>
              <input
                type="date"
                onChange={(e) => setFecha(e.target.value)}
                value={fecha}
                required
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
