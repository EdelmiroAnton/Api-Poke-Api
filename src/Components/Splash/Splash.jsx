import { Box, Typography } from "@mui/material";
import React from "react";
import "./splash.css";

function Splash() {
  return (
    <>
      <Box className="animation-target splash">
        <Typography variant="h1" class="titulo">
          API POKE API
        </Typography>
      </Box>
    </>
  );
}

export default Splash;
