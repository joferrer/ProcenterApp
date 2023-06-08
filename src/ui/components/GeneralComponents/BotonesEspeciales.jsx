import { Typography } from "@material-ui/core";
import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Boton = ({ textos }) => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [buttons, setButtons] = useState(textos);
  const handleButtonClick = (buttonId, button) => {
    setSelectedButton(buttonId);
  };

  return (
    <Box>
      {buttons.map((button) => (
        <Link
          key={button.id}
          style={{ textDecoration: "none", color: "white" }}
          to={button.link}
        >
          <Button
            sx={{
              width: "150px",
              fontSize: "20px",
              fontWeight: "bold",
              mr: 2,
              ml: 2,
            }}
            className={`boton ${
              selectedButton === button.id ? "selected" : ""
            }`}
            onClick={() => {
              handleButtonClick(button.id, button);
            }}
          >
            {button.text}
          </Button>
        </Link>
      ))}
    </Box>
  );
};

export default Boton;
