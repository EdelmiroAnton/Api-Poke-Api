import { useEffect, useState, forwardRef } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button,
  Slide,
} from "@mui/material";

import "./styles.css";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

function Modal() {
  const [open, setOpen] = useState(false);

  const closeModal = () => {
    setOpen(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 1550);
  }, []);

  return (
    <>
      <Dialog
        TransitionComponent={Transition}
        id="dialog"
        open={open}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">
          Bienvenido a la API de Pokemon!
        </DialogTitle>
        <DialogContent className="parrafoDialog">
          <DialogContentText id="dialog-description">
            En este sencillo simulador podrás buscar los 898 Pokemones que la
            API tiene para ofrecernos. Tendrás su imagen, su nombre, sus
            habilidades y que tipo de Pokemon es! Haz click en el botón para
            comenzar.
          </DialogContentText>
        </DialogContent>
        <Button onClick={closeModal}>Comencemos!</Button>
      </Dialog>
    </>
  );
}

export default Modal;
