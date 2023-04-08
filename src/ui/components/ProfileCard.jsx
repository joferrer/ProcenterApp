/*import Button from "@mui/material/Button";
import { useContext } from "react";
import { CardContext } from "../context/CardContext";

function Card({ card }) {
  
  const style1 = {
    width: "150%",
    backgroundColor: 'blue',
  };

  const style2 = {
    width: "50%",
    height: "100%"
  };

  const style3 = {
    width: "50%",
    height: "100%"
  };

  const { deleteCard } = useContext(CardContext);

  return (
    <div style={style1}>
      <div style={style2}>
        <p>Cedula: {card.cedula}</p>
        <p>Nombre: {card.nombre}</p>
        <p>Fecha de contratación: {card.fecha}</p>
        <p>Vehículos vendidos: 0</p>
      </div>
      <Button variant="outlined" onClick={() => deleteCard(card.cedula)}>
        Eliminar
      </Button>
    </div>
  );
}

export default Card;
*/

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { CardContext } from "../context/CardContext";
import { useContext } from "react";

function ProfileCard({ card }) {

  const { deleteCard } = useContext(CardContext);


  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://johannesippen.com/img/blog/humans-not-users/header.jpg"
        title="profile"
      />
      <CardContent>
        <p>Cedula: {card.cedula}</p>
        <p>Nombre: {card.nombre}</p>
        <p>Fecha de contratación: {card.fecha}</p>
        <p>Vehículos vendidos: 0</p>
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          size="small"
          onClick={() => deleteCard(card.cedula)}
        >
          Eliminar
        </Button>
      </CardActions>
    </Card>
  );
}
export default ProfileCard;