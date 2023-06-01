import { Box, Button } from "@mui/material";
import React from "react";

function ButtonSumId({ handlerSum }) {
  return (
    <Box>
      <Button
        onClick={handlerSum}
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
          boxShadow: "0 2px 3px rgba(0, 0, 0, 0.5)",
        }}
      >
        +
      </Button>
    </Box>
  );
}

export default ButtonSumId;
