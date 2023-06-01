import React from "react";
import { Box, Button } from "@mui/material";

function ButtonSubtractID({ handlerSubtract, id }) {
  return (
    <Box>
      <Button
        onClick={handlerSubtract}
        disabled={id === 1}
        sx={{
          padding: "0",
          minWidth: "30px",
          height: "30px",
          color: "black",
          border: "0",
          borderRadius: "50%",
          backgroundColor: "#DDDDDD",
          mt: "10px",
          mb: "10px",
          mr: "25px",
          boxShadow: "0 2px 3px rgba(0, 0, 0, 0.5)",
        }}
      >
        -
      </Button>
    </Box>
  );
}

export default ButtonSubtractID;
