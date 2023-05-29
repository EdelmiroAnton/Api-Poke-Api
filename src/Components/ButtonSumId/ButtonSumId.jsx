import { Box, Button } from "@mui/material";
import React from "react";

function ButtonSumId({ handlerSum, id }) {
  return (
    <Box>
      <Button
        onClick={handlerSum}
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
        }}
      >
        +
      </Button>
    </Box>
  );
}

export default ButtonSumId;
