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
          // border: "1px rgb(243, 96, 11) solid",
          borderRadius: "20%",
          backgroundColor: "#DDDDDD",
          fontWeight: "bolder",
          mt: "10px",
          mb: "10px",
          ml:"10px",
          boxShadow: "0 2px 3px rgba(0, 0, 0, 0.5)"
        }}
      >
        OK
      </Button>
    </Box>
  );
}

export default ButtonOkId;
