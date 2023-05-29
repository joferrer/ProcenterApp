import { ProcenterAppLayout } from "./../layout/ProcenterAppLayout";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React, { useState } from 'react';



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

export const Simulador = () => {

  const [capital, setCapital] = useState("");
  const [interes, setInteres] = useState("");
  const [tiempo, setTiempo] = useState("");
  let calculo = 0;

  function calcularInteres(){
    calculo = capital * interes* tiempo;
  }

  return (
    <ProcenterAppLayout>
      <Typography variant="h4">Simulador de Crédito</Typography>
      <Box
        sx={{
          "margin-top": "2em",
        }}
      >
        <form onSubmit={calcularInteres()}>
          <div>
            <label htmlFor="">Capital Inicial: </label>
            <input
              id="capital"
              type="number"
              placeholder="Ingrese el capital inicial"
              onChange={(e) => setCapital(e.target.value)}
              autoFocus
              required
            />
          </div>
          <div>
            <label htmlFor="">Tasa de Interes: </label>
            <input
              id="interes"
              type="number"
              onChange={(e) => setInteres(e.target.value)}
              placeholder="Ingrese la tasa de interes"
              required
            />
          </div>
          <div>
            <label htmlFor="">Tiempo: </label>
            <input
              id="tiempo"
              type="number"
              onChange={(e) => setTiempo(e.target.value)}
              placeholder="Ingrese la cantidad de meses"
              required
            />
          </div>
          <button>Calcular</button>
        </form>
        <div>Interes a pagar: {calculo}</div>
      </Box>
    </ProcenterAppLayout>
  );
};
