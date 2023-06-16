import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { useState } from "react";
import {
  Alert,
  Checkbox,
  FormControlLabel,
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
import { startActualizarInfo } from "./../../../store/usuario/UsuarioThunks";
import { useDispatch } from "react-redux";
import { SnackbarComponent } from "./../FeedbackComponents/Snackbar";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(localizedFormat);
dayjs.extend(updateLocale);

const timezoneLocation = "America/Bogota";
dayjs.tz.setDefault(timezoneLocation);

const fechaact = dayjs().tz(timezoneLocation).format("DD-MM-YYYY");

const ModalEdita = ({ card }) => {
  const dispatch = useDispatch();
  const [rol, setRol] = useState(card.rol);
  const [cedula, setCedula] = useState(card.cedula);
  const [nombre, setNombre] = useState(card.nombre);
  const [img, setImg] = useState(card.img);
  const [correo, setCorreo] = useState(card.correo);
  const [telefono, setTelefono] = useState(card.telefono);
  const [fecha, setFecha] = useState(dayjs(card.fechaVincu, "DD-MM-YYYY"));

  const [checked1, setChecked1] = useState(card.rol === "ASESOR");
  const [checked2, setChecked2] = useState(card.rol === "PUBLICISTA");

  const [mensaje, setMensaje] = useState("");
  const [oopen, setOopen] = useState(false);
  const [tipo, setTipo] = useState("");

  const handleCheckbox1Change = () => {
    setChecked1(true);
    setChecked2(false);
    setRol("ASESOR");
  };
  const handleClosed = () => {
    setOopen(false);
  };

  const handleCheckbox2Change = () => {
    setChecked1(false);
    setChecked2(true);
    setRol("PUBLICISTA");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = {
      nombre: nombre,
      correo: correo,
      telefono: telefono,
      cedula: parseInt(card.cedula),
      rol: rol,
    };

    const resp = await dispatch(startActualizarInfo(card.id, form));
    if (resp.ok) {
      setOopen(true);
      setMensaje("Información Actualizada");
      setTipo("success");
      window.location.reload();
    } else {
      e.preventDefault();
      setMensaje(resp.error);
      setOopen(true);
      setTipo("error");
    }
  };

  const handleCloseSnackbar = () => {
    setErrorSnackbarOpen(false);
  };
  return (
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
      <SnackbarComponent
        mostrar={oopen}
        mensaje={mensaje}
        tipo={tipo}
        cerrar={handleClosed}
      />
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
                        disabled
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
                        disabled
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
                    disabled
                    variant="filled"
                    placeholder="Ingresar cédula"
                    onChange={(e) => setCedula(e.target.value)}
                    value={cedula}
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
                    disabled
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
                        value={fecha}
                        format="DD-MM-YYYY"
                        disabled
                        onChange={(date) => setStartDate(date)}
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
                    Actualizar Información
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default ModalEdita;
