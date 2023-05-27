import * as React from "react";
import Box from "@mui/material/Box";
import { SaleContext } from "../../context/SaleContext";
import { useState, useContext } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Modal from "@mui/material/Modal";
import { cars } from "../../data/cars";
import { Margin } from "@mui/icons-material";
import { sales as data } from "../../data/sales";

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

function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={cars}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="Seleccione el vehículo" />
      )}
    />
  );
}



function SaleForm() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [cedula, setCedula] = useState("");
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [edad, setEdad] = useState("");
  const [ecivil, setEcivil] = useState("");
  const [vehiculo, setVehiculo] = useState("");
  const { createSale } = useContext(SaleContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createSale({
      cedula,
      nombre,
      telefono,
      correo,
      edad,
      ecivil,
      vehiculo,
    });
    setCedula("");
    setNombre("");
    setTelefono("");
    setCorreo("");
    setEdad("");
    setEcivil("");
    setVehiculo("");
  };

  const estilo = {
    marginBottom: "1em",
  };

  let venta = {
    cedula,
    nombre,
    telefono,
    correo,
    edad,
    ecivil,
    vehiculo,
  };

  return (
    <Box>
      <form
        style={{
          display: "flex",
          width: "100%",
          marginTop: "5em",
          borderBottom: "10em",
        }}
        onSubmit={handleSubmit}
      >
        <div style={{ width: "50%", textAlign: "center" }}>
          <div style={estilo}>
            <label htmlFor="">Cédula: </label>
            <TextField
              label="Ingrese cédula del cliente"
              onChange={(e) => (venta.cedula = setCedula(e.target.value))}
              value={cedula}
            />
          </div>
          <div style={estilo}>
            <label htmlFor="">Nombre: </label>
            <TextField
              label="Ingrese nombre del cliente"
              onChange={(e) => (venta.nombre = setNombre(e.target.value))}
              value={nombre}
            />
          </div>
          <div style={estilo}>
            <label htmlFor="">Telefono: </label>
            <TextField
              label="Ingrese teléfono del cliente"
              onChange={(e) => (venta.telefono = setTelefono(e.target.value))}
              value={telefono}
            />
          </div>
          <div style={estilo}>
            <label htmlFor="">Correo: </label>
            <TextField
              label="Ingrese correo del cliente"
              onChange={(e) => (venta.correo = setCorreo(e.target.value))}
              value={correo}
            />
          </div>
        </div>
        <div>
          <div style={estilo}>
            <label htmlFor="">Edad: </label>
            <TextField
              label="Ingrese edad del cliente"
              onChange={(e) => (venta.edad = setEdad(e.target.value))}
              value={edad}
            />
          </div>
          <div style={estilo}>
            <label htmlFor="">
              Estado
              <br />
              Civil:{" "}
            </label>
            <TextField
              label="Ingrese estado civil del cliente"
              onChange={(e) => (venta.ecivil = setEcivil(e.target.value))}
              value={ecivil}
            />
          </div>
          <div style={estilo}>
            <label htmlFor="">Vehículo: </label>
            <ComboBox
              onChange={(e) => (venta.vehiculo = setVehiculo(e.target.value))}
              value={vehiculo}
            />
            
          </div>
        </div>
      </form>
      <Button variant="contained" onClick={handleOpen}>
        Registrar
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <p>Su venta ha sido registrada exitosamente, estos son los datos:</p>
          <div>
            <label htmlFor="">Cédula: {venta.cedula}</label>
          </div>
          <div>
            <label htmlFor="">Nombre: {venta.nombre}</label>
          </div>
          <div>
            <label htmlFor="">Correo: {venta.correo}</label>
          </div>
          <div>
            <label htmlFor="">Telefono: {venta.telefono}</label>
          </div>
          <div>
            <label htmlFor="">Edad: {venta.edad}</label>
          </div>
          <div>
            <label htmlFor="">Estado Civil: {venta.ecivil}</label>
          </div>
          <div>
            <label htmlFor="">Vehículo: {venta.vehiculo}</label>
          </div>
          <div>
            <label htmlFor=""></label>
          </div>
        </Box>
      </Modal>
    </Box>
  );
}
export default SaleForm;
