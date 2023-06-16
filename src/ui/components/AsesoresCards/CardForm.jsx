import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { CardContext } from "../../context/CardContext";
import { useState, useContext } from "react";
import {
  Alert,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Snackbar,
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
import ImageUploader from "./imagen";
import { startCrearUsuario } from "../../../store/usuario/UsuarioThunks";
import { SnackbarComponent } from "../FeedbackComponents/Snackbar";
import { useDispatch } from "react-redux";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(localizedFormat);
dayjs.extend(updateLocale);

const timezoneLocation = "America/Bogota";
dayjs.tz.setDefault(timezoneLocation);

const fechaact = dayjs().tz(timezoneLocation).format("DD-MM-YYYY");

function CardForm() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [rol, setRol] = useState("");
  const [cedula, setCedula] = useState("");
  const [nombre, setNombre] = useState("");
  const [img, setImg] = useState(null);
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [fecha, setFecha] = useState(dayjs(fechaact, "DD-MM-YYYY"));
  const { createCard } = useContext(CardContext);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);

  const [errorSnackbarOpen, setErrorSnackbarOpen] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [oopen, setOopen] = useState(false);
  const [tipo, setTipo] = useState("");

  const handleCheckbox1Change = () => {
    setChecked1(true);
    setChecked2(false);
    setRol("ASESOR");
  };

  const handleCheckbox2Change = () => {
    setChecked1(false);
    setChecked2(true);
    setRol("PUBLICISTA");
  };

  const handleCloseSnackbar = () => {
    setErrorSnackbarOpen(false);
  };

  const handleClosed = () => {
    setOopen(false);
  };

  const handleSubmit = async (e) => {
    if (rol === "") {
      e.preventDefault();
      setErrorSnackbarOpen(true);
      return;
    } else {
      const fechaVincu = dayjs(fecha).format("DD-MM-YYYY");
      e.preventDefault();
      const form = {
        rol: rol,
        cedula: cedula,
        nombre: nombre,
        correo: correo,
        telefono: telefono,
        fechaVincu: fechaVincu,
        image: img,
      };
      const resp = await dispatch(startCrearUsuario(form));
      if (resp.ok) {
        setOopen(true);
        setMensaje("Empleado Agregado");
        setTipo("success");
        createCard({
          rol,
          cedula,
          nombre,
          correo,
          telefono,
          fechaVincu,
        });
        setRol("");
        setCedula(0);
        setNombre("");
        setCorreo("");
        setTelefono("");
        setFecha(dayjs(fechaact, "DD-MM-YYYY"));
        setImg(null);
        setChecked1(false);
        setChecked2(false);
      } else {
        setMensaje(resp.error);
        setOopen(true);
        setTipo("error");
      }
    }
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
      <SnackbarComponent
        mostrar={oopen}
        mensaje={mensaje}
        tipo={tipo}
        cerrar={handleClosed}
      />
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
          overflowY: "auto",
          mt: 5,
          mb: 4,
          "@media (max-width:599px)": {
            mb: 0,
          },
        }}
      >
        <Box
          sx={{
            borderRadius: "20px",
            backgroundColor: "white",
            width: "59%",
            height: "77%",
            "@media (max-width:799px)": {
              width: "80%",
              height: "77%",
            },
            "@media (max-width:599px)": {
              width: "70%",
              height: "100%",
              mt: 0,
            },
          }}
        >
          <Snackbar
            open={errorSnackbarOpen}
            autoHideDuration={5000}
            onClose={handleCloseSnackbar}
          >
            <Alert onClose={handleCloseSnackbar} severity="error">
              No ha seleccionado ningún rol.
            </Alert>
          </Snackbar>
          <form onSubmit={handleSubmit}>
            <Grid
              container
              sx={{ backgroundColor: "white", borderRadius: "10px", p: 1 }}
            >
              <Grid item sm={6} xs={12}>
                <ImageUploader img={img} setImg={setImg} />
              </Grid>
              <Grid item sm={6} xs={12} sx={{ mt: 2 }}>
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
                        type="email"
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
                        type="number"
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
                            disabled
                            value={fecha}
                            minDate={dayjs(fechaact, "DD-MM-YYYY")}
                            onChange={(date) => setFecha(date)}
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
                        Agregar Asesor
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>
    </Box>
  );
}
export default CardForm;
