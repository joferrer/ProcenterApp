import React, { useState } from "react";
import { ProcenterAppLayout } from "../layout/ProcenterAppLayout";

const Contenedor = ({ nombre, id, id2 }) => {
  return (
    <div id="contenedor">
      <textarea id={nombre} readOnly></textarea>

      <button
        id={id}
        onClick={() => {
          document.getElementById(nombre).removeAttribute("readOnly");
          var i = document.getElementById(id2);
          i.className = "accion";
        }}
      >
        
      </button>
      <button
        id={id2}
        className="ocultar"
        onClick={() => {
          document.getElementById(nombre).setAttribute("readOnly", "true");
          var i = document.getElementById(id2);
          i.className = "ocultar";
        }}
      ></button>
    </div>
  );
};

export const Administrador = () => {
  return (
    <ProcenterAppLayout>
      <h2>Administrador</h2>
      <h3>PROCENTER AUTOS</h3>

      <h1>Mision</h1>
      <Contenedor nombre="mision" id="botonNegro1" id2="botonVerde1" />
      <h1>Vision</h1>
      <Contenedor nombre="vision" id="botonNegro2" id2="botonVerde2" />
      <h1>¿Quienes Somos?</h1>
      <Contenedor nombre="quienessomos" id="botonNegro3" id2="botonVerde3" />
      <h1>Gestion de Imagenes (Cliente Feliz)</h1>
    </ProcenterAppLayout>
  );
};
