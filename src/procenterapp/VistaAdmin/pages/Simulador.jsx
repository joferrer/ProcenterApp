import { ProcenterAppLayout } from "./../layout/ProcenterAppLayout";
import { Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React, { useState } from "react";

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

export const Simulador = ({admin}) => {
  const [capital, setCapital] = useState("");
  const [interes, setInteres] = useState("");
  const [tiempo, setTiempo] = useState("");
  let calculo = 0;

  function calcularInteres() {
    calculo = capital * interes * tiempo;
  }

  return (
    <ProcenterAppLayout Admin={admin}>
      <Typography variant="h4">Simulador de Crédito</Typography>
      <Box
        sx={{
          width: "73vw",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          mt: 7,
        }}
      >
        <Box
          sx={{
            // Mueve el componente hacia la mitad de la pantallas
            // Centra verticalmente el componente
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
            padding: "1rem",
            backgroundColor: "#f9f9f9",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            width: "60%", // Establece el ancho deseado para el componente
            height: "60%",
          }}
        >
          <form onSubmit={calcularInteres()}>
            <Grid container justifyContent="center">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "1rem",
                  width: "100%",
                  mt: 2,
                }}
              >
                <Grid item xs={12} sm={6}>
                  <label
                    htmlFor="capital"
                    style={{
                      fontSize: "1.5rem", // Aumenta el tamaño de la fuente
                      width: "30%", // Ajusta el ancho del label
                    }}
                  >
                    <strong>Capital Inicial:</strong>
                  </label>
                  <input
                    id="capital"
                    type="number"
                    placeholder="Ingrese el capital inicial"
                    onChange={(e) => setCapital(e.target.value)}
                    autoFocus
                    required
                    style={{
                      padding: "1rem",
                      borderRadius: "4px",
                      border: "1px solid #ccc",
                      fontSize: "1.5rem", // Aumenta el tamaño de la fuente
                      width: "90%", // Ajusta el ancho del input
                    }}
                  />
                </Grid>
              </div>
            </Grid>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              <Grid item xs={12} sm={6}>
                <label
                  htmlFor="interes"
                  style={{
                    fontSize: "1.5rem", // Aumenta el tamaño de la fuente
                    width: "30%", // Ajusta el ancho del label
                  }}
                >
                  <strong>Tasa de Interes:</strong>
                </label>
                <input
                  id="interes"
                  type="number"
                  onChange={(e) => setInteres(e.target.value)}
                  placeholder="Ingrese la tasa de interes"
                  required
                  style={{
                    padding: "1rem",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                    fontSize: "1.5rem", // Aumenta el tamaño de la fuente
                    width: "90%", // Ajusta el ancho del input
                  }}
                />
              </Grid>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              <Grid item xs={12} sm={6}>
                <label
                  htmlFor="tiempo"
                  style={{
                    fontSize: "1.5rem", // Aumenta el tamaño de la fuente
                    width: "30%", // Ajusta el ancho del label
                  }}
                >
                  <strong>Tiempo:</strong>
                </label>
                <input
                  id="tiempo"
                  type="number"
                  onChange={(e) => setTiempo(e.target.value)}
                  placeholder="Ingrese la cantidad de meses"
                  required
                  style={{
                    padding: "1rem",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                    fontSize: "1.5rem", // Aumenta el tamaño de la fuente
                    width: "90%", // Ajusta el ancho del input
                  }}
                />
              </Grid>
            </div>
            <button
              style={{
                padding: "1rem 2rem",
                borderRadius: "4px",
                backgroundColor: "black",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                fontSize: "1.5rem", // Aumenta el tamaño de la fuente
                width: "100%", // Ajusta el ancho del botón
              }}
            >
              <strong>Calcular</strong>
            </button>
          </form>

          <div style={{ mb: 2 }}>
            <span style={{ fontSize: "1.5rem" }}>Interes a pagar: </span>
            {calculo && (
              <span
                style={{
                  fontWeight: "bold",
                  backgroundColor: "gray",
                  color: "white",
                  fontSize: "1.5rem",
                }}
              >
                {calculo}
              </span>
            )}
          </div>
        </Box>
      </Box>
    </ProcenterAppLayout>
  );
};
