import { ProcenterAppLayout } from "./../layout/ProcenterAppLayout";
import {
  Alert,
  Button,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import { Titulo } from "./../../../ui/components/GeneralComponents/TituloPagina";
import TextLabel from "./../../../ui/components/GeneralComponents/TextLabel";

/*let capital = 0;
let interes = 0;
let tiempo = 0;
let calculo = 0;

function calcularInteres() {
  let input1 = document.getElementById("capital");
  let input2 = document.getElementById("interes");
  let input3 = document.getElementById("tiempo");
  capital = input1.value;
  interes = input2.value;
  tiempo = input3.value;
  calculo = capital * interes * tiempo;
}*/

export const Simulador = ({ admin }) => {
  const [cap, setCap] = useState("");
  const [interes, setInteres] = useState("");
  const [tiempo, setTiempo] = useState("");
  const [cuota, setCuo] = useState("");
  const [errorCap, setErrorCap] = useState(false);
  const [errorInt, setErrorInt] = useState(false);
  const [errorMes, setErrorMes] = useState(false);
  const [msg, setErrorMsg] = useState("");
  const [open, setOpen] = useState(false);
  const calcular = () => {
    if (
      (cap <= 0 && interes < 0 && tiempo < 0) ||
      (cap === "" && interes === "" && tiempo === "")
    ) {
      setErrorCap(true);
      setErrorMes(true);
      setErrorInt(true);
      setErrorMsg("Diligencie los campos, por favor!");
      setCuo("");
      setOpen(true);
    } else if (cap <= 0 || cap === "") {
      setErrorCap(true);
      setErrorMsg("Diligencie el campo, por favor!");
      setOpen(true);
      setCuo("");
    } else if (interes === "" || interes < 0) {
      setErrorInt(true);
      setErrorMsg("Diligencie el campo, por favor!");
      setOpen(true);
      setCuo("");
    } else if (tiempo < 0 || tiempo === "") {
      setErrorMes(true);
      setCuo("");
      setErrorMsg("Diligencie el campo, por favor!");
      setOpen(true);
    } else {
      setCuo((cap * (1 + (interes / 100) * (tiempo / 12))) / tiempo);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    setErrorInt(false);
    setErrorCap(false);
    setErrorMes(false);
  };

  return (
    <ProcenterAppLayout Admin={admin}>
      {open ? (
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error">
            {msg}
          </Alert>
        </Snackbar>
      ) : (
        <></>
      )}

      <Titulo titulo={"Simulador de Crédito"} />
      <Box
        sx={{
          width: "73vw",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          mt: 7,
          "@media (max-width:599px)": {
            width: "94vw",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
            padding: "1rem",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            width: "60%",
            "@media (max-width:940px)": {
              width: "80%",
            },
            "@media (max-width:599px)": {
              width: "100%",
              mr: 2,
            },
          }}
        >
          <Box width={"100%"}>
            <Typography
              fontFamily={"Segoe UI"}
              sx={{ width: "100%", float: "left", fontSize: "15pt" }}
            >
              Capital Inicia
            </Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              placeholder={"0000.00"}
              fullWidth
              error={errorCap}
              value={cap}
              onChange={(e) => setCap(e.target.value)}
              type="number"
              sx={{ backgroundColor: "#d6d4d4" }}
            />
          </Box>

          <Grid container spacing={2}>
            <Grid item sm={7} xs={12}>
              <TextLabel
                hold={"Tasa Anual"}
                value={interes}
                error={errorInt}
                setValue={setInteres}
                titulo={"Tasa de Interes(%)"}
              ></TextLabel>
            </Grid>
            <Grid item sm={5} xs={12}>
              <TextLabel
                titulo={"Tiempos"}
                value={tiempo}
                error={errorMes}
                setValue={setTiempo}
                hold={"Meses"}
              ></TextLabel>
            </Grid>
          </Grid>
          <Box width={"100%"}>
            <Button
              onClick={calcular}
              sx={{
                width: "190px",
                height: "55.8px",
                borderRadius: "8px",
                backgroundColor: "black",
                color: "white",
                float: "left",
                fontWeight: 200,
                mb: 2,
                "&:hover": {
                  backgroundColor: "darkgrey",
                },
              }}
            >
              Calcular
            </Button>
            <Grid container>
              <Grid item sm={5} xs={12}>
                <Typography
                  fontFamily={"Segoe UI"}
                  sx={{
                    width: "100%",
                    float: "left",
                    fontSize: "15pt",
                    mt: 1,
                  }}
                >
                  Cuota a Pagar
                </Typography>
              </Grid>
              <Grid item sm={7} xs={12}>
                <TextField
                  disabled={true}
                  id="outlined-basic"
                  variant="outlined"
                  fullWidth
                  type="text"
                  value={cuota}
                  sx={{ backgroundColor: "#d6d4d4" }}
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </ProcenterAppLayout>
  );
};
