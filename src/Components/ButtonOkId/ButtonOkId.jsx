import { Box, Button } from "@mui/material";
import React from "react";

function ButtonOkId({ searchPokemon }) {
  return (
    <Box>
      <Button
        onClick={searchPokemon}
        sx={{
          padding: "0",
          minWidth: "30px",
          height: "30px",
          color: "black",
          border: "0",
          borderRadius: "50%",
          backgroundColor: "#DDDDDD",
          fontWeight: "bolder",
          mt: "10px",
          mb: "10px",
        }}
      >
        OK
      </Button>
    </Box>
  );
}

export default ButtonOkId;
