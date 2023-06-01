import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { CardContext } from "../../context/CardContext";
import { useState, useContext } from "react";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import localizedFormat from "dayjs/plugin/localizedFormat";
import updateLocale from "dayjs/plugin/updateLocale";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(localizedFormat);
dayjs.extend(updateLocale);

const timezoneLocation = "America/Bogota";
dayjs.tz.setDefault(timezoneLocation);

const fechaact = dayjs().tz(timezoneLocation).format("MM-DD-YYYY");

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

  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);

  const handleCheckbox1Change = () => {
    setChecked1(true);
    setChecked2(false);
    setRol("Asesor");
  };

  const handleCheckbox2Change = () => {
    setChecked1(false);
    setChecked2(true);
    setRol("Publicista");
  };

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
    setCedula(0);
    setNombre("");
    setCorreo("");
    setTelefono("");
    setFecha(fechaact);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "end",
        width: "100%",
        mt: 4,
        "@media (max-width:599px)": {
          mt: 7,
        },
      }}
    >
      <Button
        variant="contained"
        onClick={handleOpen}
        sx={{
          width: "200px",
          "@media (max-width:599px)": {
            width: "100%",
            mr: 1,
          },
        }}
      >
        Agregar
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          justifyContent: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            width: "50%",
            height: "75%",
            maxWidth: "500px",
            maxHeight: "490px",
            mt: 10,
          }}
        >
          <form onSubmit={handleSubmit}>
            <Grid
              container
              sx={{ display: "flex", justifyContent: "center" }}
              spacing={2}
            >
              <Grid item sm={12} xs={12}>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{ fontWeight: "bold", mt: 1, ml: 2, width: "20%" }}
                  >
                    Rol:
                  </Typography>
                  <FormControlLabel
                    sx={{ width: "40%" }}
                    control={
                      <Checkbox
                        checked={checked1}
                        onChange={handleCheckbox1Change}
                      />
                    }
                    label="Asesor"
                  />
                  <FormControlLabel
                    sx={{ width: "40%" }}
                    control={
                      <Checkbox
                        checked={checked2}
                        onChange={handleCheckbox2Change}
                      />
                    }
                    label="Publicista"
                  />
                </Box>
              </Grid>

              <Grid item sm={12} xs={12}>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    pr: 2,
                    pl: 2,
                  }}
                >
                  <TextField
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                    type="number"
                    id="filled-basic"
                    variant="filled"
                    placeholder="Ingresar cédula"
                    onChange={(e) => setCedula(e.target.value)}
                    value={cedula}
                    required
                    label="Cedula"
                  />
                </Box>
              </Grid>
              <Grid item sm={12} xs={12}>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    pr: 2,
                    pl: 2,
                  }}
                >
                  <TextField
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                    id="filled-basic"
                    variant="filled"
                    label="Nombre"
                    type="text"
                    placeholder="Ingresar nombre"
                    onChange={(e) => setNombre(e.target.value)}
                    value={nombre}
                    required
                  />
                </Box>
              </Grid>

              <Grid item sm={12} xs={12}>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    pr: 2,
                    pl: 2,
                  }}
                >
                  <TextField
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                    label="Correo"
                    id="filled-basic"
                    variant="filled"
                    type="text"
                    placeholder="Ingresar correo"
                    onChange={(e) => setCorreo(e.target.value)}
                    value={correo}
                    required
                  />
                </Box>
              </Grid>
              <Grid item sm={12} xs={12}>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    pr: 2,
                    pl: 2,
                  }}
                >
                  <TextField
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                    label="Telefono"
                    id="filled-basic"
                    variant="filled"
                    type="text"
                    placeholder="Ingresar teléfono"
                    onChange={(e) => setTelefono(e.target.value)}
                    value={telefono}
                    required
                  />
                </Box>
              </Grid>

              <Grid item sm={12} xs={12}>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    pr: 2,
                    pl: 2,
                  }}
                >
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    sx={{ width: "100%" }}
                  >
                    <DemoContainer
                      components={["DatePicker"]}
                      sx={{ width: "100%" }}
                    >
                      <DatePicker
                        sx={{ width: "100%" }}
                        label="Fecha de Ingreso"
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </Box>
              </Grid>
              <Grid item sm={12} xs={12}>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    pr: 2,
                    pl: 2,
                    zIndex: 0,
                  }}
                >
                  <Button
                    type="submit"
                    onClick={() => {
                      setChecked1(false);
                      setChecked2(false);
                    }}
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      backgroundColor: "black",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "darkgrey",
                      },
                    }}
                  >
                    Agregar
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>
    </Box>
  );
}
export default CardForm;
