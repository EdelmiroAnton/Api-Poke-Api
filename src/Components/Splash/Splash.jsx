import { Box, Typography } from "@mui/material";
import React from "react";
import "./styles.css";

function Splash() {
  const addAndRemoveSplash = () => {
    const splash = document.querySelector(".splash");
    splash.classList.add("display-none");
  };

  setTimeout(() => {
    addAndRemoveSplash();
  }, 1500);

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
