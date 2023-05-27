import React from "react";
import { Box, Button } from "@mui/material";

function ButtonSubtractID({handlerSubtract, id}) {
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
        }}
      >
        -
      </Button>
    </Box>
  );
}

export default ButtonSubtractID;
