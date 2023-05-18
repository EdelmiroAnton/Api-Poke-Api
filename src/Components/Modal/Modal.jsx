import { useEffect, useState, forwardRef } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Slide,
} from "@mui/material";
import "./styles.css";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

function Modal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 1550);
  }, []);

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog
        TransitionComponent={Transition}
        id="dialog"
        open={open}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle
          id="dialog-title"
          sx={{
            textAlign: "center",
            fontFamily: "Poppins",
            fontWeight: "bold",
          }}
        >
          Bienvenido a la API de Pokemon!
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="dialog-description"
            sx={{
              fontFamily: "Poppins",
              fontWeight: "bold",
              textAlign: "justify",
              color: "grey",
            }}
          >
            En este sencillo simulador podrás buscar los 898 Pokemones que la
            API tiene para ofrecernos. Tendrás su imagen, su nombre, sus
            habilidades y que tipo de Pokemon es! Haz click en el botón para
            comenzar.
          </DialogContentText>
        </DialogContent>
        <button onClick={closeModal} className="botonDialog">
          <span className="textButton">Comencemos!</span>
        </button>
      </Dialog>
    </>
  );
}

export default Modal;
