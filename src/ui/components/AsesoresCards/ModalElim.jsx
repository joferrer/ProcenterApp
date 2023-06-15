import { Box } from "@mui/material";
import React from "react";

const ModalElim = () => {
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
    ></Box>
  );
};

export default ModalElim;
